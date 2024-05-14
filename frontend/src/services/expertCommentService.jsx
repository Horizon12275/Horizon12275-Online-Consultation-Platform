import { BASEURL, get, post, postText } from "./requestService";
const PREFIX = `${BASEURL}/api/comment/expert`;

export const getCommentsByExpertId = async (eid) => {
  const url = `${PREFIX}/list/${eid}`;
  let result;

  result = await get(url);
  return result;
};

export const getRecommendedExpertComments = async () => {
  const url = `${PREFIX}/recommend/5`;
  let result;

  result = await get(url);
  return result;
};

export const addExpertComment = async ({ eid, content }) => {
  const url = `${PREFIX}/add/${eid}`;
  let result;

  result = await postText(url, content);
  return result;
};

export const deleteExpertComment = async (id) => {
  const url = `${PREFIX}/delete/${id}`;
  let result;
  try {
    result = await post(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const addExpertReply = async ({ cid, content }) => {
  const url = `${PREFIX}/reply/${cid}`;
  let result;

  result = await postText(url, content);
  return result;
};
