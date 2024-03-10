import React, { useState } from "react";
import {
  HomeOutlined,
  FileTextOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  SolutionOutlined,
  UserOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Avatar } from "antd";
import { flex } from "@antv/component";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  // 控制导航栏的展开和收起
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navItems1 = [
    { label: "首页", value: "/", icon: <HomeOutlined /> },
    { label: "咨询历史", value: "/history", icon: <FileTextOutlined /> },
    { label: "专家咨询", value: "/expert", icon: <UsergroupAddOutlined /> },
    { label: "广场", value: "/square", icon: <TeamOutlined /> },
    { label: "成为专家", value: "/become-expert", icon: <SolutionOutlined /> },
  ];

  const navItems2 = [
    { label: "用户主页", value: "/user", icon: <UserOutlined /> },
    { label: "登录/注册", value: "/login", icon: <LoginOutlined /> },
  ];

  const navMenuItems1 = navItems1.map((item) => ({
    key: item.value,
    label: <Link to={item.value}>{item.label}</Link>,
    icon: item.icon,
  }));

  const navMenuItems2 = navItems2.map((item) => ({
    key: item.value,
    label: <Link to={item.value}>{item.label}</Link>,
    icon: item.icon,
  }));

  return (
    <Sider
      collapsible
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "10px 0",
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          items={navMenuItems1}
        />
        <Menu
          theme="dark"
          mode="inline"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          items={navMenuItems2}
        />
      </div>
    </Sider>
  );
};
export default Sidebar;
