import React from 'react';
import { Col, Flex, Tag } from 'antd';

const tagsData = ['All', 'Variety shows', 'Music', 'Chinese television dramas'];

const HomeContent = () => {
    const [selectedTags, setSelectedTags] = React.useState(['Movies']);
    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <Col justify="left">
            <h1>热门话题</h1>
            <Flex gap="4px 0" wrap="wrap" align="center">
                {tagsData.map((tag) => (
                    <Tag.CheckableTag
                        key={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={(checked) => handleChange(tag, checked)}
                    >
                        {tag}
                    </Tag.CheckableTag>
                ))}
            </Flex>
        </Col>
    );
};
export default HomeContent;