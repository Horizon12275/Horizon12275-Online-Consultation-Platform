import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import "github-markdown-css";
import "highlight.js/styles/atom-one-dark.css";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

const ArticleDisplay = ({ article }) => {
  return (
    <>
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <Markdown
        className="mt-4 prose po prose-zinc max-w-none dark:prose-invert w-[1000px]"
        children={article.content}
        rehypePlugins={[rehypeRaw]}
      />
    </>
  );
};

export default ArticleDisplay;
