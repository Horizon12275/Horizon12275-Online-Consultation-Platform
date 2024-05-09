import { BASEURL, get } from "./requestService";
const PREFIX = `${BASEURL}/api/article`;
import Data from "../json/articles.json";

export const search = async (keyword, pageIndex, pageSize) => {
  // 模拟从本地 JSON 文件获取书籍数据
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  const filteredBooks = Data.articles.filter((article) =>
    article.title.toLowerCase().includes(keyword.toLowerCase())
  );
  const pagedBooks = filteredBooks.slice(start, end);
  return { items: pagedBooks, total: filteredBooks.length };
};

export const getRecommendedArticles = async () => {
  const url = `${PREFIX}/recommend/1`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export async function getAllArticles() {
  const url = `${PREFIX}/list`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    
  }
}

export const findExpertArticleTags = (expert) => {
  // 筛选出属于该专家的所有文章的标签

  // 筛选出属于该专家的所有文章
  const expertArticles = Data.articles.filter((article) =>
    expert.articles.includes(article.id)
  );

  // 提取所有标签并去重
  const allTagsSet = new Set();
  expertArticles.forEach((article) => {
    article.tags.forEach((tag) => {
      allTagsSet.add(tag);
    });
  });

  // 将 Set 转换为数组
  const allTags = Array.from(allTagsSet);

  return allTags.slice(0, 3);
};

export const findExpertArticlesById = async (expertId) => {
  // 筛选出属于该专家的所有文章
  const expertArticles = Data.articles.filter(
    (article) => article.author_id === parseInt(expertId)
  );

  return expertArticles;
};

export const getArticleById = async (id) => {
  // 模拟从本地 JSON 文件获取书籍数据
  const url = `${PREFIX}/get/${id}`;
  let result;

  result = await get(url);
  return result;
};
