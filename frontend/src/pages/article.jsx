import { Divider, Flex } from "antd";
import { BasicLayout } from "../layouts";
import ArticleHeader from "../components/article_header";
import { getArticleById } from "../services/articleService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecommendedArticles from "../components/whattoreadnext";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleById(id).then((article) => {
      setArticle(article);
    });
  }, [id]);
  return (
    <BasicLayout>
      <Flex vertical align="center">
        <ArticleHeader article={article} />
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div key={index}>{article.content}</div>
          ))}
        <Divider />
        <RecommendedArticles />
      </Flex>
    </BasicLayout>
  );
};

export default ArticlePage;