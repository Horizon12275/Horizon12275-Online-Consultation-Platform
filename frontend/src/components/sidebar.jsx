import React from "react";
import {
  HomeOutlined,
  FileTextOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  SolutionOutlined,
  UserOutlined,
  LoginOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Flex, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import UserOrLogin from "./login_status";

const { Sider } = Layout;

const Sidebar = () => {
  // 控制导航栏的展开和收起

  const menuItems = [
    {
      label: "Home",
      value: "/",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7578b42594aaecbb15294edfbb20e8d5b8238fa9789278c9437c13b583981681?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      label: "Experts",
      value: "/expert",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe1f7d779e1cb4aa26a49439af034934f03aa9024f8a3a83885b322d66ac46a2?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      label: "Consulting",
      value: "/expert/1/consultation",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07d261bcd92e5b651bbf3ee474dd7d3fd577dd2a898811375f3cf1b699518c71?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      label: "Articles",
      value: "/article",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/07d261bcd92e5b651bbf3ee474dd7d3fd577dd2a898811375f3cf1b699518c71?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      label: "Plaza",
      value: "/plaza",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b7c55e1879373d855dc8c7b241dfcb63ac54bddbf3dee01f1c40e58e55618ba?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      label: "Be Expert",
      value: "/become-expert",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84841d85ef1193d6b8bee18151161336ed1a0282dff45b9e832ec2a3ccf9e6f9?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      label: "Profile",
      value: "/user",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5889a1cc004cbe2696521a1d1a3fd9466e393044d2b77f1f0be3b2966c617977?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
  ];

  function Icon({ src, alt }) {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 aspect-square w-[30px]"
      />
    );
  }

  function MenuItem({ icon, label, value }) {
    return (
      <Link to={value}>
        <div className="flex gap-5 px-5 whitespace-nowrap">
          <Icon src={icon} alt="" />
          <div className="flex-auto text-black">{label}</div>
        </div>
      </Link>
    );
  }
  return (
    <Sider
      theme="light"
      width={220}
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        bottom: 0,

        zIndex: 1000,
      }}
    >
      <Flex vertical justify="space-between" className="h-full">
        <div className="flex flex-col justify-center pt-3 pb-5">
          <nav className="flex flex-col justify-center w-full text-2xl">
            <ul className="flex flex-col w-full">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={` flex gap-5 px-2.5 ${
                    index === 0 ? "py-4 leading-[117%]" : "py-3.5"
                  } ${index === 3 || index === 5 ? "items-start" : ""}`}
                >
                  <MenuItem
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <UserOrLogin />
      </Flex>
    </Sider>
  );
};
export default Sidebar;
