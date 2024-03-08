// 首页热门话题的标签栏
import React from 'react';
import { Col, Flex, Tag } from 'antd';
import TagContext from '../context/tagcontext';

const tagsData = ['All', 'Variety shows', 'Music', 'Chinese television dramas'];

const TagBar = () => {
  const { selectedTags, handleChange } = React.useContext(TagContext);

  return (
    <Col justify="left">
      <h1>热门话题</h1>
      <Flex gap="4px 0" wrap="wrap" align="center">
        {tagsData.map((tag) => (
          <Tag.CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={() => handleChange(tag)}
          >
            {tag}
          </Tag.CheckableTag>
        ))}
      </Flex>
    </Col>
  );
};
export default TagBar;
