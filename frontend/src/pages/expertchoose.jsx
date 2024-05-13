import React, { useEffect, useState } from "react";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import TagBar from "../components/tagbar";
import ExpertShowList from "../components/expert_showlist";
import SearchBar from "../components/searchbox";
import RadioSort from "../components/radio_sort";
import { Col, Flex, Row } from "antd";
import { categoryExperts, searchExperts } from "../services/expertService";
import { useSearchParams } from "react-router-dom";

const ExpertChoosePage = () => {
  const [sortBy, setSortBy] = useState("price");
  const [experts, setExperts] = useState([]);
  const [length, setLength] = useState(0); // 用于分页
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 12; //默认为12 对应block布局
  const tag = searchParams.get("tag") || "";
  const handleSortChange = (value) => {
    setSortBy(value);
  };
  useEffect(() => {
    if (keyword) {
      searchExperts({
        keyword: keyword,
        page: page,
        pageSize: pageSize,
      }).then((res) => {
        setExperts(res.experts);
        setLength(res.total);
      });
    } else if (tag !== "") {
      categoryExperts({
        tag: tag,
        page: page,
        pageSize: pageSize,
      }).then((res) => {
        setExperts(res.experts);
        setLength(res.total);
      });
    } else
      searchExperts({
        keyword: "",
        page: page,
        pageSize: pageSize,
      }).then((res) => {
        setExperts(res.experts);
        setLength(res.total);
      });
  }, [keyword, page, pageSize, tag]);
  return (
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
          <ExpertShowList sortBy={sortBy} experts={experts} />
        </Flex>
      </BasicLayout>
  );
};

export default ExpertChoosePage;
