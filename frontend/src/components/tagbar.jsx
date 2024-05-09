// 首页热门话题的标签栏
import React, { useState } from "react";
import { Col, Flex, Tag, Row, Button } from "antd";
import TagContext from "../context/tagcontext";
import { getAllArticles } from "../services/articleService";
import SearchContext from "../context/searchcontext";
import Data from "../json/articles.json";

const TagBar = () => {
  const [n, setN] = useState(15);
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
    if (expanded) setN(15);
  };

  return (
    <div className="flex flex-wrap gap-3 mt-10" />
    // <Flex gap="10px 3px" wrap="wrap" align="center" className="mt-10">
    //   {/* <Col justify={"right"} style={{ margin: "30px" }}>
    //       <Button onClick={handleClick} hoverable>
    //         <Row align="middle">
    //           <h3>{expanded ? "收起" : "全部"}</h3>
    //         </Row>
    //       </Button>
    //     </Col> */}
    //   {tagsData.map((tag, index) => (
    //     <Tag.CheckableTag
    //       key={index}
    //       checked={selectedTags === tag}
    //       onChange={() => {
    //         handleChange(tag);
    //         handleSearch("");
    //       }}
    //       className="px-3 py-1 rounded border-zinc-500 text-center "
    //     >
    //       {tag}
    //     </Tag.CheckableTag>
    //   ))}
    // </Flex>
  );
};
export default TagBar;
