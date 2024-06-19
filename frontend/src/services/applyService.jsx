import { BASEURL, Delete, get, post, postFormData } from "./requestService";
const PREFIX = `${BASEURL}/api/application`;

export const applyExpert = async ({
  email,
  password,
  verificationCode,
  education,
  certificate,
  firstName,
  lastName,
  field,
  introduction,
}) => {
  //在控制台打印出来看看，看看数据是否正确，打印具体详细信息
  console.log({
    email,
    password,
    verificationCode,
    education,
    certificate,
    firstName,
    lastName,
    field,
    introduction,
  });
  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("verificationCode", verificationCode);
  formData.append("education", education);
  formData.append("file", certificate);
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("field", JSON.stringify(field));
  formData.append("introduction", introduction);
  const url = `${PREFIX}/add`;
  let result;

  result = await postFormData(url, formData);
  return result;
};

export const getApplications = async () => {
  const url = `${PREFIX}/list`;
  let result;

  result = await get(url);
  return result;
};

export const deleteApplication = async (id) => {
  const url = `${PREFIX}/delete/${id}`;
  let result;

  result = await Delete(url);
  return result;
};

export const approveApplication = async (id) => {
  const url = `${PREFIX}/approve/${id}`;
  let result;

  result = await post(url);
  return result;
};

export const sendVertificationCodeExpert = async (email) => {
  const url = `${PREFIX}/sendCode/${email}`;
  let result;

  try {
    result = await get(url);
    alert("验证码已发送，请查收！");
  } catch (e) {
    alert(e);
  }
};
