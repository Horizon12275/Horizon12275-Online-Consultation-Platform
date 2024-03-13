import React from "react";
import { useEffect, useState } from "react";
import ChatRoom from "../components/chatroom";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Layout } from "antd";
import RateButton from "../components/rate";
import ConsultationHistoryList from "../components/consultation_history_list";
import { ChatLayout } from "../layouts";

const { Sider, Content } = Layout;

const ConsultPage = () => {
  let { id } = useParams();

  return (
    <ChatLayout>
      <Layout>
        <Sider style={{height:"100vh",background:"white"}}>
          <ConsultationHistoryList />
          <RateButton />
        </Sider>

        <Content style={{ height: "100vh" }}>
          <ChatRoom id={id} />
        </Content>
      </Layout>
    </ChatLayout>
  );
};

export default ConsultPage;
