import { useParams } from "react-router-dom";
import React from "react";
import { Layout } from "antd";
import Histogram from "../components/histogram";
import HomeArticle from "../components/homearticle";
import MyCarousel from "../components/carousel";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import TagBar from "../components/tagbar";
import ExpertInfoCard from "../components/expert_infocard";
import Rating from "../components/ratings";
import CommentList from "../components/comment_list";
import ExpertContent from "../components/expertcontent";

const { Header, Footer, Sider, Content } = Layout;

const ExpertProfilePage = () => {
  let { id } = useParams();
  return (
    <TagProvider>
      <BasicLayout>
        <Layout>
          <Layout>
            <Content style={{ minHeight: "100vh" }}>
              {/* 右侧内容 */}
              <ExpertContent />
            </Content>
          </Layout>
          <Sider width={300} style={{ background: "#fff" }}>
            <Histogram />
          </Sider>
        </Layout>
      </BasicLayout>
    </TagProvider>
  );
};
export default ExpertProfilePage;
