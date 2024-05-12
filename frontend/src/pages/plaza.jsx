import React, { useEffect, useState } from "react";
import { SearchProvider } from "../context/searchcontext";
import { TagProvider } from "../context/tagcontext";
import { BasicLayout } from "../layouts";
import { Col, Row } from "antd";
import FeedEditor from "../components/feed_editor";
import FeedDisplay from "../components/feed_display";
import PopularArticle from "../components/popular_articles";
import { getAllTweets } from "../services/tweetService";

const PlazaPage = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getAllTweets().then((res) => {
      setTweets(res);
    });
  }, []);
  return (
        <BasicLayout>
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
        </BasicLayout>
  );
};

export default PlazaPage;
