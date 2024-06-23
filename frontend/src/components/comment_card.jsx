function Avatar({ src, alt }) {
  return (
    <img src={src} alt={alt} className="w-10 aspect-square rounded-full" />
  );
}

function AuthorInfo({ name, timestamp }) {
  return (
    <div className="flex gap-0 py-px pr-5">
      <div className="text-sm font-bold leading-5 text-neutral-800 mr-2">
        {name}
      </div>
      <div className="text-xs leading-5 text-neutral-400">{timestamp}</div>
    </div>
  );
}

function ReactionButton({ count, isLiked, onCLick }) {
  return (
    <div className="flex gap-0 py-px">
      <div className="flex justify-center items-center p-2">
        <img
          src={
            isLiked
              ? "/likeIcon.png"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/70beedf7d104b344fcbb2242bb8bccf621c840fc6b928bb43e467b927e3c8649?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
          }
          alt=""
          className="w-4 aspect-square cursor-pointer"
          onClick={onCLick}
        />
      </div>
      <div className="justify-center py-2 pr-2 text-xs leading-5 whitespace-nowrap text-neutral-400">
        {count}
      </div>
    </div>
  );
}

export default function CommentCard({ comment, isLiked, handleLike }) {
  return (
    <article className="flex gap-0 mt-3" style={{ width: "100%" }}>
      <div className="flex flex-col justify-center items-start self-start pr-4">
        <Avatar
          src={comment.user.expert?.avatar || comment.user.client?.avatar}
          alt={`avatar`}
        />
      </div>
      <div className="flex flex-col">
        <AuthorInfo
          name={comment.user.expert?.name || comment.user.client?.username}
          timestamp={new Date(comment.time).toDateString()}
        />
        <p
          className="justify-center text-sm leading-5 text-neutral-800"
          style={{ maxWidth: "100%" }}
        >
          {comment.content}{" "}
        </p>
        <div className="flex gap-0 py-0.5 pr-20">
          <ReactionButton
            isLiked={isLiked}
            onCLick={() => handleLike(comment)}
            count={comment.comment?.likes.length}
          />
        </div>
      </div>
    </article>
  );
}
