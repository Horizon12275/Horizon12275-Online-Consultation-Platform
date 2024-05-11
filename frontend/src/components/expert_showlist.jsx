import React, { useContext, useEffect, useState } from "react";
import { List, Flex } from "antd";
import ExpertShowCard from "./expert_showcard";

import TagContext from "../context/tagcontext";
import { useSearchParams } from "react-router-dom";
import { searchExperts } from "../services/expertService";

const ExpertShowList = ({ sortBy }) => {
  const { selectedTags, setSelectedTags } = useContext(TagContext);
  const [experts, setExperts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  useEffect(() => {
    setSearchParams({ keyword: keyword });
    searchExperts({ keyword }).then((res) => {
      setExperts(res);
    });
  }, [keyword]);

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
