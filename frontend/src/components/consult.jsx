import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOtherUserById, getUser } from "../services/userService";
import { getHistory } from "../services/messageService";
import Messagebox from "./message_box";
import ConsultHead from "./consult_head";

const ChatMessage = ({ message, isSender }) => (
  <div className={`chat-message ${isSender ? "sent" : "received"}`}>
    <div className="message-content">{message.content}</div>
    <div className="message-meta">
      <div className="message-time">
        {`${new Date(message.sendTime).toLocaleString()}`}
      </div>
      <img
        src={
          message.read
            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/9c26193174ef9bc362bc2618464cf9e3cde1611b15be9b876766906701d3058d?apiKey=b565e599026f4ea2ba591e53566a67d8&"
            : "https://cdn.builder.io/api/v1/image/assets/TEMP/58a5dbc9afab586b5e6561fe7a0022a701c4ecaa2c5846bd55119c89808fc227?apiKey=b565e599026f4ea2ba591e53566a67d8&"
        }
        alt="Message status icon"
        className="message-status-icon"
      />
    </div>
  </div>
);

const scrollToBottom = () => {
  const container = document.getElementById("bottom");
  if (container) container.scrollIntoView({ behavior: "smooth" });
};

const ChatMessages = ({ messages, rid }) => {
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
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
  );
};

function ChatApp() {
  const { receiverId } = useParams();
  const [sender, setSender] = useState({}); //以后应该用useContext
  const [receiver, setReceiver] = useState({});
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [ws, setWs] = useState(null);
  const initWebSocket = (sender, receiver) => {
    const socket = new WebSocket(`ws://localhost:8080/ws/${receiverId}`);

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      if (
        receivedMessage.receiver.id == sender.id &&
        receivedMessage.sender.id == receiver.id
      )
        //如果是发给自己的消息
        setMessages((prevMessages) => [...prevMessages, receivedMessage]); // 添加到现有消息
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    setWs(socket);

    return () => {
      socket.close(); // 组件卸载时关闭连接
    };
  };

  useEffect(() => {
    Promise.all([
      getUser(),
      getHistory(receiverId),
      getOtherUserById(receiverId),
    ])
      .then((values) => {
        setSender(values[0]);
        setMessages(values[1]);
        messages.sort((a, b) => a.sendTime - b.sendTime);
        setReceiver(values[2]);
        initWebSocket(values[0], values[2]);
      })
      .catch((err) => {
        alert(err);
        location.href = "/login";
      });
  }, [receiverId]); // 空数组确保仅首次加载时运行

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      ws.send(inputMessage);
      if (!(sender.id === receiver.id))
        //如果不是给自己发消息
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            content: inputMessage,
            sendTime: Date.now(),
            sender: { username: sender.username },
            receiver: { username: receiver.username, id: receiver.id },
          },
        ]);
      setInputMessage(""); // 清空输入
    } else {
      console.warn("Cannot send message: WebSocket not connected");
    }
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <>
      <ConsultHead receiver={receiver} />
      <div className="chat-container">
        <div className="chat-header">Today</div>
        <ChatMessages messages={messages} rid={receiverId} />
      </div>
      <Messagebox
        inputMessage={inputMessage}
        handleInputChange={handleInputChange}
        sendMessage={sendMessage}
        setInputMessage={setInputMessage}
      />
      <style jsx>{`
        .chat-container {
          align-items: center;
          border-radius: 16px;
          background-color: var(--Blue-100, #d1e9ff);
          display: flex;
          max-width: 1000px;
          flex-direction: column;
          font-weight: 400;
          padding: 24px;
          position: absolute;
          top: 100px;
          left: 940px;
          width: 560px;
          height: 540px;
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
