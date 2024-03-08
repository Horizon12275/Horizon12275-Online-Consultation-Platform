import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { Layout } from "antd";
import React from "react";
const { Sider, Content } = Layout;

export function BasicLayout({ children }) {
  return (
    <Layout >
      <Sider collapsible>
        <Sidebar />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
