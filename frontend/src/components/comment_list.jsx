import CommentCard from "./comment_card";

const CommentList = ({ comments }) => {
  return (
    <section>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          author={comment.user.username}
          avatar={comment.user.avatar}
          content={comment.content}
          timestamp={comment.time}
          likes={3}
          onReply={() => console.log(`Reply to comment ${comment.id}`)}
        />
      ))}
    </section>
  );
};

export default CommentList;
