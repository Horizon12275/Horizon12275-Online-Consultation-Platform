import React, { useEffect } from "react";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import ExpertShowList from "../components/expert_showlist";
import SearchBar from "../components/searchbox";
import RadioSort from "../components/radio_sort";
import { Col, Flex } from "antd";
import { getAllExperts } from "../services/expertService";
import { SearchProvider } from "../context/searchcontext";

const ExpertChoosePage = () => {
  const [experts, setExperts] = React.useState([]);
  useEffect(() => {
    getAllExperts().then((res) => {
      setExperts(res);
    });
  }, []);
  return (
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
        <ExpertShowList experts={experts} />
      </BasicLayout>
    </TagProvider>
  );
};

export default ExpertChoosePage;