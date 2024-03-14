import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import ExpertInfoCard from "../components/expert_infocard";
import Rating from "../components/ratings";
import CommentList from "../components/comment_list";
import { getExpertById } from "../services/expertService";
import { getComments } from "../services/commentService";
import { ArticleList } from "../components/expert_";
import { findExpertArticlesById } from "../services/articleService";
import { SearchProvider } from "../context/searchcontext";
// 导入专家相关的服务函数

const { Sider, Content } = Layout;

const ExpertProfilePage = () => {
  let { id } = useParams();

  const [expert, setExpert] = useState({});
  const [comments, setComments] = useState([]);
  const [articles, setArticles] = useState([]);
  // 一次性获取专家的所有信息
  useEffect(() => {
    Promise.all([
      getExpertById(id),
      getComments(id),
      findExpertArticlesById(id),
    ]).then(([expert, comments, articles]) => {
      setExpert(expert);
      setComments(comments);
      setArticles(articles);
    });
  }, [id]);

  return (
    <SearchProvider>
      <TagProvider>
        <BasicLayout>
          <Layout>
            <Layout>
              <Content style={{ minHeight: "100vh" }}>
                <ExpertInfoCard expert={expert} />
                <ArticleList articles={articles} />
              </Content>
            </Layout>
            <Sider width={"25%"} style={{ background: "#f5f5f5" }}>
              <Rating />
              <CommentList comments={comments} />
            </Sider>
          </Layout>
        </BasicLayout>
      </TagProvider>
    </SearchProvider>
  );
};

export default ExpertProfilePage;
