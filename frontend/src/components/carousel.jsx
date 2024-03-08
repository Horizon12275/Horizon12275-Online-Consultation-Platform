//首页的走马灯 展示推荐文章
import React, { useState, useEffect } from "react";
import { Carousel, Card, Button, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { getRecommendedBooks } from "../services/bookService"; // 导入书籍相关的服务函数

const { Paragraph } = Typography;

const Carousel = () => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const carouselRef = React.createRef();

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      const recommended = await getRecommendedBooks();
      setRecommendedBooks(recommended);
    };
    fetchRecommendedBooks();
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
        width: "40vw",
        minWidth: "400px",
        aspectRatio: "4/3",
        marginBottom: "20px",
        padding: "0px",
        position: "relative",
      }}
    >
      <Carousel
        id="carousel"
        effect="fade"
        ref={carouselRef}
        autoplay
        style={{
          width: "100%",
          aspectRatio: "4/3",
          display: "grid",
          alignItems: "center",
        }}
      >
        {recommendedBooks.map((book) => (
          <div key={book.id}>
            <a href={`/details/${book.id}`}>
              <Card
                hoverable
                bodyStyle={{
                  width: "100%",
                  aspectRatio: "4/3",
                  padding: "0px",
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                }}
                style={{
                  width: "98%",
                  aspectRatio: "4/3",
                  margin: "0 auto",
                  backgroundColor: "grey",
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    objectFit: "cover",
                    margin: "0 auto",
                    borderRadius: "7px",
                  }}
                />
              </Card>
            </a>
          </div>
        ))}
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

export default Carousel;
