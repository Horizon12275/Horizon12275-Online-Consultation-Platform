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
      >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="history" icon={<FileTextOutlined />}>
            咨询历史
          </Menu.Item>
          <Menu.Item key="expert" icon={<UsergroupAddOutlined />}>
            专家咨询
          </Menu.Item>
          <Menu.Item key="square" icon={<TeamOutlined />}>
            广场
          </Menu.Item>
          <Menu.Item key="become-expert" icon={<SolutionOutlined />}>
            成为专家
          </Menu.Item>

          <Menu.Item key="user">
            <Avatar
              size="small"
              src="https://via.placeholder.com/150"
              style={{ marginRight: 0 }}
            />
            用户主页
          </Menu.Item>
          <Menu.Item key="login" icon={<LoginOutlined />}>
            登录/注册
          </Menu.Item>

      </Menu>
    </Sider>
  );
};
export default Sidebar;
