import { BASEURL, get, post, postFormData, put } from "./requestService";
const PREFIX = `${BASEURL}/api/message`;

export async function getHistory( receiverId ) {
  const url = `${PREFIX}/history/${receiverId}`;
  let result;
  result = await get(url);
  return result;
}

export async function postImage( formData ) {
  const url = `${PREFIX}/image`;
  let result;
  result = await postFormData(url, formData);
  return result;
}
