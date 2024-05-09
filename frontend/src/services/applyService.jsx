import { BASEURL, get, post } from "./requestService";
const PREFIX = `${BASEURL}/api/application`;

export const applyExpert = async (application) => {
  const url = `${PREFIX}/add`;
  let result;

  result = await post(url, application);
  return result;  
};
