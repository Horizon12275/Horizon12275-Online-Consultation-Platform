import { BASEURL, get, post, postUrlencoded } from "./requestService";
const PREFIX = `${BASEURL}/api/user`;
export async function login({ username, password }) {
  const url = `${PREFIX}/login`;
  let result;
  result = await postUrlencoded(url, { username, password });
  return result;
}

export async function logout() {
  const url = `${PREFIX}/logout`;
  let result;
  result = await get(url);
  return result;
}

export async function register({ username, password, email, code }) {
  const url = `${PREFIX}/register`;
  try {
    let result;
    result = await post(url, { username, password, email });
    alert("注册成功！");
    location.reload();
  } catch (e) {
    console.log(e);
    alert(e);
  }
}

export async function checkAuth() {
  const url = `${PREFIX}/check`;
  let result;
  try {
    result = await get(url);
    return result;
  } catch (e) {
    location.href = "/login";
    alert(e);
  }
}
