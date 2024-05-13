import React from "react";
import ArticleEditor from "../components/article_editor";
import { BasicLayout } from "../layouts";

export default function WriteArticlePage() {
  return (
    <BasicLayout>
      <ArticleEditor />
    </BasicLayout>
  );
}
