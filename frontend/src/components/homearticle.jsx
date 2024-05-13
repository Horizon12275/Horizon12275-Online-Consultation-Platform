import React from "react";
import { List } from "antd";
//import HomeArticleCard from "./homearticle_card";
import { ArticleCard } from "./expert_articles";

export default function HomeArticle({ articles,length }) {
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
          <ArticleCard article={article} />
        </List.Item>
      )}
    ></List>
  );
}
