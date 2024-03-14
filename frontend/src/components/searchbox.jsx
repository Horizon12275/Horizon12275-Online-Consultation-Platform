import React, { useContext } from "react";
import { Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import SearchContext from "../context/searchcontext";

const { Search } = Input;

const SearchBar = () => {
  const { handleSearch: contextHandleSearch } = useContext(SearchContext);
  const navigate = useNavigate();
  const location = useLocation();

  // 修改 handleSearch 函数，加入页面跳转逻辑
  const handleSearch = (value) => {
    contextHandleSearch(value); // 可选：如果你还需要在上下文中保存搜索值
    if (location.pathname !== "/expert") {
      navigate(`/expert?search=${encodeURIComponent(value)}`);
    } else {
      // 如果已经在 /list 页面，也可以选择重新加载/刷新页面或直接更新页面内容
      // 这里只是简单地使用 navigate 进行演示
      navigate(`/expert?search=${encodeURIComponent(value)}`, {
        replace: true,
      });
    }
  };

  return (
    <Search
      size="large"
      placeholder="请输入搜索内容"
      enterButton="搜索"
      allowClear
      onSearch={(value) => handleSearch(value)}
    />
  );
};

export default SearchBar;
