import CommentCard from "./comment_card";

const CommentList = ({ comments }) => {
  return (
    <section style={{position:'absolute',top:'640px',left:'285px',width:'350px'}}>
      {comments.map((comment, index) => (
        <CommentCard
          key={index}
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
