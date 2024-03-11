import React from "react";
import { Card, Badge } from "antd";
import Link from "antd/es/typography/Link";
import { ProCard } from "@ant-design/pro-components";
import { Avatar, Typography, Tag, Row, Col, Flex } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

export default function ExpertShowCard(data) {
  const tags = data.data.tags.map((tag) => (
    <Tag color="blue" key={tag}>
      {tag}
    </Tag>
  ));
  return (
    <div>
      <Link href={`/expert/${data.data.id}`}>
      <ProCard split="horizontal" style={{ width: "100%" }} hoverable>
        <ProCard style={{ width: "100%", minHeight: "100px" }}>
          <Flex justify="center" align="center" style={{ width: "100%" }}>
            <img
              src={data.data.image}
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
              }}
            >
              <Title level={4}>
                价格：{data.data.price}/h
                <br />
                评分：{data.data.rating}
                <br />
                {tags}
              </Title>
            </Flex>
          </Flex>
        </ProCard>
        <ProCard style={{ width: "100%" }}>
          <Meta
            description={
              <Paragraph ellipsis={{ rows: 3 }}>
                {data.data.description}
              </Paragraph>
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
