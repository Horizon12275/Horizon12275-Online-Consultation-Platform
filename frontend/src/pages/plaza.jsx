import React, { useEffect, useState } from "react";
import { PrivateLayout, PublicLayout } from "../layouts";
import { Col, Row } from "antd";
import FeedEditor from "../components/feed_editor";
import FeedDisplay from "../components/feed_display";
import PopularArticle from "../components/popular_articles";
import { getAllTweets } from "../services/tweetService";

const PlazaPage = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getAllTweets().then((res) => {
      res.sort((a, b) => new Date(b.time) - new Date(a.time));
      setTweets(res);
    });
  }, []);
  return (
    <PublicLayout>
      <Row justify={"space-around"} className="w-[1400px] m-auto">
        <Col>
          <FeedEditor setTweets={setTweets} />
          {tweets.map((tweet, index) => (
            <FeedDisplay key={index} tweet={tweet} />
          ))}
        </Col>
        <Col>
          <PopularArticle />
        </Col>
      </Row>
    </PublicLayout>
  );
};

export default PlazaPage;
