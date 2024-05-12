import { useEffect, useState } from "react";
import { getCids, likeComment } from "../services/commentLikeService";
import CommentCard from "./comment_card";

const CommentList = ({ comments }) => {
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
          comment.likes.push({ });
        }
      });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <section
      style={{
        position: "absolute",
        top: "430px",
        left: "285px",
        width: "300px",
      }}
    >
      {comments.map((comment, index) => (
        <CommentCard
          key={index}
          comment={comment}
          isLiked={cids.includes(comment.comment.id)}
          handleLike={handleLike}
        />
      ))}
    </section>
  );
};

export default CommentList;
