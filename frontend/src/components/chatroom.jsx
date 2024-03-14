import React from "react";
import "@chatui/core/es/styles/index.less";
import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import data from "../json/messages.json";

const ChatRoom = ({ expert }) => {
  const initialMessages = data.messages;

  const defaultQuickReplies = [
    {
      icon: "message",
      name: "转到AI助手",
      isNew: true,
      isHighlight: true,
    },
    {
      name: "短语1",
    },
    {
      name: "短语2",
    },
    {
      name: "短语3",
    },
  ];

  const { messages, appendMsg, setTyping } = useMessages(initialMessages);

  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: "text",
          content: { text: "您好 很高兴为您提供咨询！" },
          user: {
            avatar: "/" + expert.image,
          },
        });
      }, 100);
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item) {
    handleSend("text", item.name);
  }

  function renderMessageContent(msg) {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case "text":
        return <Bubble content={content.text} />;
      case "image":
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  }

  return (
    <div style={{ minHeight: "550px", flex: 1, height: "100vh" }}>
      <Chat
        locale="zh-CN"
        navbar={{ title: expert.name }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
      />
    </div>
  );
};

export default ChatRoom;
