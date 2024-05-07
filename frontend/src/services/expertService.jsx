import { BASEURL, get } from "./requestService";
const PREFIX = `${BASEURL}/api/expert`;
import Data from "../json/experts.json";

// 模拟从本地 JSON 文件获取专家数据
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
