import React, { useState, useEffect } from "react";
import { List } from "antd";
import TagContext from "../context/tagcontext"; // 导入标签的上下文
import {
  getAllArticles,
  getRecommendedArticles,
  searchArticles,
} from "../services/articleService"; // 导入书籍相关的服务函数
import HomeArticleCard from "./homearticle_card";
import { Link, useSearchParams } from "react-router-dom";

export default function HomeArticle() {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  useEffect(() => {
    setSearchParams({ keyword: keyword });
    searchArticles({ keyword: keyword }).then((res) => {
      setArticles(res);
    });
  }, [keyword]);

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
