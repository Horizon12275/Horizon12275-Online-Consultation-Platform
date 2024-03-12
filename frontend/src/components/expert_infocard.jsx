//专家个人主页的信息卡片

import { Row, Col, Avatar, Typography, Tag, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getExpertById } from '../services/expertService'; // 导入专家相关的服务函数
import { useEffect, useState } from 'react';

const { Title, Paragraph, Text, Link } = Typography;

const ExpertInfoCard = ({ expert }) => {

    // 渲染专家信息卡片
    return (
        <Row justify="center" align="middle" style={{ width: '100%', margin: '20px' }}>
            <Avatar
                size={200}
                src={"/" + expert.image}
                style={{ marginRight: "40px" }}
            />
            <Col style={{ width: '50%' }}>
                <Title>{expert.name}</Title>
                <Paragraph>{"Detail: " + expert.description}</Paragraph>
                <Row>
                    <span style={{ marginRight: "20px" }}>Categories:</span>
                    {expert.categories?.map((category) => (
                        <Tag key={category}>{category}</Tag>
                    ))}
                </Row>
            </Col>
            <Link href={`/consultation/${expert.id}`}>
                <Button
                    style={{
                        minHeight: "100px",
                        aspectRatio: "3/2",
                        fontSize: "20px",
                    }}
                >
                    立即咨询：30/h起
                </Button>
            </Link>
        </Row>
    );
};

export default ExpertInfoCard;
