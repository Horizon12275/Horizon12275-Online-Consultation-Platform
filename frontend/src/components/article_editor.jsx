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
    <div>
      <MdEditor value={value} onChange={setValue} />
      <Button onClick={handleClick}>提交</Button>
    </div>
  );
};

export default ArticleEditor;
