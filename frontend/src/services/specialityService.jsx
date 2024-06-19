import { BASEURL, get } from "./requestService";
const PREFIX = `${BASEURL}/api/speciality`;

export async function getSpecialities() {
  const url = `${PREFIX}/list`;
  let result;

  result = await get(url);
  return result;
}
