import { BASEURL, get } from "./requestService";
const PREFIX = `${BASEURL}/api/tweet`;

export async function getAllTweets(){
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