import React from "react";
import { SearchProvider } from "../context/searchcontext";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import { Col, Divider, Row } from "antd";
import TagBar from "../components/tagbar";
import CommentBox from "../components/comment_box";

const PlazaPage = () => {
  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <Row justify={"space-evenly"} align={"middle"}>
            <Col style={{ width: "50%" }}>
              <TagBar />
              动态内容
            </Col>
            <Divider type="vertical" />
            <Col>
              <CommentBox />
              热门词条
            </Col>
          </Row>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
};

export default PlazaPage;
