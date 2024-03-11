import Data from "../articles.json"; // 导入本地的书籍数据

export const search = async (keyword, pageIndex, pageSize) => {
  // 模拟从本地 JSON 文件获取书籍数据
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  const filteredBooks = Data.articles.filter((article) =>
    article.title.toLowerCase().includes(keyword.toLowerCase())
  );
  const pagedBooks = filteredBooks.slice(start, end);
  return { items: pagedBooks, total: filteredBooks.length };
};

export const getRecommendedArticles = async () => {
  // 模拟从本地 JSON 文件获取推荐书籍数据
  return Data.articles.slice(0, 10); // 假设前三本书为推荐书籍
};

export const getAllArticles = () => {
  return Data.articles; // 假设 allBooks.json 中的顶层属性名称为 books
};
