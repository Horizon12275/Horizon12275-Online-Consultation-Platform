import * as React from "react";

function Messagebox() {
  return (
      <>
        <style jsx>{`
        .message-container {
          align-self: stretch;
          border-radius: 12px;
          background-color: #fff;
          display: flex;
          gap: 16px;
          font-size: 16px;
          color: var(--Navy-Grey, #707991);
          font-weight: 400;
          white-space: nowrap;
          padding: 8px 16px;
          position: absolute;
          top:650px;
          left:950px;
          width: 550px;
          height:100px
        }

        @media (max-width: 991px) {
          .message-container {
            flex-wrap: wrap;
            white-space: initial;
          }
        }

        .icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }

        .message-text {
          font-family: Inter, sans-serif;
          flex: 1;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .message-text {
            max-width: 100%;
          }
        }
      `}</style>

        <div className="message-container">
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/701f569110a2e55438e8d39f84febbf793abb2e00ba22365ecc7e49453487c5b?apiKey=b565e599026f4ea2ba591e53566a67d8&"
              alt="Message icon"
              className="icon"
          />
          <p className="message-text">Message</p>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9756dca2a9a5dbe643a121821f637f456f994d6b255efabb6fd57baa8d97aa6?apiKey=b565e599026f4ea2ba591e53566a67d8&"
              alt="Message icon"
              className="icon"
          />
        </div>
      </>
  );
}

export default Messagebox;