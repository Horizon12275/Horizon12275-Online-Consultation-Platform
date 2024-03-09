import { useParams } from "react-router-dom";
import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import Histogram from "../components/histogram";
import HomeArticle from "../components/homearticle";
import MyCarousel from "../components/carousel";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import TagBar from "../components/tagbar";
import ExpertInfoCard from "../components/expert_infocard";
import Rating from "../components/ratings";
import CommentList from "../components/comment_list";

const { Header, Footer, Sider, Content } = Layout;

const ExpertProfilePage = () => {
  // 从url中获取专家id
  let { id } = useParams();

  return (
    <TagProvider>
      <BasicLayout>
        <Layout>
          <Layout>
            <Content style={{ minHeight: "100vh" }}>
              {/* 中间内容 */}
              <ExpertInfoCard />
            </Content>
          </Layout>
          <Sider width={300} style={{ background: "#fff" }}>
            {/* 右侧内容 */}
            <h2 style={{marginLeft : '20px'}}>用户评价：</h2>
            <Histogram />
            <h2 style={{ marginLeft: '20px' }}>精选评论：</h2>
          </Sider>
        </Layout>
      </BasicLayout>
    </TagProvider>
  );
};
export default ExpertProfilePage;
