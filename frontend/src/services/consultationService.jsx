import { BASEURL, get, post, postText } from "./requestService";
const PREFIX = `${BASEURL}/api/consultation`;

export const addConsultation = async (eid) => {
  const url = `${PREFIX}/add/${eid}`;
  let result;

  result = await post(url);
  return result;
};

export const getConsultation = async () => {
  const url = `${PREFIX}/list`;
  let result;

  result = await get(url);
  return result;
};
