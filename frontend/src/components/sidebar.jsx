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
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navItems = [
    { label: "首页", value: "/", icon: <HomeOutlined /> },
    { label: "咨询历史", value: "/history", icon: <FileTextOutlined /> },
    { label: "专家咨询", value: "/expert", icon: <UsergroupAddOutlined /> },
    { label: "广场", value: "/square", icon: <TeamOutlined /> },
    { label: "成为专家", value: "/become-expert", icon: <SolutionOutlined /> },
    { label: "用户主页", value: "/user", icon: <UserOutlined /> },
    { label: "登录/注册", value: "/login", icon: <LoginOutlined /> },
  ];

  const navMenuItems = navItems.map(item => ({
    key: item.value,
    label: <Link to={item.value}>{item.label}</Link>,
    icon: item.icon,
  }));

  return (
    <Sider collapsible >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        items={navMenuItems}
      />
    </Sider>
  );
};
export default Sidebar;
