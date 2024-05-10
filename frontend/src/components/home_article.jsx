

function ArticleCard({ article }) {
  return (
    <article className="flex flex-col mr-8 grow shrink-0 gap-0 text-base font-medium text-black rounded basis-0 w-fit">
      <img loading="lazy" src={article.image} alt={article.imageAlt} className="gap-0 w-full aspect-[1.79] " />
      <div className="justify-center py-3 pr-3 pl-3 bg-white text-xl">{article.excerpt}</div>
    </article>
  );
}

function handleArticles() {
    window.location.href="/article";
}

function ShowArticle() {
  const articles = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f24e9fb51460b3be9de77a61d7c376b1f09bf02f8c8c8c49df558e4839565103?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
      imageAlt: "Article image",
      excerpt: "In the context of the rapid development of digital currencies, governments and regulatory agencies face the challenge of formulating and adjusting regulatory frameworks......",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f24e9fb51460b3be9de77a61d7c376b1f09bf02f8c8c8c49df558e4839565103?apiKey=273a9e43b39c48c2a08ea907e27f337f&",
      imageAlt: "Article image",
      excerpt: "In the context of the rapid development of digital currencies, governments and regulatory agencies face the challenge of formulating and adjusting regulatory frameworks......",
    },
    // Add more articles here
  ];
  const styles = `
  .myButton {
    background-color: #4169E1; /* 这里替换为你想要的颜色 */
  }
`;
  return (
      <>
  <style>{styles}</style>
  <div
      className="gap-0 self-start mt-20 text-6xl tracking-tight leading-[64px] text-neutral-400 max-md:flex-wrap max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
    <div className="flex flex-auto gap-3.5 max-md:flex-wrap">
      <div className="flex flex-col grow shrink-0 gap-5 self-start mt-2 basis-0 w-fit">
        <header
            className="gap-0 pr-24 text-6xl tracking-tight leading-[64px] text-neutral-400 max-md:text-4xl max-md:leading-[50px]">
          <h1 className="text-5xl leading-[52px] text-black">Read top articles from experts</h1>
          <p className="text-3xl leading-9 text-neutral-400 mt-4">
            Articles keep you informed about various areas of expertise and solve common problems.
          </p>
        </header>
        <button
            className="self-center mr-20 px-10 py-4 text-xl font-extrabold leading-5 text-center text-white bg-gray-900 rounded-full max-md:px-5 myButton"
            onClick={handleArticles}>
          See more articles
        </button>
      </div>
      {articles.map((article, index) => (
          <ArticleCard key={index} article={article}/>
      ))}
    </div>
  </div>
</>
)
  ;
}

export default ShowArticle;