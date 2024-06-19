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

export async function register({
  username,
  password,
  email,
  verificationCode,
}) {
  const url = `${PREFIX}/register`;
  try {
    let result;
    result = await post(url, { username, password, email, verificationCode });
    alert("注册成功！");
    location.href = "/login";
  } catch (e) {
    console.log(e);
    alert(e);
  }
}

export async function checkAuth() {
  const url = `${PREFIX}/get`;
  let result;

  result = await get(url);
  return result;
}

export async function sendCode(email) {
  if (!email) {
    alert("请输入邮箱！");
    return;
  }
  const url = `${PREFIX}/sendCode/${email}`;
  console.log(email);
  let result;
  try {
    result = await get(url);
    alert("验证码已发送，请查收！");
  } catch (e) {
    alert(e);
  }
}
