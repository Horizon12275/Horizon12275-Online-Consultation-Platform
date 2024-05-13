import { Divider, Flex } from "antd";
import { PrivateLayout, PublicLayout } from "../layouts";
import ArticleHeader from "../components/article_header";
import { getArticleById } from "../services/articleService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecommendedArticles from "../components/whattoreadnext";
import "github-markdown-css/github-markdown.css";
import ArticleDisplay from "../components/article_display";
import { getCommentsByArticleId } from "../services/articleCommentService";
import CommentList from "../components/comment_list";
import CommentBox from "../components/comment_box";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getArticleById(id).then((article) => {
      setArticle(article);
    });
    getCommentsByArticleId(id).then((comments) => {
      setComments(comments);
    });
  }, [id]);
  return (
    <PublicLayout>
      <Flex vertical align="center">
        <ArticleHeader article={article} />
        <ArticleDisplay article={article} />
        <Divider />
        <CommentList comments={comments} />
        <CommentBox id={id} type={"article"} setComments={setComments} />
        <RecommendedArticles />
      </Flex>
    </PublicLayout>
  );
};

export default ArticlePage;
