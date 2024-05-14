import * as React from "react";
import { Link } from "react-router-dom";
import { getRecommendedArticles } from "../services/articleService";

function PopularArticleItem({ article }) {
  return (
    <Link to={`/article/${article.id}`}>
      <div className="flex gap-4 px-4 py-2.5">
        <div className="flex flex-col">
          <div className="flex gap-1 text-slate-500">
            <div>{article.author?.name}</div>
          </div>
          <div className="mt-1.5 text-base tracking-wide text-neutral-900">
            {article.title}
          </div>
          <div className="flex gap-1 mt-1.5 tracking-tight">
            <div className="text-slate-500">Specialty Tag:</div>
            <div className="text-sky-500">
              #{article.tags?.map((tag) => tag.content).join(" #")}
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src={article.cover}
          className="shrink-0 self-start aspect-[1.03] w-[71px]"
        />
      </div>
      <div className="w-full bg-gray-200 min-h-[1px]" />
    </Link>
  );
}

export default function PopularArticle() {
  const [articles, setArticles] = React.useState([]);
  React.useEffect(() => {
    getRecommendedArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center text-sm font-bold max-w-[350px] m-auto">
      <section className="flex flex-col w-full rounded-2xl bg-slate-50">
        <header className="flex flex-col pt-4 w-full text-xl tracking-wide text-neutral-900">
          <h2 className="self-start ml-4">POPULAR ARTICLES</h2>
          <div className="mt-3.5 w-full bg-gray-200 min-h-[1px]" />
        </header>
        {articles.map((article, index) => (
          <PopularArticleItem key={index} article={article} />
        ))}
        <footer className="justify-center items-start p-4 w-full text-base text-sky-500">
          <Link to="/article" style={{ color: "#0ea5e9" }}>
            Click Here To Show More Articles!
          </Link>
        </footer>
      </section>
    </div>
  );
}
