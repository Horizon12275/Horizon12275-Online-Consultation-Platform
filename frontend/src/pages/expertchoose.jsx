import React, { useEffect,useState} from "react";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import ExpertShowList from "../components/expert_showlist";
import SearchBar from "../components/searchbox";
import RadioSort from "../components/radio_sort";
import { Col, Flex } from "antd";
import { SearchProvider } from "../context/searchcontext";

const ExpertChoosePage = () => {
  const [sortBy, setSortBy] = useState("price");

  const handleSortChange = (value) => {
    setSortBy(value);
  };
  
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
              <RadioSort onSortChange={handleSortChange} />
            </Col>
          </Flex>
          <ExpertShowList sortBy={sortBy} />
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
};

export default ExpertChoosePage;
