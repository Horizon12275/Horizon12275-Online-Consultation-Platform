import React, { useState } from "react";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import ExpertShowList from "../components/expert_showlist";
import SearchBar from "../components/searchbox";
import RadioSort from "../components/radio_sort";
import { Col, Flex, Row } from "antd";
import { SearchProvider } from "../context/searchcontext";

const ExpertChoosePage = () => {
  const [sortBy, setSortBy] = useState("price");

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <TagProvider>
      <BasicLayout>
        <Flex vertical gap="middle" className="mx-auto w-[1300px]">
          <h1 className="text-5xl tracking-tight text-black self-start mt-8">
            Find Your Expert!
          </h1>
          <TagBar />
          <Row justify={"space-between"}>
            <Col></Col>
            <Col className="w-1/2"> 
              <SearchBar />
            </Col>
            <Col> 
              <RadioSort onSortChange={handleSortChange} />
            </Col>
          </Row>
          <ExpertShowList sortBy={sortBy} />
        </Flex>
      </BasicLayout>
    </TagProvider>
  );
};

export default ExpertChoosePage;
