import React from "react";
import { List } from "antd";
import HomeArticleCard from "./homearticle_card";

export default function HomeArticle({ articles }) {
  return (
    <List
      dataSource={articles}
      grid={{
        column: 3,
      }}
      pagination={{
        pageSize: 6,
      }}
      renderItem={(article) => (
        <List.Item>
          <HomeArticleCard article={article} />
        </List.Item>
      )}
    ></List>
  );
}
