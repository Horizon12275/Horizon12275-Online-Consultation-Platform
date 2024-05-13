import * as React from "react";
import { Link } from "react-router-dom";

function PopularArticleItem({ article }) {
  return (
    <>
      <div className="flex gap-4 px-4 py-2.5">
        <div className="flex flex-col">
          <div className="flex gap-1 text-slate-500">
            <div>{article.author}</div>
          </div>
          <div className="mt-1.5 text-base tracking-wide text-neutral-900">
            {article.title}
          </div>
          <div className="flex gap-1 mt-1.5 tracking-tight">
            <div className="text-slate-500">Specialty Tag:</div>
            <div className="text-sky-500">#{article.tag}</div>
          </div>
        </div>
        <img
          loading="lazy"
          src={article.image}
          className="shrink-0 self-start aspect-[1.03] w-[71px]"
        />
      </div>
      <div className="w-full bg-gray-200 min-h-[1px]" />
    </>
  );
}

export default function PopularArticle() {
  const articles = [
    {
      author: "Author Name Here",
      title:
        "Article Title Here Article Title Here Article Title Here Article Title Here",
      tag: "Article Tag Here",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/143bef67fd684f99175b67a927ffe3e49ad3717a7703030558386b6fe6964644?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      author: "Author Name Here",
      title:
        "Article Title Here Article Title Here Article Title Here Article Title Here",
      tag: "Article Tag Here",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/36ef6b6ea0f3c8a4eef158d9fd44de5e18b46a99540e2fe4c9e2b8033e312d98?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
    {
      author: "Author Name Here",
      title:
        "Article Title Here Article Title Here Article Title Here Article Title Here",
      tag: "Article Tag Here",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/54871b81705cb4675f3dcb0034bf4af55683ab4dab0c954647776cc746e0ca79?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
    },
  ];

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
