import { Link } from "react-router-dom";

function MembersOnlyBadge() {
  return (
    <div className="flex gap-2 self-start text-sm text-zinc-600">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29d60e223ce6cd7d206922e20ed176457199385294259b6491a972ebd47feea5?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
        alt="Members only badge"
        className="shrink-0 my-auto w-3 aspect-square"
      />
      <div>Members only</div>
    </div>
  );
}
function AuthorInfo({ article }) {
  return (
    <div className="flex gap-4 mt-12">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/887617ec837ec8979da356ed4b89463ae75062bdf7c6fd80551bd77a81b0b756?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
        alt="Author avatar"
        className="shrink-0 my-auto w-10 aspect-square"
      />
      <div className="flex flex-col">
        <div className="text-zinc-700">{article.author.user.username}</div>
        <div className="text-zinc-600">Aug 18</div>
      </div>
    </div>
  );
}
const HomeArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="flex flex-col text-base leading-6 shadow-lg w-[300px] h-[460px]  m-4"
    >
      <img src={article.cover} className=" h-40 object-cover" />
      <article className="flex flex-col justify-center w-full h-full">
        <div className="flex flex-col pb-4 w-full bg-white rounded-none h-full">
          <div className="w-full bg-white border border-white border-solid min-h-[1px]" />
          <div className="flex flex-col px-6 mt-3.5 w-full">
            <MembersOnlyBadge />
            <h2 className="mt-2 text-xl font-bold leading-8 text-zinc-900 h-8 truncate">
              {article.title}
            </h2>
            <p className="mt-3.5 leading-5 text-zinc-700 h-[100px]">
              {article.content}
            </p>
            <AuthorInfo article={article} />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default HomeArticleCard;
