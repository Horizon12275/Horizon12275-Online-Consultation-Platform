import { BASEURL, get, postFormData } from "./requestService";
const PREFIX = `${BASEURL}/api/article`;

export const searchArticles = async ({ keyword, page, pageSize }) => {
  const url = `${PREFIX}/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const categoryArticles = async ({ tag, page, pageSize }) => {
  const url = `${PREFIX}/category?tag=${tag}&page=${page}&pageSize=${pageSize}`;
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
  const url = `${PREFIX}/recommend/3`;
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

export const getArticleById = async (id) => {
  // 模拟从本地 JSON 文件获取书籍数据
  const url = `${PREFIX}/get/${id}`;
  let result;

  result = await get(url);
  return result;
};

// 通过id获取专家的所有文章
export const getArticlesByExpertId = async (id) => {
  const url = `${PREFIX}/list/${id}`;
  let result;

  result = await get(url);
  return result;
};

export const addArticle = async ({
  content,
  title,
  cover,
  tids,
  descritions,
}) => {
  let formData = new FormData();
  formData.append("content", content);
  formData.append("file", cover);
  formData.append("title", title);
  formData.append("tids", tids);
  formData.append("descritions", descritions);
  const url = `${PREFIX}/add`;
  let result;

  result = await postFormData(url, formData);
  return result;
};
