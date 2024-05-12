import * as React from "react";

const VoiceChatItem = ({ topic, date, time }) => (
    <div className="voice-chat-item">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5c75be9173a9a3d1648c07e1da814a3cd82ca36e33765804d5ced14a350ff44?apiKey=b565e599026f4ea2ba591e53566a67d8&" alt="Voice chat icon" className="voice-chat-icon" />
        <div className="voice-chat-details">
            <div className="voice-chat-topic-time">
                <div className="voice-chat-topic">{topic}</div>
                <div className="voice-chat-time-label">Time:</div>
            </div>
            <div className="voice-chat-date-time">
                <div className="voice-chat-date">{date}</div>
                <div className="voice-chat-time">{time}</div>
            </div>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d162d9fa1ec3e4ae4981cd504aa6b0c231a41c0ac79e74f2906fe2770110d5b4?apiKey=b565e599026f4ea2ba591e53566a67d8&" alt="Arrow icon" className="arrow-icon" />
    </div>
);

const voiceChatData = [
    {
        topic: "Topic: Design",
        date: "Date: 2.2.2024",
        time: "00:31:00"
    },
    {
        topic: "Topic: Design",
        date: "Date: 2.2.2024",
        time: "00:31:00"
    },
    {
        topic: "Topic: Design",
        date: "Date: 2.2.2024",
        time: "00:31:00"
    },
    {
        topic: "Topic: Design",
        date: "Date: 2.2.2024",
        time: "00:31:00"
    }
];

function VoiceChatList() {
    return (
        <>
            <div className="voice-chat-list">
                <h2 className="voice-chat-heading">Voice Chat:</h2>
                {voiceChatData.map((item, index) => (
                    <VoiceChatItem
                        key={index}
                        topic={item.topic}
                        date={item.date}
                        time={item.time}
                    />
                ))}
            </div>

            <style jsx>{`
        .voice-chat-list {
          display: flex;
          max-width: 355px;
          flex-direction: column;
          padding: 0 20px;
            position: absolute;
            top:30px;
            left: 580px;
        }

        .voice-chat-heading {
          color: #000;
          text-align: center;
          align-self: center;
          font: 400 24px Inter, sans-serif;
        }

        .voice-chat-item {
          border-radius: 10px;
          background-color: #fff;
          display: flex;
          margin-top: 14px;
          align-items: start;
          gap: 20px;
          justify-content: space-between;
          padding: 24px 39px 24px 14px;
        }

        .voice-chat-icon {
          aspect-ratio: 0.98;
          object-fit: auto;
          object-position: center;
          width: 40px;
        }

        .voice-chat-details {
          display: flex;
          margin-top: 6px;
          flex-direction: column;
        }

        .voice-chat-topic-time {
          display: flex;
          gap: 20px;
          color: #000;
          justify-content: space-between;
        }

        .voice-chat-topic {
          font: 600 14px Public Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .voice-chat-time-label {
          font: 400 12px Public Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .voice-chat-date-time {
          display: flex;
          margin-top: 18px;
          gap: 20px;
          justify-content: space-between;
        }

        .voice-chat-date {
          color: var(--M3-sys-light-on-surface, #1d1b20);
          letter-spacing: 0.5px;
          font: 500 11px/145% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .voice-chat-time {
          color: #000;
          font: 400 12px Public Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .arrow-icon {
          aspect-ratio: 0.69;
          object-fit: auto;
          object-position: center;
          width: 22px;
          align-self: stretch;
          margin: auto 0;
        }
      `}</style>
        </>
    );
}

export default VoiceChatList;