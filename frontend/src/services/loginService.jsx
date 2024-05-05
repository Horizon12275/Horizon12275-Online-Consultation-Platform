import { BASEURL, get, post, postUrlencoded } from "./requestService";
const PREFIX = `${BASEURL}/api/user`;
export async function login({ username, password }) {
  const url = `${PREFIX}/login`;
  let result;
  try {
    result = await postUrlencoded(url, { username, password });
    alert("登录成功！");
    // location.reload();
  } catch (e) {
    console.log(e);
    alert(e);
  }
}

export async function logout() {
  const url = `${PREFIX}/logout`;
  let result;
  try {
    result = await get(url);
    alert("登出成功！");
    location.href = "/";
  } catch (e) {
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
    location.href = "/";
    alert(e);
  }
}

export async function checkLogin() {
  const url = `${PREFIX}/check`;
  try {
    await get(url);
    return true;
  } catch (e) {
    return false;
  }
}
