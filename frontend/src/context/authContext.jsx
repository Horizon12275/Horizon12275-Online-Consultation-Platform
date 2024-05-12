import React, { createContext, useContext, useEffect, useState } from "react";

// 创建一个上下文对象
const AuthContext = createContext();

// 创建一个 AuthProvider 组件来提供登录状态
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [client, setClient] = useState(null);
  const [expert, setExpert] = useState(null);

  // 在组件加载时从 localStorage 中加载用户状态
  useEffect(() => {
    const savedUser = sessionStorage.getItem("user");
    const savedClient = sessionStorage.getItem("client");
    const savedExpert = sessionStorage.getItem("expert");
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedClient) setClient(JSON.parse(savedClient));
    if (savedExpert) setExpert(JSON.parse(savedExpert));
  }, []);

  // 在用户状态变化时保存到 localStorage 中
  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("client", JSON.stringify(client));
    sessionStorage.setItem("expert", JSON.stringify(expert));
  }, [user, client, expert]);

  return (
    <AuthContext.Provider value={{ user, setUser , client, setClient, expert, setExpert}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
