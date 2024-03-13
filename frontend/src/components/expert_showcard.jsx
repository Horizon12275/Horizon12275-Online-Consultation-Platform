import React from "react";
import { Card, Badge } from "antd";
import Link from "antd/es/typography/Link";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Typography, Tag, Row, Col, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { findExpertArticleTags } from "../services/articleService";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

export default function ExpertShowCard({ item }) {
  const allTags = findExpertArticleTags(item);
  const tags = allTags.map((tag) => (
    <Tag key={tag} color="blue">
      {tag}
    </Tag>
  ));
  return (
    <div>
      <Link href={`/expert/${item.id}`}>
        <ProCard
          split="horizontal"
          style={{ width: "100%", height: "350px" }}
          hoverable
        >
          <ProCard style={{ width: "100%", minHeight: "100px" }}>
            <Flex justify="center" align="center" style={{ width: "100%" }}>
              <img
                src={item.image}
                style={{
                  width: "35%",
                  aspectRatio: "1/1",
                  borderRadius: "2000px",
                  objectFit: "cover",
                }}
              />
              <Flex
                style={{
                  width: "60%",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 20px",
                }}
              >
                <Title level={4}>
                  价格：{item.price}/h
                  <br />
                  评分：{item.rating}
                  <br />
                  {tags}
                </Title>
              </Flex>
            </Flex>
          </ProCard>
          <ProCard style={{ width: "100%" }}>
            <Meta
              description={
                <Paragraph ellipsis={{ rows: 3 }}>{item.description}</Paragraph>
              }
            />

            <Paragraph>咨询次数：203</Paragraph>
          </ProCard>
        </ProCard>
      </Link>
    </div>
  );
}

//
//</Link >
