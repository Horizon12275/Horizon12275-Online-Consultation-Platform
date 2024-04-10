import Data from "../json/articles.json"; // 导入本地的书籍数据

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
  return Data.articles.slice(0, 6); // 假设前三本书为推荐书籍
};

export const getAllArticles = () => {
  return Data.articles; // 假设 allBooks.json 中的顶层属性名称为 books
};

export const findExpertArticleTags = (expert) => {
  // 筛选出属于该专家的所有文章的标签

  // 筛选出属于该专家的所有文章
  const expertArticles = Data.articles.filter((article) =>
    expert.articles.includes(article.id)
  );

  // 提取所有标签并去重
  const allTagsSet = new Set();
  expertArticles.forEach((article) => {
    article.tags.forEach((tag) => {
      allTagsSet.add(tag);
    });
  });

  // 将 Set 转换为数组
  const allTags = Array.from(allTagsSet);

  return allTags.slice(0, 3);
};

export const findExpertArticlesById = async (expertId) => {
  // 筛选出属于该专家的所有文章
  const expertArticles = Data.articles.filter(
    (article) => article.author_id === parseInt(expertId)
  );

  return expertArticles;
};

export const getArticleById = async (id) => {
  // 模拟从本地 JSON 文件获取书籍数据
  return Data.articles.find((article) => article.id === parseInt(id));
};
