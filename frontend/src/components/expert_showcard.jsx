import React from 'react';
import { Card, Badge } from 'antd';
import Link from 'antd/es/typography/Link';
import { ProCard } from '@ant-design/pro-components';
import { Avatar, Typography, Tag, Row, Col, Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;


export default function ExpertShowCard() {
    return (
        <ProCard split="horizontal" style={{ aspectRatio:3/2}}>
            <ProCard >
                <Flex gap="middle" justify='space-around' align='center'>
                    <Avatar
                        size={{ xs: 124, sm: 132, md: 140, lg: 164, xl: 180, xxl: 200 }}
                        icon={<UserOutlined />}
                    />
                    <Col style={{ width: '40%',fontSize:'30px'}}>
                        <p>价格：30/h</p>
                        <p>标签：法律</p>
                        <p>评分：4.5</p>
                    </Col>
                </Flex>
            </ProCard>
            <ProCard style={{ fontSize: '30px' }}>
                <p>简介：G市著名律师</p>
                <p>被咨询次数</p>
            </ProCard>
        </ProCard>
    )
}

//<Link href={`/detail/${expert.id}`}>
//</Link >