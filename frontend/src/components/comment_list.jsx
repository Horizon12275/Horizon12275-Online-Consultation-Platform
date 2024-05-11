import CommentCard from "./comment_card";

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
<<<<<<< HEAD
    <section style={{position:'absolute',top:'430px',left:'285px',width:'300px'}}>
=======
    <section>
>>>>>>> parent of 15678bd (ok)
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
