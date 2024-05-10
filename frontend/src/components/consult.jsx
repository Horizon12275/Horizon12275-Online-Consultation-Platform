import * as React from "react";

const ChatMessage = ({ message, time, isReceived }) => (
    <div className={`chat-message ${isReceived ? "received" : "sent"}`}>
        <div className="message-content">{message}</div>
        <div className="message-meta">
            <div className="message-time">{time}</div>
            <img
                src={isReceived ? "https://cdn.builder.io/api/v1/image/assets/TEMP/9c26193174ef9bc362bc2618464cf9e3cde1611b15be9b876766906701d3058d?apiKey=b565e599026f4ea2ba591e53566a67d8&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/58a5dbc9afab586b5e6561fe7a0022a701c4ecaa2c5846bd55119c89808fc227?apiKey=b565e599026f4ea2ba591e53566a67d8&"}
                alt="Message status icon"
                className="message-status-icon"
            />
        </div>
    </div>
);

const ChatMessages = () => {
    const messages = [
        {
            id: 1,
            message:
                "OMG 😲 do you remember what you did last night at the work night out?",
            time: "18:12",
            isReceived: true,
        },
        {
            id: 2,
            message: "no haha",
            time: "18:16",
            isReceived: false,
        },
        {
            id: 3,
            message: "i don't remember anything 😄",
            time: "18:16",
            isReceived: false,
        },
    ];

    return (
        <div className="chat-messages">
            {messages.map((message) => (
                <ChatMessage key={message.id} {...message} />
            ))}
        </div>
    );
};

function ChatApp() {
    return (
        <>
            <div className="chat-container">
                <div className="chat-header">Today</div>
                <ChatMessages />
            </div>
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
            top:130px;
            left:980px;
            width:610px;
            height: 620px;
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
          color: #fff;
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