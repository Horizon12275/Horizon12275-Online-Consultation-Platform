import React, { useState } from "react";
import { Collapse, Input, Layout } from "antd";

const { Panel } = Collapse;
const { Header } = Layout;

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    // 处理搜索逻辑，例如发起搜索请求等
    console.log("Perform search with value:", value);
  };

  return (
    <Input.Search
      size="large"
      placeholder="请输入搜索内容"
      enterButton="搜索"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
    />
  );
};

export default SearchBar;
