import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecommendedArticles } from "../services/articleService";
import { ArticleList } from "./expert_articles";

// function ArticleCard({ article }) {
//   return (
//     <Link
//       to={`/article/${article.id}`}
//       className="flex flex-col mr-8 grow shrink-0 gap-0 text-base font-medium text-black rounded basis-0 w-fit"
//     >
//       <img
//         loading="lazy"
//         src={article.cover}
//         alt={article.title}
//         className="gap-0 w-[700px] aspect-[1.79] object-cover"
//       />
//       <div className="justify-center py-3 pr-3 pl-3 bg-white text-xl">
//         {article.title}
//       </div>
//     </Link>
//   );
// }

function ShowArticle() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getRecommendedArticles().then((data) => {
      setArticles(data);
    });
  }, []);
  return (
    <>
      <div className="gap-0 self-start mt-20 text-6xl tracking-tight leading-[64px] text-neutral-400 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        <h1 className="text-5xl leading-[52px] text-black">
          Read top articles from experts
        </h1>
        <p className="text-3xl leading-9 text-neutral-400 mt-4">
          Articles keep you informed about various areas of expertise and solve
          common problems.
        </p>
      </div>
      <ArticleList articles={articles} />
      <Link
        to={`/article`}
        className="self-center mr-20 mt-4 px-20 py-7 font-extrabold leading-5 text-center text-white hover:text-blue-900 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        style={{ background: "#2e90fa", fontSize: "25px" }}
      >
        See more articles
      </Link>
    </>
  );
}

export default ShowArticle;
