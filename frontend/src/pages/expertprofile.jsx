import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "antd";
import { BasicLayout } from "../layouts";
import { TagProvider } from "../context/tagcontext";
import ExpertInfoCard from "../components/expert_infocard";
import Rating from "../components/ratings";
import CommentList from "../components/comment_list";
import Data from "../books.json";

const { Header, Footer, Sider, Content } = Layout;

const ExpertProfilePage = () => {
  let { id } = useParams();

  const comments = Data.comments.filter(
    (comment) => comment.bookId === parseInt(id, 10)
  );

  return (
    <TagProvider>
      <BasicLayout>
        <Layout>
          <Layout>
            <Content style={{ minHeight: "100vh" }}>
              <ExpertInfoCard />
            </Content>
          </Layout>
          <Sider width={"30%"} style={{ background: "#fff"}}>
            <Rating />
            <CommentList comments={comments} />
          </Sider>
        </Layout>
      </BasicLayout>
    </TagProvider>
  );
};
export default ExpertProfilePage;
