import React from "react";
import { List, Pagination } from "antd";
import HomeArticleCard from "./homearticle_card";
import { useSearchParams } from "react-router-dom";
import { List } from "antd";
//import HomeArticleCard from "./homearticle_card";
import { ArticleCard } from "./expert_articles";

export default function HomeArticle({ articles, length }) {
  //这个子组件的回调是修改page和pageSize 其他都不变
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePageChange = (page, pageSize) => {
    setSearchParams({
      page: page,
      pageSize: pageSize,
      keyword: searchParams.get("keyword") || "",
      tag: searchParams.get("tag") || "",
      layout: searchParams.get("layout") || "block",
    });
  };
  return (
    <List
      dataSource={articles}
      grid={{
        column: 3,
      }}
      renderItem={(article) => (
        <List.Item>
          <ArticleCard article={article} />
        </List.Item>
      )}
    >
      <Pagination
        current={searchParams.get("page") || 1}
        defaultPageSize={12}
        pageSize={searchParams.get("pageSize") || 12}
        onChange={handlePageChange}
        showQuickJumper
        showSizeChanger
        pageSizeOptions={["12", "24", "48"]}
        total={length}
        showTotal={(total, range) =>
          `${total} 项中的 ${range[0]}-${range[1]} 项 `
        }
        position="bottom"
      />
    </List>
  );
}
