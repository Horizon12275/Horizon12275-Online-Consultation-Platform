import { Menu, Input } from "antd";
import {
  HomeOutlined,
  HistoryOutlined,
  TeamOutlined,
  GlobalOutlined,
  UserAddOutlined,
  UserOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Menu
      mode="horizontal"
      style={{
        minWidth: "1000px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        margin: "0 ",
      }}
    >
      <Menu.Item key="logo" >
        OCP
      </Menu.Item>

      <Input.Search style={{ maxWidth: "200px" }} placeholder="搜索..." />

      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="history" icon={<HistoryOutlined />}>
        <Link to="/history">我的咨询历史</Link>
      </Menu.Item>
      <Menu.Item key="consultation" icon={<TeamOutlined />}>
        <Link to="/consultation">专家咨询</Link>
      </Menu.Item>
      <Menu.Item key="square" icon={<GlobalOutlined />}>
        <Link to="/square">广场</Link>
      </Menu.Item>
      <Menu.Item key="becomeExpert" icon={<UserAddOutlined />}>
        <Link to="/become-expert">成为专家</Link>
      </Menu.Item>
      <Menu.Item key="login" icon={<LoginOutlined />}>
        <Link to="/login">登录/注册</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
