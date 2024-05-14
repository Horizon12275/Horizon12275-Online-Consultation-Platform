import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import { Layout } from "antd";
import React, { useEffect } from "react";
import { checkAuth } from "./services/loginService";
import { useAuth } from "./context/authContext";
const { Content } = Layout;

export function PrivateLayout({ children }) {
  const { setUser, setClient, setExpert } = useAuth();
  useEffect(() => {
    checkAuth()
      .then((res) => {
        setUser(res);
        if (res.role === "user") {
          setClient(res.client);
        } else {
          setExpert(res.expert);
        }
      })
      .catch((e) => {
        alert(e);
        location.href = "/login";
      });
  }, []);
  return (
    <Layout hasSider style={{ minWidth: "1600px", minHeight: "800px" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{}}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export function PublicLayout({ children }) {
  return (
    <Layout hasSider style={{ minWidth: "1600px", minHeight: "800px" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Content style={{}}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
