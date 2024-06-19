import { Input, Row } from "antd";
import * as React from "react";
import EmojiDropdown from "./emoji_dropdown";
import ImageUploader from "./image_upload";

function Messagebox({
  inputMessage,
  handleInputChange,
  sendMessage,
  setInputMessage,
  selectedImages,
  setSelectedImages,
}) {
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
          top: 750px;
          left: 1000px;
          width: 620px;
          height: 80px;
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
        <nav className="flex gap-4 justify-between px-5 my-auto">
          <EmojiDropdown value={inputMessage} setValue={setInputMessage} />
          <ImageUploader
            multiple
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            children={
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/295d4cbba18c8555324aa8193d53ca9d7005accc5bd91937a2bf67ced21afa67?apiKey=9e661a5e0ad74c878ca984d592b3752c&" />
            }
          />
        </nav>
        <Input.TextArea
          className="message-text border-none "
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Message"
          onPressEnter={sendMessage}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9756dca2a9a5dbe643a121821f637f456f994d6b255efabb6fd57baa8d97aa6?apiKey=b565e599026f4ea2ba591e53566a67d8&"
          alt="Message icon"
          className="icon cursor-pointer"
          onClick={sendMessage}
        />
      </div>
    </>
  );
}

export default Messagebox;
