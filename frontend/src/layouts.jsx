import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { Layout } from "antd";
import React from "react";
const { Content } = Layout;

export function BasicLayout({ children }) {
  return (
    <Layout hasSider style={{ minWidth: "1600px",minHeight: "800px"  }}>
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
    <Layout hasSider style={{ minWidth: "1600px", minHeight: "550px" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{}}>{children}</Content>
      </Layout>
    </Layout>
  );
}
