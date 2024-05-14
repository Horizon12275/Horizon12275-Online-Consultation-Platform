import React from "react";
import ArticleEditor from "../components/article_editor";
import { PrivateLayout } from "../layouts";

export default function WriteArticlePage() {
  return (
    <PrivateLayout>
      <ArticleEditor />
    </PrivateLayout>
  );
}
