import { BASEURL, get, post, put } from "./requestService";
const PREFIX = `${BASEURL}/api/message`;

export async function getHistory( receiverId ) {
  const url = `${PREFIX}/history/${receiverId}`;
  let result;
  result = await get(url);
  return result;
}
