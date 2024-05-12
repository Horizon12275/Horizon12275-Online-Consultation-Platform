import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Flex, Row } from "antd";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import ExpertInfoCard from "../components/expert_infocard";
import Rating from "../components/ratings";
import CommentList from "../components/comment_list";
import { getExpertById } from "../services/expertService";
import { ArticleList } from "../components/expert_articles";
import { SearchProvider } from "../context/searchcontext";
// 导入专家相关的服务函数
import ExpertRecommend from "../components/expert-recommend";
import { getArticlesByExpertId } from "../services/articleService";
import { getCommentsByExpertId } from "../services/expertCommentService";

const ExpertProfilePage = () => {
  let { id } = useParams();

  const [expert, setExpert] = useState({});
  const [comments, setComments] = useState([]);
  const [articles, setArticles] = useState([]);
  // 一次性获取专家的所有信息
  useEffect(() => {
    Promise.all([
      getExpertById(id),
      getCommentsByExpertId(id),
      getArticlesByExpertId(id),
    ]).then(([expert, comments, articles]) => {
      setExpert(expert);
      setComments(comments);
      setArticles(articles);
    });
  }, []);

  return (
        <BasicLayout>
          <Row>
            <Col className=" flex-1 ">
              <Flex vertical gap="middle" className="mx-auto w-[1000px]">
                <ExpertInfoCard expert={expert} />
                <h1 className="text-xl font-extrabold leading-7 text-black max-w-[109px]">
                  All Articles
                </h1>
                <ArticleList articles={articles} />
                <ExpertRecommend />
              </Flex>
            </Col>
            <Col className="w-[350px]">
              <Rating />
              <h2 className="text-xl font-extrabold leading-7 text-black max-w-[107px] mt-3">
                Comments
              </h2>
              <CommentList comments={comments} />
            </Col>
          </Row>
        </BasicLayout>
  );
};

export default ExpertProfilePage;
