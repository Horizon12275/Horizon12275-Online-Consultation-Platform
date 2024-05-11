import { BASEURL, get } from "./requestService";
const PREFIX = `${BASEURL}/api/client`;

// export const searchExperts = async ({ keyword }) => {
//   const url = `${PREFIX}/search?keyword=${keyword}&page=${1}&pageSize=${1}`;
//   let result;
//   try {
//     result = await get(url);
//     return result;
//   } catch (e) {
//     console.log(e);
//     alert(e);
//   }
// };

// export const getAllExperts = async () => {
//   const url = `${PREFIX}/list`;
//   let result;
//   try {
//     result = await get(url);
//     return result;
//   } catch (e) {
//     console.log(e);
//     alert(e);
//   }
// };

// export const getRecommendedExperts = async () => {
//   const url = `${PREFIX}/recommend/3`;
//   let result;
//   try {
//     result = await get(url);
//     return result;
//   } catch (e) {
//     console.log(e);
//     alert(e);
//   }
// };

export const getClientById = async (id) => {
  const url = `${PREFIX}/get/${id}`;
  let result;

  result = await get(url);
  return result;
};
