import * as React from "react";

function Avatar({ src, alt }) {
    return <img className="avatar" src={src} alt={alt} />;
}

function UserInfo({ name, status }) {
    return (
        <div className="user-info">
            <h2 className="user-name">{name}</h2>
            <div className="user-status">
                <span className="status-indicator"></span>
                <span className="status-text">{status}</span>
            </div>
        </div>
    );
}

function CallButton() {
    return (
        <button className="call-button">
            <img
                className="call-icon"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c021edfc9b00b4b26bfa8ac69dab5ee7e915ca7310725b8e4ddfc4bb009bc60?apiKey=b565e599026f4ea2ba591e53566a67d8&"
                alt="Call icon"
            />
            <span className="call-text">Call</span>
        </button>
    );
}

function ConsultHead() {
    const user = {
        avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c9e5922f1408367594bcb29e62a64126d87a726dbe74c2060a2a049e92134a4?apiKey=b565e599026f4ea2ba591e53566a67d8&",
        name: "Florencio Dorrance",
        status: "Online",
    };

    return (
        <>
            <div className="user-card">
                <Avatar src={user.avatar} alt={`${user.name}'s avatar`} />
                <UserInfo name={user.name} status={user.status} />
                <CallButton />
            </div>

            <style jsx>{`
        .user-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 2000px;
          gap:110px;
          font-weight: 600;
          padding: 10px 10px;
            position: absolute;
            top:20px;
            left:940px
        }

        @media (max-width: 991px) {
          .user-card {
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }

        .avatar {
          width: 50px;
          height:50px;
          object-fit: cover;
          border-radius: 50%;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          color: #000;
          font-size: 20px;
          font-family: Inter, sans-serif;
          margin: 0;
        }

        .user-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #000;
          line-height: 150%;
        }

        @media (max-width: 991px) {
          .user-status {
            white-space: initial;
          }
        }

        .status-indicator {
          width: 10px;
          height: 10px;
          background-color: #68d391;
          border-radius: 50%;
        }

        .status-text {
          font-family: Inter, sans-serif;
        }

        .call-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background-color: #b2ddff;
          color: #1570ef;
          font-size: 16px;
          font-family: Inter, sans-serif;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .call-button {
            white-space: initial;
          }
        }

        .call-icon {
          width: 24px;
          height: 24px;
        }

        .call-text {
          margin: auto 0;
        }
      `}</style>
        </>
    );
}
export  default ConsultHead