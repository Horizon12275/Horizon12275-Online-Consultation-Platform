import React, { useState } from "react";
import { BasicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import SearchBar from "../components/searchbox";
import { Col, Flex, Row } from "antd";
import HomeArticle from "../components/homearticle";
import { useSearchParams } from "react-router-dom";
import { categoryArticles, searchArticles } from "../services/articleService";
import { useEffect } from "react";

const ArticleBrowsePage = () => {
  const [articles, setArticles] = useState([]);
  const [length, setLength] = useState(0); // 用于分页
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 12; //默认为12 对应block布局
  const tag = searchParams.get("tag") || "";
  useEffect(() => {
    if (keyword)
      searchArticles({
        keyword: keyword,
        page: page,
        pageSize: pageSize,
      }).then((res) => {
        setArticles(res.articles);
        setLength(res.total);
      });
    else if (tag)
      categoryArticles({
        keyword: "",
        page: page,
        pageSize: pageSize,
        tag: tag,
      }).then((res) => {
        setArticles(res.articles);
        setLength(res.total);
      });
    else
      searchArticles({
        keyword: "",
        page: page,
        pageSize: pageSize,
      }).then((res) => {
        setArticles(res.articles);
        setLength(res.total);
      });
  }, [keyword, page, pageSize, tag]);
  return (
    <BasicLayout>
      <Flex vertical gap="middle" className="mx-auto w-[1300px]">
        <h1 className="text-5xl tracking-tight text-black self-start mt-8">
          Find Articles!
        </h1>
        <TagBar />
        <Row justify={"space-between"}>
          <Col></Col>
          <Col className="w-1/2"> 
            <SearchBar />
          </Col>
          <Col></Col>
        </Row>
        <HomeArticle articles={articles} />
      </Flex>
    </BasicLayout>
  );
};

export default ArticleBrowsePage;
