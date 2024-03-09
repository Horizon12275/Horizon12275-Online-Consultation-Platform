import React, { useState, useEffect } from "react";
import { Carousel, Card, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { getRecommendedArticles } from "../services/articleServices"; // 导入书籍相关的服务函数
import CarouselCard from "./carousel_card";

const { Paragraph } = Typography;

const MyCarousel = () => {
  const [recommended, setRecommended] = useState([]);
  const carouselRef = React.createRef();

  useEffect(() => {
    const fetchRecommended = async () => {
      const recommended = await getRecommendedArticles();
      setRecommended(recommended);
    };
    fetchRecommended();
  }, []);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <div
      style={{
        width:"300px",
        height: "100vh",
        marginBottom: "0px",
        padding: "0px",
        position: "relative",
      }}
    >
      <Carousel
        id="carousel"
        effect="fade"
        ref={carouselRef}
        autoplay
        dotPosition="right"
        style={{ height: "100vh" }}
      >
        {recommended.map((book, index) =>
          index % 2 === 0 ? (
            <div key={book.id} style={{display:"flex",height:"100vh",}}>
              <CarouselCard article={book} />
              <CarouselCard article={recommended[index + 1]} />
            </div>
          ) : null
        )}
      </Carousel>
      <div style={{ position: "absolute", bottom: "2%", right: "2%" }}>
        <Button
          onClick={handlePrev}
          style={{
            left: "-5px",
            width: "5vw",
            maxWidth: "30px",
            opacity: "0.5",
          }}
          icon={<LeftOutlined />}
        />
        <Button
          onClick={handleNext}
          style={{
            right: "0px",
            width: "5vw",
            maxWidth: "30px",
            opacity: "0.5",
          }}
          icon={<RightOutlined />}
        />
      </div>
    </div>
  );
};

export default MyCarousel;
