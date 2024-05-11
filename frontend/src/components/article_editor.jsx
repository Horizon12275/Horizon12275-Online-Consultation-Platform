import { Button, Form } from "antd";
import MdEditor from "for-editor";
import { useState } from "react";
import { post } from "../services/requestService";
const ArticleEditor = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setValue("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: "2vh" }}>Write Down Your Professional Idea!</h1>
      <MdEditor
        value={value}
        onChange={setValue}
        style={{ margin: "2vh", minWidth: "60vw" }}
      />
      <Button
        onClick={handleClick}
        style={{
          minWidth: "60vw",
          minHeight: "5vh",
          fontSize: "15px",
          backgroundColor: "#1890ff",
          color: "white",
          margin: "2vh",
        }}
      >
        Submit!
      </Button>
    </div>
  );
};

export default ArticleEditor;
