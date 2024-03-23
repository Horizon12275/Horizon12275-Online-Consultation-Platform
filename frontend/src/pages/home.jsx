import React from "react";
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;
import HomeArticle from "../components/homearticle";
import MyCarousel from "../components/carousel";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import TagBar from "../components/tagbar";
import SearchBar from "../components/searchbox";
import { SearchProvider } from "../context/searchcontext";

export default function HomePage() {
  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <Header
            style={{
              background: "rgba(255, 255, 255, 0)",
              width: "80%",
              height: "50px",
              position: "sticky",
              top: 20,
              right: 0,
              zIndex: 999,
              padding: "0 20px",
              margin: "0 auto",
            }}
          >
            <SearchBar />
          </Header>
          <Layout>
            <Layout>
              <Content style={{ minHeight: "100vh" }}>
                {/* 中间内容 */}
                <h1 style={{ fontSize: "40px", margin: "30px" }}>热门话题</h1>
                <TagBar />
                <HomeArticle />
              </Content>
            </Layout>
            <Sider width={300} style={{ background: "#f5f5f5" }}>
              {/* 右侧内容 */}
              <MyCarousel />
            </Sider>
          </Layout>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
}
