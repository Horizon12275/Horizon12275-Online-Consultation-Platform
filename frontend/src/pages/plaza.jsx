import React from "react";
import { SearchProvider } from "../context/searchcontext";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import { Col, Row } from "antd";
import FeedEditor from "../components/feed_editor";
import FeedDisplay from "../components/feed_display";
import PopularArticle from "../components/popular_articles";

const PlazaPage = () => {
  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <Row justify={"space-around"} className="w-[1400px] m-auto">
            <Col>
              <FeedEditor />
              <FeedDisplay />
              <FeedDisplay />
              <FeedDisplay />
              <FeedDisplay />
            </Col>
            <Col>
              <PopularArticle />
            </Col>
          </Row>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
};

export default PlazaPage;
