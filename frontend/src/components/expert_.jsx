import React, { useState, useEffect } from "react";
import { List, Card, Button, Typography, Image, Divider, Space} from "antd";
import { ShoppingCartOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import Link from "antd/es/typography/Link";
import { getExpertById } from "../services/expertService";
const { Title, Paragraph } = Typography;

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export const ArticleList = ({ articles }) => {
  return (
    <List
    style={{width: "80%",margin: "0 auto"}}
      itemLayout="vertical"
      dataSource={articles}
      renderItem={(article) => (
        <List.Item>
          <List.Item>
            <Card
              hoverable
              bodyStyle={{ padding: "10px 15px" }}
              actions={[
                <IconText
                  icon={ShoppingCartOutlined}
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
            >
              <Link
                href={`/details/${article.id}`}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className="book-info"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                  }}
                >
                  <Title
                    level={4}
                    style={{ margin: "0 0 3px 0px" }}
                    ellipsis={{ rows: 2 }}
                    title={article.title}
                  >
                    {article.title}
                  </Title>
                  <Title
                    type="secondary"
                    style={{ margin: "0 0 3px 0px", fontSize: "14px" }}
                  >
                    {article.author}
                  </Title>
                  <Paragraph
                    ellipsis={{ rows: 6, expandable: true, symbol: "展开" }}
                    style={{
                      margin: "0 0 10px 0px",
                      fontSize: "16px",
                      textIndent: "1em",
                    }}
                  >
                    {article.content}
                  </Paragraph>
                </div>
                <img
                  src={"/" + article.cover}
                  alt="Book Cover"
                  style={{
                    alignSelf: "center",
                    width: "12%",
                    minWidth: 120,
                    aspectRatio: "0.75/1",
                    borderRadius: "10px",
                    objectFit: "cover",
                    flex: "none",
                  }}
                />
              </Link>
            </Card>
          </List.Item>
        </List.Item>
      )}
    />
  );
};
