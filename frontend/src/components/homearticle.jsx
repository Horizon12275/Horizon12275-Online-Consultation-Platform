import React, { useState, useEffect } from "react";
import { Avatar, List, Space, Button, Row, Typography, Card } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import TagContext from "../context/tagcontext"; // 导入标签的上下文
import { getRecommendedArticles } from "../services/articleServices"; // 导入书籍相关的服务函数

const { Paragraph } = Typography;

// 用于渲染文章列表的组件
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function HomeArticle() {
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
      : recommended.filter((item) =>
          item.tag.some((tag) => selectedTags.includes(tag))
        );

  // 渲染文章列表
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={filteredData}
        style={{ width: "100%", marginTop: "40px" }}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={450}
                alt="logo"
                src={item.image} // Replace the image source with item.image from filteredData
              />
            }
          >
            <List.Item.Meta
              title={<div style={{ fontSize: "30px" }}>{item.title}</div>}
              description={item.author}
            />
            <Paragraph
              ellipsis={{ rows: 6 }}
            >
              {item.description}
            </Paragraph>
          </List.Item>
        )}
      />
    </>
  );
}
