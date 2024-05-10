import CommentCard from "./comment_card";

const CommentList = ({ comments }) => {
  return (
    <section style={{marginTop:'40px',display:'grid',gap:'30px'}}>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          author={comment.user}
          avatar={comment.avatar}
          content={comment.content}
          timestamp={comment.time}
          likes={comment.likes}
          onReply={() => console.log(`Reply to comment ${comment.id}`)}
        />
      ))}
    </section>
  );
};

export default CommentList;
