import { BASEURL, get, post, postText } from "./requestService";
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

export async function postTweet({ content }) {
  const url = `${PREFIX}/add`;
  let result;
  try {
    result = await postText(url,  content );
    return result;
  } catch (e) {
    console.log(e);
    alert(e);
  }
}
