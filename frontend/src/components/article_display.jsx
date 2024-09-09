import Markdown from "react-markdown";
import "github-markdown-css";
import "highlight.js/styles/atom-one-dark.css";
import rehypeRaw from "rehype-raw";

const ArticleDisplay = ({ article }) => {
  return (
    <>
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <img
        src={article.cover}
        style={{ maxWidth: "600px", marginTop: "30px", marginBottom: "30px" }}
      />
      <Markdown
        className="mt-4 prose po prose-zinc max-w-none dark:prose-invert w-[1000px]"
        children={article.content}
        rehypePlugins={[rehypeRaw]}
      />
    </>
  );
};

export default ArticleDisplay;
