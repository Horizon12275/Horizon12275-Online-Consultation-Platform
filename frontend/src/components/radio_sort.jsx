import React, { useState } from "react";
import { Flex, Radio } from "antd";

export default function RadioSort({ onSortChange }) {
  const [sortBy, setSortBy] = useState("price"); // 默认按价格排序

  const handleSortChange = (value) => {
    setSortBy(value);
    onSortChange(value); // 调用父组件传递的回调函数，更新排序方式
  };

  return (
    <Flex horizontal gap="middle" align="center">
      <h3>Sort by</h3>
      <Radio.Group
        defaultValue="price"
        buttonStyle="solid"
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <Radio.Button value="price">价格</Radio.Button>
        <Radio.Button value="rating">好评度</Radio.Button>
      </Radio.Group>
    </Flex>
  );
}
