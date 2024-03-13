import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { Layout } from "antd";
import React from "react";
const { Sider, Content } = Layout;

export function BasicLayout({ children }) {
  return (
    <Layout hasSider style={{ minWidth: "1200px" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{}}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export function ChatLayout({ children }) {
  return (
    <Layout hasSider style={{ minWidth: "1200px" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{}}>{children}</Content>
      </Layout>
    </Layout>
  );
}
