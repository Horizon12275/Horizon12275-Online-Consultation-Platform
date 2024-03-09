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
    <Header
      style={{
        background: "rgba(255, 255, 255, 0)",
        width: "100%",
        height: "30px",
        position: "sticky",
        top: 0,
        zIndex: 999,
        padding: "0 20px",
      }}
    >
      <Collapse style={{ width: "100%" }} size="small">
        <Panel header="搜索" key="1" style={{ background: "white" }}>
          <Input.Search
            placeholder="请输入搜索内容"
            enterButton="搜索"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={handleSearch}
          />
        </Panel>
      </Collapse>
    </Header>
  );
};

export default SearchBar;
