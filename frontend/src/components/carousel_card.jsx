import React from "react";
import { Card, Typography } from "antd";


const { Title, Paragraph } = Typography;

const CarouselCard = ({ article }) => {
  const book = article;

  return (
    <Card style={{height:"50vh",minHeight: "300px",}}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ height: "30%", display: "flex" }}>
          <img
            src={book.cover}
            alt="image"
            style={{
              objectFit: "cover",
              maxHeight: "100px",
              aspectRatio: "1/1",
              borderRadius: "100px",
            }}
          />
          <div style={{ padding: "0 6px" }}>
            <Title level={5}>{book.title}</Title>
          </div>
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        <Paragraph ellipsis={{ rows: 5 }}>{book.content}</Paragraph>
      </div>
    </Card>
  );
};

export default CarouselCard;
