import { BASEURL, get } from "./requestService";
const PREFIX = `${BASEURL}/api/article`;
import Data from "../json/articles.json";

export const searchArticles = async ({ keyword }) => {
  const url = `${PREFIX}/search?keyword=${keyword}&page=${1}&pageSize=${1}`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const getRecommendedArticles = async () => {
  const url = `${PREFIX}/recommend/1`;
  let result;

  result = await get(url);
  return result;
};

export async function getAllArticles() {
  const url = `${PREFIX}/list`;
  let result;

  result = await get(url);
  return result;
}



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
