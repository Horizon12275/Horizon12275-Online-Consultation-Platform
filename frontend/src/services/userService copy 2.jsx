import { BASEURL, get, post, put } from "./requestService";
const PREFIX = `${BASEURL}/api/user`;

export async function getUser() {
  const url = `${PREFIX}/get`;
  let result;
  result = await get(url);
  return result;
}

export async function updateUser(user) {
  const url = `${PREFIX}/update`;
  let result;
  result = await put(url, user);
  return result;
}

export async function getOtherUser(username) {
  const url = `${PREFIX}/get/${username}`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
}
