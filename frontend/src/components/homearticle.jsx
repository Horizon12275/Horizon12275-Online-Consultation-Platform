import React, { useState, useEffect } from "react";
import { Col, Flex, Grid, List, Row, Space, Typography } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import TagContext from "../context/tagcontext"; // 导入标签的上下文
import {
  getAllArticles,
  getRecommendedArticles,
} from "../services/articleService"; // 导入书籍相关的服务函数
import HomeArticleCard from "./homearticle_card";


export default function HomeArticle() {
  const all = getAllArticles();
  // 获取全局的标签状态
  const { selectedTags } = React.useContext(TagContext);

  // 定义推荐的文章数据
  const [recommended, setRecommended] = useState([]);

  // 获取推荐的文章数据
  useEffect(() => {
    const fetchRecommended = async () => {
      const recommended = await getRecommendedArticles();
      setRecommended(recommended);
    };
    fetchRecommended();
  }, []);

  // 根据标签筛选文章数据
  const filteredData =
    selectedTags === "All"
      ? recommended
      : all.filter((item) =>
          item.tags.some((tag) => selectedTags.includes(tag))
        );

  // 渲染文章列表
  return (
    <Row justify="center">
      {/* Row 里面的元素会从左向右排列 */}
      {filteredData.map((item) => (
        <HomeArticleCard key={item.id} article={item} />
      ))}
    </Row>
  );
}
