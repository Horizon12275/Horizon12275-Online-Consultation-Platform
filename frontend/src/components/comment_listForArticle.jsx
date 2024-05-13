import { useEffect, useState } from "react";
import { getCids, likeComment } from "../services/commentLikeService";
import CommentCard from "./comment_card";

const CommentListForArticle = ({ comments }) => {
  const [cids, setCids] = useState([]);
  useEffect(() => {
    getCids().then((res) => {
      setCids(res);
    });
  }, []);
  const handleLike = (res) => {
    const comment = res.comment;
    const cid = comment.id;
    try {
      likeComment(cid).then((res) => {
        if (cids.includes(cid)) {
          setCids(cids.filter((c) => c !== cid));
          comment.likes.pop();
        } else {
          setCids([...cids, cid]);
          comment.likes.push({});
        }
      });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <section style={{ width: "1000px" }}>
      <h2>Article Comments:</h2>
      {comments.map((comment, index) => (
        <CommentCard
          key={index}
          comment={comment}
          isLiked={cids.includes(comment.comment?.id)}
          handleLike={handleLike}
        />
      ))}
    </section>
  );
};

export default CommentListForArticle;
