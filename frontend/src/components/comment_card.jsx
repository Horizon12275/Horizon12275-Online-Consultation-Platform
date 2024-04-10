function Avatar({ src, alt }) {
  return (
    <img src={src} alt={alt} className="w-10 aspect-square rounded-full" />
  );
}

function AuthorInfo({ name, timestamp }) {
  return (
    <div className="flex gap-0 py-px pr-5">
      <div className="text-sm font-bold leading-5 text-neutral-800">
        {name}{" "}
      </div>
      <div className="text-xs leading-5 text-neutral-400">{timestamp}</div>
    </div>
  );
}

function ReactionButton({ icon, count }) {
  return (
    <div className="flex gap-0 py-px">
      <div className="flex justify-center items-center p-2">
        <img src={icon} alt="" className="w-4 aspect-square" />
      </div>
      <div className="justify-center py-2 pr-2 text-xs leading-5 whitespace-nowrap text-neutral-400">
        {count}
      </div>
    </div>
  );
}

export default function CommentCard({ author, avatar, content, timestamp, likes, onReply }) {
  return (
    <article className="flex gap-0 mt-3">
      <div className="flex flex-col justify-center items-start self-start pr-4">
        <Avatar src={"/1.jpg"} alt={`${author}'s avatar`} />
      </div>
      <div className="flex flex-col">
        <AuthorInfo name={author} timestamp={timestamp} />
        <p className="justify-center text-sm leading-5 text-neutral-800">
          {content}
        </p>
        <div className="flex gap-0 py-0.5 pr-20">
          <ReactionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/70beedf7d104b344fcbb2242bb8bccf621c840fc6b928bb43e467b927e3c8649?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
            count={likes}
          />
          <ReactionButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7779fcae421b948b4e4285d944f27ab8d485f3c154d45d011e90c7bc01161efe?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
            count={likes * 8}
          />
          <div className="justify-center px-4 py-2 text-xs leading-5 uppercase whitespace-nowrap text-neutral-400">
            reply
          </div>
        </div>
      </div>
    </article>
  );
}
