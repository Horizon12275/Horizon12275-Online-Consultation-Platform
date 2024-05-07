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

  if (sortBy === "price") {
    experts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    experts.sort((a, b) => b.rating - a.rating);
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
        dataSource={experts}
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
