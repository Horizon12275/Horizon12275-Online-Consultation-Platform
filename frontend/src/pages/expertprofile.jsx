import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Flex, Row } from "antd";
import { PrivateLayout, PublicLayout } from "../layouts";
import ExpertInfoCard from "../components/expert_infocard";
import { getExpertById } from "../services/expertService";
import { ArticleList } from "../components/expert_articles";
// 导入专家相关的服务函数
import ExpertRecommend from "../components/expert-recommend";
import { getArticlesByExpertId } from "../services/articleService";
import { getCommentsByExpertId } from "../services/expertCommentService";
import CommentListForExpertProfilePage from "../components/comment_listForExpertProfilePage";

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
  }, [id]);

  return (
    <PublicLayout>
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
          {/* <Rating /> */}
          <CommentListForExpertProfilePage comments={comments} />
        </Col>
      </Row>
    </PublicLayout>
  );
};

export default ExpertProfilePage;
