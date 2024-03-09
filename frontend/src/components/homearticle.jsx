import React,{useState, useEffect} from 'react'
import { Avatar, List, Space, Button } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import TagContext from '../context/tagcontext';
import { getRecommendedArticles } from "../services/articleServices"; // 导入书籍相关的服务函数


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

export default function HomeArticle() {
    const { selectedTags } = React.useContext(TagContext);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const fetchRecommended = async () => {
            const recommended = await getRecommendedArticles();
            setRecommended(recommended);
        };
        fetchRecommended();
    }, []);

    const filteredData = selectedTags === 'All' ? recommended : recommended.filter(item => item.tag === selectedTags);

    return (
        <>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={filteredData}
                style={{ width: "100%" }}
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
                            title={item.title}
                            description={item.author}
                        />
                        {item.description}
                    </List.Item>
                )}
            />
            <Link href={`/`}>
                <Button type="primary" size="large" style={{ fontSize: '18px' }}>
                    探索更多
                </Button>
            </Link>
        </>
    )
}
