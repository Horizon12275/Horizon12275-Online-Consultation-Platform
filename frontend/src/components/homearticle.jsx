import React from 'react'
import { Avatar, List, Space, Button } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import TagContext from '../context/tagcontext';

const data = [
    {
        tag: 'Variety shows',
        href: '/',
        title: `Variety shows`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=1`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        tag: 'Music',
        href: '/',
        title: `Music`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=1`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
    {
        tag: 'Chinese television dramas',
        href: '/',
        title: `Chinese television dramas`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=1`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    },
]

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default function HomeArticle() {
    const { selectedTags } = React.useContext(TagContext);

    const filteredData = selectedTags === 'All' ? data : data.filter(item => item.tag === selectedTags);

    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={filteredData}
                style={{ width: "60%" }}
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
            <Link href={`/list`}>
                <Button type="primary" size="large" style={{ fontSize: '18px' }}>
                    探索更多
                </Button>
            </Link>
        </>
    )
}
