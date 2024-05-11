import { BASEURL, get, post, postText } from "./requestService";
const PREFIX = `${BASEURL}/api/like/tweet`;

export const likeTweet = async (tid) => {
  const url = `${PREFIX}/${tid}`;
  let result;

  result = await post(url);
  return result;
};

export const getTids = async () => {
  const url = `${PREFIX}/list`;
  let result;

  result = await get(url);
  return result;
};
