import React from "react";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import ExpertShowCard from "../components/expert_showcard";
import ExpertShowList from "../components/expert_showlist";
import SearchBar from "../components/searchbox";
import RadioSort from "../components/radio_sort";
import { Col, Flex } from "antd";
import { SearchProvider } from "../context/searchcontext";

export default function ExpertChoosePage() {
  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <TagBar />
          <Flex
            gap="middle"
            justify="space-evenly"
            align="center"
            style={{ margin: "20px" }}
          >
            <Col style={{ width: "60%" }}>
              <SearchBar />
            </Col>
            <Col>
              <RadioSort />
            </Col>
          </Flex>
          <ExpertShowList />
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
}
