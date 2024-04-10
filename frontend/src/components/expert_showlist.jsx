import React, { useContext, useEffect, useState } from "react";
import { List, Space, Flex } from "antd";
import ExpertShowCard from "./expert_showcard";
import { getAllExperts } from "../services/expertService";
import SearchContext from "../context/searchcontext";
import TagContext from "../context/tagcontext";
import { findExpertArticleTags } from "../services/articleService";

const ExpertShowList = ({ sortBy }) => {
  const { searchValue, handleSearch } = useContext(SearchContext);
  const { selectedTags, setSelectedTags } = useContext(TagContext);
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    getAllExperts().then((res) => {
      setExperts(res);
    });
  }, []);
  const sv = new URLSearchParams(window.location.search).get("search");
  if (sv) {
    handleSearch(sv);
  }
  console.log("searchValue:", searchValue);
  // 过滤专家数据，优化了搜索逻辑
  let filteredExperts = experts.filter((expert) => {
    for (let key in expert) {
      if (
        typeof expert[key] === "string" &&
        expert[key].toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  filteredExperts =
    selectedTags === "All"
      ? filteredExperts
      : filteredExperts.filter((expert) =>
          findExpertArticleTags(expert).includes(selectedTags)
        );

  if (sortBy === "price") {
    filteredExperts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    filteredExperts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <Flex gap="middle" justify="space-around" align="center">
      <List
        grid={{
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
        renderItem={(expert) => (
          <List.Item>
            <ExpertShowCard item={expert} />
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default ExpertShowList;
