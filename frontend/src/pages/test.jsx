import React, { useEffect, useState } from "react";
import { login } from "../services/loginService";
import { Button, Form, Input } from "antd";
import { getHistory } from "../services/messageService";
import { getOtherUserById, getUser } from "../services/userService";
import { useParams } from "react-router-dom";

const WebSocketChat = () => {
  const { receiverId } = useParams();
  const [sender, setSender] = useState({}); //以后应该用useContext
  const [receiver, setReceiver] = useState({});
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const initWebSocket = (sender, receiver) => {
    const socket = new WebSocket(`ws://localhost:8080/ws/${receiverId}`);

    socket.onopen = () => {
      setIsConnected(true);
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      if (receivedMessage.receiver.id == sender.id&&receivedMessage.sender.id==receiver.id)//如果是发给自己的消息
        setMessages((prevMessages) => [...prevMessages, receivedMessage]); // 添加到现有消息
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    socket.onclose = () => {
      setIsConnected(false);
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
        setReceiver(values[2]);
        initWebSocket(values[0], values[2]);
      })
      .catch((err) => {
        alert(err);
      });
  }, []); // 空数组确保仅首次加载时运行

  const sendMessage = () => {
    if (isConnected && inputMessage.trim() !== "") {
      ws.send(inputMessage);
      if (!(sender.id === receiver.id))
        //如果不是给自己发消息
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            content: inputMessage,
            sendTime: Date.now(),
            sender: { username: sender.username },
            receiver: { username: receiver.username },
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
    <div>
     
      <h1>Chat Room</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{`发送时间: ${new Date(
            message.sendTime
          ).toLocaleString()} 内容: ${message.content} 发送者：${
            message.sender.username
          } 接收者：${message.receiver.username}\n`}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message here"
        />
        <button onClick={sendMessage} disabled={!isConnected}>
          Send
        </button>
      </div>
    </div>
  );
};

export default WebSocketChat;
