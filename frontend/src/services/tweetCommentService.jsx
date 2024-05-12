import { BASEURL, get, post, postText } from "./requestService";
const PREFIX = `${BASEURL}/api/comment/tweet`;

export const getCommentsByTweetId = async (tid) => {
  const url = `${PREFIX}/list/${tid}`;
  let result;

  result = await get(url);
  return result;
};

export const addTweetComment = async ({ tid, content }) => {
  const url = `${PREFIX}/add/${aid}`;
  let result;

  result = await postText(url, content);
  return result;
};

export const deleteTweetComment = async (id) => {
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

export const addTweetReply = async ({ cid, content }) => {
  const url = `${PREFIX}/reply/${cid}`;
  let result;

  result = await postText(url, content);
  return result;
};
