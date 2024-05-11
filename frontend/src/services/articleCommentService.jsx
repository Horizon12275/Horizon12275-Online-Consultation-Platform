import { BASEURL, get, post, postText } from "./requestService";
const PREFIX = `${BASEURL}/api/comment/article`;

export const getCommentsByArticleId = async (aid) => {
  const url = `${PREFIX}/list/${aid}`;
  let result;

  result = await get(url);
  return result;
};

export const addArticleComment = async ({ aid, content }) => {
  const url = `${PREFIX}/add/${aid}`;
  let result;

  result = await postText(url, content);
  return result;
};

export const deleteArticleComment = async (id) => {
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

export const addArticleReply = async ({ cid, content }) => {
  const url = `${PREFIX}/reply/${cid}`;
  let result;

  result = await postText(url, content);
  return result;
};
