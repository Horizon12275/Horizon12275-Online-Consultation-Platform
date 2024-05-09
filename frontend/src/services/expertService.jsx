import { BASEURL, get } from "./requestService";
const PREFIX = `${BASEURL}/api/expert`;

export const searchExperts = async ({ keyword }) => {
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

export const getAllExperts = async () => {
  const url = `${PREFIX}/list`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const getRecommendedExperts = async () => {
  const url = `${PREFIX}/recommend/3`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

// 通过id模拟从本地 JSON 文件获取专家数据
export const getExpertById = async (id) => {
  const url = `${PREFIX}/get/${id}`;
  let result;

  result = await get(url);
  return result;
};

export const getCommentsByExpertId = async (id) => {
  const comments = getExpertById(id).comments;
  return comments;
};
