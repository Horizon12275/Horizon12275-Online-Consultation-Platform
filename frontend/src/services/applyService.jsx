import { BASEURL, Delete, get, post } from "./requestService";
const PREFIX = `${BASEURL}/api/application`;

export const applyExpert = async (application) => {
  const url = `${PREFIX}/add`;
  let result;

  result = await post(url, application);
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
}