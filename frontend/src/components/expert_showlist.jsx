import React, { useContext } from "react";
import { List, Space, Flex } from "antd";
import ExpertShowCard from "./expert_showcard";
import { getAllExperts } from "../services/expertService";
import SearchContext from "../context/searchcontext";

export default function ExpertShowList() {
  const { searchValue, handleSearch } = useContext(SearchContext);
  const experts = getAllExperts();
  const sv = new URLSearchParams(window.location.search).get("search");
  if (sv) {
    handleSearch(sv);
  }
  console.log('searchValue:', searchValue); 
  // 过滤专家数据，优化了搜索逻辑
  const filteredExperts = experts.filter(expert => {
    for (let key in expert) {
      if (typeof expert[key] === 'string' && expert[key].toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
 

  return (
    <Flex
      gap="middle"
      justify="space-around"
      align="center"
      style={{ marginTop: "30px" }}
    >
      <Space direction="vertical" style={{ width: "80%" }}>
        <List
          style={{ width: "100%" }}
          grid={{
            gutter: 16,
            column: 3,
          }}
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 9,
            style: { textAlign: "center" },
            showSizeChanger: false,
            showQuickJumper: true,
          }}
          dataSource={filteredExperts}
          renderItem={(item) => (
            <List.Item>
              <ExpertShowCard data={item} />
            </List.Item>
          )}
        />
      </Space>
    </Flex>
  );
}
