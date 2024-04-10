// 首页热门话题的标签栏
import React, { useState } from "react";
import { Col, Flex, Tag, Row, Button } from "antd";
import TagContext from "../context/tagcontext";
import { getAllArticles } from "../services/articleService";
import SearchContext from "../context/searchcontext";

const TagBar = () => {
  const [n, setN] = useState(15);
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
    if (expanded) setN(15);
  };

  const { handleSearch } = React.useContext(SearchContext);

  // 首页显示的标签数据
  var tagsData = ["All"];
  const all = getAllArticles();

  // 获取所有书籍的标签
  all.forEach((item) => {
    item.tags.forEach((tag) => {
      if (!tagsData.includes(tag)) {
        tagsData.push(tag);
      }
    });
  });
  tagsData = true ? tagsData : tagsData.slice(0, n);
  // 获取全局的标签状态和修改标签状态的方法
  const { selectedTags, handleChange } = React.useContext(TagContext);

  return (
    <Flex gap="10px 3px" wrap="wrap" align="center" className="mt-10">
      {/* <Col justify={"right"} style={{ margin: "30px" }}>
          <Button onClick={handleClick} hoverable>
            <Row align="middle">
              <h3>{expanded ? "收起" : "全部"}</h3>
            </Row>
          </Button>
        </Col> */}
      {tagsData.map((tag, index) => (
        <Tag.CheckableTag
          key={index}
          checked={selectedTags === tag}
          onChange={() => {
            handleChange(tag);
            handleSearch("");
          }}
          className="px-3 py-1 rounded border-zinc-500 text-center "
        >
          {tag}
        </Tag.CheckableTag>
      ))}
    </Flex>
  );
};
export default TagBar;
