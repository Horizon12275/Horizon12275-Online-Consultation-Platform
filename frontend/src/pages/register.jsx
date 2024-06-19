import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  CodeOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { register, sendCode } from "../services/loginService";
function RegisterPage() {
  const [currentEmail, setCurrentEmail] = useState("");

  const containerStyle = {
    width: "50%",
    height: "100vh", // 调整容器高度，使其占据更多垂直空间
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
    color: "#1677ff", // 修改颜色为蓝色
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
      <Form initialValues={{ remember: true }} onFinish={register}>
        <div style={containerStyle}>
          <img
            src="/JustAskBlue.png"
            alt="Logo"
            style={{ marginBottom: "10px" }}
          />
          <div
            className="title"
            style={{ fontSize: "2em", marginBottom: "20px" }}
          >
            SIGN UP
          </div>
          <div className="subtitle" style={subtitleStyle}>
            If you already have an account, you can{" "}
            <a href="/login" style={linkStyle}>
              LOGIN HERE
            </a>
            !
          </div>
          <Form.Item
            className="input-container"
            style={inputStyle}
            id="email"
            name="email"
            rules={[{ required: true, message: "Please enter the email!" }]}
          >
            <div>
              <label style={labelStyle}>Email</label>
              <Input
                prefix={<MailOutlined />}
                placeholder="Enter your email address"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                allowClear
              />
            </div>
          </Form.Item>
          <Form.Item
            className="input-container"
            style={inputStyle}
            id="verificationCode"
            name="verificationCode"
            rules={[
              {
                required: true,
                message: "Please enter your verification code!",
              },
            ]}
          >
            <div>
              <label style={labelStyle}>Verification Code</label>
              <Input
                prefix={<CodeOutlined />}
                placeholder="Enter the verification code you've received"
                allowClear
              />
            </div>
          </Form.Item>
          <Form.Item
            className="input-container"
            style={inputStyle}
            rules={[{ required: true, message: "Please enter the email!" }]}
          >
            <div>
              <Button
                onClick={() => sendCode(currentEmail)}
                style={{
                  width: "100%",
                  backgroundColor: "#1677ff",
                  color: "white",
                }}
              >
                Get Your Verification Code
              </Button>
            </div>
          </Form.Item>
          <Form.Item
            className="input-container"
            style={inputStyle}
            id="username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <div>
              <label style={labelStyle}>Username</label>
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter your username"
                allowClear
              />
            </div>
          </Form.Item>
          <Form.Item
            className="input-container"
            style={inputStyle}
            id="password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <div>
              <label style={labelStyle}>Password</label>
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                allowClear
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
          </Form.Item>
          <Form.Item
            className="input-container"
            style={inputStyle}
            id="confirm_password"
            name="confirm_password"
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <div>
              <label style={labelStyle}>Confirm Password</label>
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="Confirm your Password"
                allowClear
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>
          </Form.Item>
          <div className="register-btn" style={inputStyle}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", backgroundColor: "#295573" }}
            >
              Register Now!
            </Button>
          </div>
          <div className="input-container" style={{ ...inputStyle }}>
            <div style={{ marginBottom: "10px", fontSize: "21px" }}>
              Or want to request for an{" "}
              <a href="/become-expert" style={linkStyle}>
                EXPERT ACCOUNT
              </a>{" "}
              now?
            </div>
            {/* <div>
            <Checkbox>
              I've read the{" "}
              <a href="/user_agreement" style={linkStyle}>
                User Agreement and Privacy Policy
              </a>{" "}
            </Checkbox>
          </div> */}
          </div>
        </div>
      </Form>
    </div>
  );
}

export default RegisterPage;
