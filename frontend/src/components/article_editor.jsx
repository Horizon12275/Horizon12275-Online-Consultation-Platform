import { Button, Form } from "antd";
import MdEditor from "for-editor";
import { useState } from "react";
const ArticleEditor = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    console.log(value);
  };
  return (
    <div>
      <MdEditor value={value} onChange={setValue} />
      <Button onClick={handleClick}>提交</Button>
    </div>
  );
};

export default ArticleEditor;
