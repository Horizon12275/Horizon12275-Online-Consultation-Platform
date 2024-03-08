import React from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Histogram from "../components/histogram";
import HomeArticle from "../components/homearticle";
import HomeContent from "../components/homecontent";
import MyCarousel from "../components/carousel";

export default function Homepage() {
  return (
    <Layout>
      <Layout>
        <Content style={{ minHeight:"100vh"}}>
          {/* 右侧内容 */}
          <h2>右侧内容</h2>
          <p>这里放置右侧的其他内容</p>
        </Content>
      </Layout>
      <Sider width={300} style={{ background: "#fff" }}>
        <MyCarousel />
      </Sider>
    </Layout>
  );
}
