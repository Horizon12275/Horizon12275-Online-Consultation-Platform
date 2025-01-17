import React, { useState } from "react";
import { Input } from "antd";
import { addArticleComment } from "../services/articleCommentService";
import { addTweetComment } from "../services/tweetCommentService";
import { addExpertComment } from "../services/expertCommentService";
import { useAuth } from "../context/authContext";

const { TextArea } = Input;

function CommentInput({ value, onChange }) {
  return (
    <div className="flex flex-col justify-center w-full leading-8 text-gray-500">
      <div className="flex flex-col justify-center w-full">
        <TextArea
          required
          value={value}
          onChange={onChange}
          rows={4}
          placeholder="Enter your Comment Here!"
          className="justify-center px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 border-solid shadow-sm"
        />
      </div>
    </div>
  );
}

function ShareButton({ handleClick }) {
  return (
    <div
      onClick={handleClick}
      className="flex gap-2 justify-center px-4 py-2.5 mt-2 font-semibold text-blue-600 bg-sky-200 rounded-lg cursor-pointer"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3d5daf1ba07a37f084d4b24416314a47919d5aac10e3f391ca19da010b33476?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <div className="my-auto">Share Your Comment !</div>
    </div>
  );
}

function CommentBox({ id, type, setComments }) {
  const { user, client, expert } = useAuth();
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    if (value.trim() === "") return;
    const comment = {
      content: value,
      time: new Date().toLocaleString(),
      comment: { id: 0, likes: [], repies: [] },
      user: {
        id: user.id,
        expert: expert,
        client: client,
      },
    };
    if (type === "article")
      addArticleComment({ aid: id, content: value })
        .then((res) => {
          comment.comment.id = res.comment.id;
          setValue("");
          setComments((prev) => [...prev, comment]);
        })
        .catch((e) => alert(e));
    else if (type === "tweet")
      addTweetComment({ tid: id, content: value })
        .then((res) => {
          comment.comment.id = res.comment.id;
          setValue("");
          setComments((prev) => [...prev, comment]);
        })
        .catch((e) => alert(e));
    else if (type === "expert")
      addExpertComment({ eid: id, content: value })
        .then((res) => {
          comment.comment.id = res.comment.id;
          setValue("");
          setComments((prev) => [...prev, comment]);
        })
        .catch((e) => alert(e));
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "375px",
        left: "280px",
        width: "350px",
        // height:"100px",
        backgroundColor: "#f5f5f5",
        padding: "10px",
        // border: "1px solid black",
      }}
    >
      <CommentInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <ShareButton handleClick={handleSubmit} />
    </div>
  );
}

export default CommentBox;
