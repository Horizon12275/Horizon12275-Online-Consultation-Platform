import CommentCard from "./comment_card";

const CommentList = ({ comments }) => {
  return (
    <section>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          author={comment.user}
          avatar={comment.avatar}
          content={comment.content}
          timestamp={comment.timestamp}
          likes={comment.likes}
          onReply={() => console.log(`Reply to comment ${comment.id}`)}
        />
      ))}
    </section>
  );
};

export default CommentList;
