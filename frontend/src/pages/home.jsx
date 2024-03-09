import React from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Histogram from "../components/histogram";
import HomeArticle from "../components/homearticle";
import MyCarousel from "../components/carousel";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import TagBar from "../components/tagbar";

export default function Homepage() {
  return (
    <TagProvider>
      <BasicLayout>
        <Layout>
          <Layout>
            <Content style={{ minHeight: "100vh" }}>
              {/* 右侧内容 */}
              <TagBar />
              <HomeArticle />
            </Content>
          </Layout>
          <Sider width={300} style={{ background: "#fff" }}>
            <MyCarousel />
          </Sider>
        </Layout>
      </BasicLayout>
    </TagProvider>
  );
}
