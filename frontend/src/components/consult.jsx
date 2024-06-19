import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getOtherUserById,
  getReceiverId,
  getUser,
} from "../services/userService";
import { getHistory, postImage } from "../services/messageService";
import Messagebox from "./message_box";
import ConsultHead from "./consult_head";
import toTime from "../utils/time";
import { BASEURL, WSURL, postFormData } from "../services/requestService";
import { Image } from "antd";

const ChatMessage = ({ message, isSender }) => (
  <div className={`chat-message ${isSender ? "sent" : "received"}`}>
    {message.type === "message" && (
      <div className="message-content">{message.content}</div>
    )}
    {message.type === "image" && (
      <Image
        src={message.content}
        alt="Image"
        className=" max-w-64 rounded-md"
      />
    )}
    <div className="message-meta">
      <div className="message-time">
        {`${toTime(new Date(message.sendTime))}`}
      </div>
      {isSender && (
        <img
          src={
            message.seen
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/9c26193174ef9bc362bc2618464cf9e3cde1611b15be9b876766906701d3058d?apiKey=b565e599026f4ea2ba591e53566a67d8&"
              : "https://pic.616pic.com/ys_b_img/00/25/57/f5whnOarFb.jpg"
          }
          alt="Message status icon"
          className="message-status-icon"
        />
      )}
    </div>
  </div>
);

const scrollToBottom = () => {
  const container = document.getElementById("bottom");
  if (container) container.scrollIntoView({ behavior: "smooth" });
};

const ChatMessages = ({ messages, rid }) => {
  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 1000);
  }, [messages]);
  return (
    rid && (
      <div className="chat-messages overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage
            key={message.sendTime} //这里应该用message.id 但是新的message没有id 待定
            message={message}
            isSender={message.receiver.id == rid}
          />
        ))}
        <div id="bottom" />
      </div>
    )
  );
};

function ChatApp({ sid, receiver, receiverId, setConsultations }) {
  //sid是当前用户id（用于初始化ws） receiver是对方(专家或客户，用于渲染header)
  //获取接收者id 如果当前用户是专家则为用户id 如果当前用户是用户则为专家id 发送到后端转换成userId
  const [rid, setRid] = useState(); //receiverId对应的userId
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedImages, setSelectedImages] = useState([]); // 用于上传图片
  const ws = useRef(null);
  const initWebSocket = (sid, rid) => {
    //sid是发送者id rid是接收者id 这里的id已经是后端获取的userId了
    const socket = new WebSocket(`${WSURL}/${receiverId}`);

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      socket.send(JSON.stringify({ type: "seen", data: rid }));
      ws.current = socket; // 保存WebSocket对象
    };

    socket.onmessage = (event) => {
      const type = JSON.parse(event.data).type;
      if (type === "message" || type === "image") {
        const receivedMessage = { ...JSON.parse(event.data).data, type: type };
        if (
          receivedMessage.receiver.id == sid &&
          receivedMessage.sender.id == rid
        )
          setMessages((prevMessages) => [...prevMessages, receivedMessage]); // 添加到现有消息
        if (receivedMessage.sender.id == rid)
          socket.send(JSON.stringify({ type: "seen", data: rid }));
        setConsultations((prev) => {
          //接收消息时更新专家列表 把当前专家移到最前面
          const index = prev.findIndex(
            (consultation) => consultation.expert.id == receiverId
          );
          const consutation = prev[index]; //当前专家
          consutation.time = new Date().getTime(); //更新时间
          prev.splice(index, 1); //删除当前专家
          return [consutation, ...prev];
        });
      } else if (type === "seen") {
        const uid = JSON.parse(event.data).data;
        if (uid == rid)
          setMessages((prevMessages) =>
            prevMessages.map((message) => {
              if (message.sender.id == sid) message.seen = true;
              return message;
            })
          );
      } else if (type === "error") {
        alert(JSON.parse(event.data).data);
        location.href = "/"; // 重定向到登录页
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };
  };

  useEffect(() => {
    //ws?.close(); // 关闭先前的连接
    setMessages([]); // 清空聊天记录
    if (receiverId)
      getReceiverId(receiverId) //根据接收者id获取userId
        .then((res) => {
          setRid(res);
          getHistory(res).then((history) => {
            //根据获取的userId获取聊天记录
            setMessages(history);
            messages.sort((a, b) => a.sendTime - b.sendTime);
          });
          initWebSocket(sid, res);
        })
        .catch((err) => {
          console.error(err);
        });
    return () => {
      ws.current?.close();
    };
  }, [receiverId]); // 空数组确保仅首次加载时运行

  const sendMessage = (event) => {
    event.preventDefault(); //阻止换行
    //先发送图片
    if (selectedImages.length > 0) {
      selectedImages.forEach(async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        await postImage(formData).then((res) => {
          ws.current.send(
            JSON.stringify({
              type: "image",
              data: res,
            })
          );
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: "image",
              content: res,
              receiver: { id: rid },
              sender: { id: sid },
              sendTime: new Date().getTime(),
              seen: false,
            },
          ]);
        });
      });
      setSelectedImages([]);
    }
    if (inputMessage.trim() !== "") {
      ws.current.send(JSON.stringify({ type: "message", data: inputMessage }));
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          type: "message",
          content: inputMessage,
          receiver: { id: rid },
          sender: { id: sid },
          sendTime: new Date().getTime(),
          seen: false,
        },
      ]);
      setInputMessage(""); // 清空输入
    }
    setConsultations((prev) => {
      //发送消息时更新专家列表 把当前专家移到最前面
      const index = prev.findIndex(
        (consultation) => consultation.expert.id == receiverId
      );
      const consutation = prev[index]; //当前专家
      consutation.time = new Date().getTime(); //更新时间
      prev.splice(index, 1); //删除当前专家
      return [consutation, ...prev];
    });
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <>
      <ConsultHead receiver={receiver} rid={receiverId} />
      <div className="chat-container">
        <div className="chat-header">Today</div>
        <ChatMessages messages={messages} rid={rid} />
      </div>
      <Messagebox
        inputMessage={inputMessage}
        handleInputChange={handleInputChange}
        sendMessage={sendMessage}
        setInputMessage={setInputMessage}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
      <style jsx>{`
        .chat-container {
          align-items: center;
          border-radius: 16px;
          background-color: var(--Blue-100, #d1e9ff);
          display: flex;

          flex-direction: column;
          font-weight: 400;
          padding: 24px;
          position: absolute;
          top: 130px;
          left: 710px;
          width: 900px;
          height: 600px;
        }

        @media (max-width: 991px) {
          .chat-container {
            padding: 0 20px;
          }
        }

        .chat-header {
          justify-content: center;
          border-radius: 12px;
          background-color: rgba(61, 112, 184, 0.6);
          align-self: center;
          color: #fff;
          white-space: nowrap;
          padding: 4px 12px;
          font: 16px Inter, sans-serif;
        }

        @media (max-width: 991px) {
          .chat-header {
            white-space: initial;
          }
        }

        .chat-messages {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 24px;
          width: 100%;
        }

        .chat-message {
          border-radius: 12px;
          padding: 4px 12px;
          max-width: 402px;
          color: var(--Rich-Black, #011627);
          font: 16px/20px Inter, sans-serif;
        }

        .chat-message.received {
          background-color: #fff;
          align-self: flex-start;
        }

        .chat-message.sent {
          background-color: var(--Light-Green, #78e378);
          align-self: flex-end;
        }

        .message-meta {
          display: flex;
          gap: 4px;
          font-size: 12px;
          line-height: 133%;
          margin-top: 4px;
        }

        .chat-message.received .message-meta {
          justify-content: flex-end;
        }

        .message-time {
          font-family: Inter, sans-serif;
          color: #8e8e8e;
        }

        .message-status-icon {
          width: 14px;
          height: 14px;
        }
      `}</style>
    </>
  );
}

export default ChatApp;
