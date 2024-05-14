import { Flex } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export function ArticleCard({ article }) {
  return (
    <Link
      to={`/article/${article.id}`}
      className="flex flex-col justify-between grow self-stretch p-3 w-full bg-white h-[240px] shadow-lg"
    >
      <div className="flex flex-col items-start pr-20 max-md:pr-5 max-md:max-w-full">
        <div className="justify-center py-0.5 text-xs text-stone-300">
          {new Date(article.time).toLocaleDateString()}
        </div>
        <h2 className="justify-center mt-2 text-2xl font-extrabold leading-8 text-black max-md:max-w-full">
          {article.title}
        </h2>
      </div>
      <div className="flex flex-col justify-center mt-3 text-base font-medium text-stone-500 max-md:max-w-full">
        <p className="pb-7 max-md:max-w-full min-h-[120px]">
          {article.description}
        </p>
      </div>
      <div className="flex gap-2.5 justify-between mt-3 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col justify-center">
          <div className="flex gap-1">
            <div className="flex justify-center items-center ">
              <img
                src={article.author.avatar}
                alt={"Author profile picture"}
                className="w-5 aspect-square object-cover fill-black rounded-full"
              />
            </div>
            <div className="text-xs text-stone-500">{article.author.name}</div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="flex gap-1">
            <div className="text-xs text-stone-300">
              {article.articleComments?.length}
            </div>
            <div className="flex justify-center items-center self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d25c133c0c74b93b2b6995b77d44a792af9ff40a549d6487476e845af507fdbe?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                alt="Like icon"
                className="w-3 aspect-square"
              />
            </div>
          </div>
          {/* <div className="flex gap-1">
            <div className="text-xs text-stone-300">{11}</div>
            <div className="flex justify-center items-center self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7348c3c78521eb92cc8694c94f5a4e0541727f53e29d5d7189703cfcce73b92?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
                alt="Comment icon"
                className="w-3 aspect-square"
              />
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export const ArticleList = ({ articles }) => {
  return (
    <Flex justify={"space-between"}>
      <div className="rounded w-[100%]">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex max-md:flex-col max-md:gap-0 mt-4 h-[240px]"
          >
            <div className="flex flex-col flex-1 ">
              <ArticleCard article={article} />
            </div>
            <img
              loading="lazy"
              src={article.cover}
              alt={article.title}
              className="w-60  flex flex-col object-cover shadow-lg"
            />
          </div>
        ))}
      </div>
    </Flex>
  );
};
