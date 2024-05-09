import React, { useState } from "react";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import SearchBar from "../components/searchbox";
import { Flex, Row } from "antd";
import { SearchProvider } from "../context/searchcontext";
import HomeArticle from "../components/homearticle";

const ArticleBrowsePage = () => {
  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <Flex vertical gap="middle" className="mx-auto w-[1300px]">
            <h1 className="text-5xl tracking-tight text-black self-start mt-8">
              Find Articles!
            </h1>
            <TagBar />
            <Row justify={"space-between"}>
              <SearchBar />
            </Row>
            <HomeArticle />
          </Flex>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
};

export default ArticleBrowsePage;
