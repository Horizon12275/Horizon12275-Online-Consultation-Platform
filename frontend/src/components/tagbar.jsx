// 首页热门话题的标签栏
import React from 'react';
import { Col, Flex, Tag } from 'antd';
import TagContext from '../context/tagcontext';
import { getAllArticles } from '../services/articleService';

const TagBar = () => {
  // 首页显示的标签数据
  const tagsData = ['All'];
  const all = getAllArticles();
  
  // 获取所有书籍的标签
  all.forEach((item) => {
    item.tags.forEach((tag) => {
      if (!tagsData.includes(tag)) {
        tagsData.push(tag);
      }
    });
  });

  // 获取全局的标签状态和修改标签状态的方法
  const { selectedTags, handleChange } = React.useContext(TagContext);

  return (
    <Col justify="left" style={{marginLeft:'30px',marginTop : '30px'}}>
      <Flex gap="4px 0" wrap="wrap" align="center">
        {tagsData.map((tag) => (
          <Tag.CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={() => handleChange(tag)}
            style={{ fontSize: '20px', margin: '5px', padding: '15px', borderRadius: '10px'}}
          >
            {tag}
          </Tag.CheckableTag>
        ))}
      </Flex>
    </Col>
  );
};
export default TagBar;
