import { BASEURL, Delete, get, post, postFormData } from "./requestService";
const PREFIX = `${BASEURL}/api/application`;

export const applyExpert = async ({
  email,
  password,
  vertificationCode,
  education,
  certificate,
  firstName,
  lastName,
  field,
  introduction
}) => {
  let formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("vertificationCode", vertificationCode);
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
