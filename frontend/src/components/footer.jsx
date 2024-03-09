import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      © 2024 Online Consultation Platform
      <br />
      <a href="/about"> 关于作者 </a>
    </Footer>
  );
};

export default CustomFooter;
