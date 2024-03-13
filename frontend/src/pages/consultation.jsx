import React from "react";
import { useEffect, useState } from "react";
import ChatRoom from "../components/chatroom";
import { useParams } from "react-router-dom";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数
import { Layout } from "antd";
import ConsultationHistoryList from "../components/consultation_history_list";
import RateButton from "../components/rate";
import { BasicLayout } from '../layouts'
import CommentBox from "../components/comment_box";

const { Sider, Content } = Layout;

const ConsultPage = () => {
  let { id } = useParams();

  return (
    <BasicLayout>
      <Layout>
        <Sider style={{ width: '30%' ,backgroundColor : 'grey'}}>
          <ConsultationHistoryList />
          <RateButton />
          <CommentBox />
        </Sider>
        <Content style={{ height: "100vh" }}>
          <ChatRoom id={id} />
        </Content>
      </Layout>
    </BasicLayout>
  );
};

export default ConsultPage;
