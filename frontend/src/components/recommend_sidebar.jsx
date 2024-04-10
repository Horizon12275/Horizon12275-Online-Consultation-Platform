import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { getRecommendedArticles } from "../services/articleService"; // 导入书籍相关的服务函数
import CarouselCard from "./carousel_card";
import { getAllExperts } from "../services/expertService";

const RecommendSidebar = () => {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    getAllExperts().then((res) => {
      setRecommended(res.slice(0, 6));
    });
  }, []);

  return (
    <div
      style={{
        width: "300px",
        height: "80vh",
        minHeight: "600px",
        marginBottom: "0px",
        marginTop: "40px",
        padding: "0px",
        position: "relative",
      }}
    >
      {recommended.map((expert, index) => (
        <CarouselCard key={index} expert={expert} />
      ))}
    </div>
  );
};

export default RecommendSidebar;
