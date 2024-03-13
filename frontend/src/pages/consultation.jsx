import React from "react";
import { useEffect, useState } from "react";
import ChatRoom from "../components/chatroom";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Flex, Layout,Divider } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { ChatLayout } from "../layouts";
import CommentBox from "../components/comment_box";


const { Sider, Content } = Layout;

const ConsultPage = () => {
  let { id } = useParams();

  return (
    <ChatLayout>
      <Flex>
        <div
          style={{
            width: "350px",
            backgroundColor: "#f5f5f5",
            padding: "0 10px",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <ConsultationHistoryList />
          <Divider style={{margin:"10px 0"}} />
          <RateButton />
          <CommentBox />
        </div>
        <div style={{ height: "100vh", flex: 1 }}>
          <ChatRoom id={id} />
        </div>
      </Flex>
    </ChatLayout>
  );
};

export default ConsultPage;
