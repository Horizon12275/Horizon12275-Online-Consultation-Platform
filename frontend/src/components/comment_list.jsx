// 传入部分评论 展示评论列表
import React from "react";

const CommentList = ({ comments }) => (
  <ul>
    {comments.map((comment, i) => (
      <li key={i}>{comment}</li>
    ))}
  </ul>
);

export default CommentList;