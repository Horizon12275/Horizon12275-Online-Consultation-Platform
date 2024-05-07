import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

const ArticleDisplay = ({ article }) => {
  return (
    <Markdown
      className="markdown-body bg-inherit"
      children={article.content}
      // remarkPlugins={[remarkGfm, { singleTilde: false }]}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkBreaks]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={tomorrow}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default ArticleDisplay;
