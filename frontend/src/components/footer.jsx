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
    </Footer>
  );
};

export default CustomFooter;
