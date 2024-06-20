import React from "react";
import { Input, Checkbox, Button, Form } from "antd";
import {
  MailOutlined,
  LockOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { login } from "../services/loginService";
import { useAuth } from "../context/authContext";
import { getUser } from "../services/userService";

function LoginPage() {
  const { setUser, setClient, setExpert } = useAuth();
  const loginAndSetUser = async (values) => {
    try {
      await login(values);
      await getUser().then((res) => {
        if (res.role === "user") {
          setClient(res.client);
          alert("Login successfully!");
          location.href = "/";
        } else if (res.role === "expert") {
          setExpert(res.expert);
          alert("Login successfully!");
          location.href = "/";
        } else if (res.role === "admin") {
          alert("Login successfully,welcome admin!");
          location.href = "/";
        }
        setUser(res);
      });
    } catch (error) {
      alert(error);
    }
  };
  const containerStyle = {
    width: "50%",
    height: "90vh", // 调整容器高度，使其占据更多垂直空间
    position: "fixed",
    top: 0,
    right: 0, // 调整位置为左上角
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px", // 增加内边距，提供更多空间
  };

  const inputStyle = {
    marginBottom: "25px", // 增加纵向间距
    width: "60%", // 设置宽度为60%
  };

  const labelStyle = {
    marginBottom: "15px", // 增加纵向间距
    textAlign: "left",
  };

  const subtitleStyle = {
    fontSize: "1.2em",
    marginBottom: "30px",
  };

  const linkStyle = {
    textDecoration: "underline", // 添加下划线效果
    cursor: "pointer", // 修改鼠标样式为手型，表明可以点击
  };

  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2020/12/18/00/43/medical-5840876_1280.png"
        alt="Login Image"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "50%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
      <Form
        style={containerStyle}
        initialValues={{ remember: true }}
        onFinish={loginAndSetUser}
      >
        <div
          className="title"
          style={{ fontSize: "2em", marginBottom: "20px" }}
        >
          SIGN IN
        </div>
        <div className="subtitle" style={subtitleStyle}>
          If you don't have an account, you can{" "}
          <a href="/register" style={linkStyle}>
            REGISTER HERE
          </a>
          !
        </div>

        <Form.Item
          className="input-container"
          style={inputStyle}
          id="username"
          name="username"
          rules={[{ required: true, message: "请输入您的用户名!" }]}
        >
          <div>
            <label style={labelStyle}>Email</label>
            <Input prefix={<MailOutlined />} placeholder="Email" allowClear />
          </div>
        </Form.Item>
        <Form.Item
          id="password"
          name="password"
          rules={[{ required: true, message: "请输入您的密码!" }]}
          className="input-container"
          style={inputStyle}
        >
          <div>
            <label style={labelStyle}>Password</label>
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              allowClear
            />
          </div>
        </Form.Item>

        <div
          className="input-container"
          style={{
            ...inputStyle,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Checkbox>Remember me</Checkbox>
          {/* <a href="/forgot-password" style={linkStyle}>
            Forget Password?
          </a> */}
        </div>
        <div className="login-btn" style={inputStyle}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginPage;
