import React, { useEffect, useState } from 'react';

const wstest = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    setWs(socket);

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      const receivedMessage = event.data;
      setMessages(prevMessages => [receivedMessage]);
      console.log(receivedMessage);
    };

    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && inputMessage.trim() !== '') {
      ws.send(inputMessage);
      setInputMessage('');
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
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input 
          type="text" 
          value={inputMessage} 
          onChange={handleInputChange} 
          placeholder="Type your message here" 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default wstest;
