import React from "react";
import { useEffect, useState } from "react";
import ChatRoom from "../components/chatroom";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Layout } from "antd";

const { Sider, Content } = Layout;

const ConsultPage = () => {
  let { id } = useParams();

  return (
    <Layout>

      <Content style={{height:"100vh"}}>
        <ChatRoom id={id} />
      </Content>
    </Layout>
  );
};

export default ConsultPage;
