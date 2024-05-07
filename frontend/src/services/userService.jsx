import { BASEURL, get, post, put } from "./requestService";
const PREFIX = `${BASEURL}/api/user`;

export async function getUser() {
  //获取当前登录用户信息
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

// export async function getOtherUserByUsername(username) {
//   const url = `${PREFIX}/get/${username}`;
//   let result;

//   result = await get(url);
//   return result;
// }

export async function getOtherUserById(id) {
  const url = `${PREFIX}/get/${id}`;
  let result;

  result = await get(url);
  return result;
}