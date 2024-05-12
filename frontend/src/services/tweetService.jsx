import { BASEURL, get, post, postFormData, postText } from "./requestService";
const PREFIX = `${BASEURL}/api/tweet`;

export async function getAllTweets() {
  const url = `${PREFIX}/list`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
}

export async function postTweet({ content, file }) {
  let formData = new FormData();
  formData.append("content", content);
  if (file) formData.append("file", file);
  const url = `${PREFIX}/add`;
  let result;

  result = await postFormData(url, formData);
  return result;
}
