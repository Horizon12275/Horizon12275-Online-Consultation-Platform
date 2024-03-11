import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import ExpertInfoCard from "../components/expert_infocard";
import Rating from "../components/ratings";
import CommentList from "../components/comment_list";
import { getComments } from "../services/expertService";
import { getExpertById } from "../services/expertService"; // 导入专家相关的服务函数

const { Header, Footer, Sider, Content } = Layout;

const ExpertProfilePage = () => {
  let { id } = useParams();

  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments(id);
      setComments(comments);
    };
    fetchComments();
  }, [id]);

  const [expert, setExpert] = useState({});

  // 获取专家的数据
  useEffect(() => {
    getExpertById(id).then((res) => {
      setExpert(res);
    });
  }, []);

  return (
    <TagProvider>
      <BasicLayout>
        <Layout>
          <Layout>
            <Content style={{ minHeight: "100vh" }}>
              <ExpertInfoCard expert={expert} />
            </Content>
          </Layout>
          <Sider width={"30%"} style={{ background: "#fff" }}>
            <Rating />
            <CommentList comments={comments} />
          </Sider>
        </Layout>
      </BasicLayout>
    </TagProvider>
  );
};
export default ExpertProfilePage;
