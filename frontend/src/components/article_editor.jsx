import { Button, Form, Input, Select } from "antd";
import MdEditor from "for-editor";
import { useEffect, useState } from "react";
import { addArticle } from "../services/articleService";
import { getTags } from "../services/tagService";
import ImageUploader from "./image_upload";
import { UploadOutlined } from "@ant-design/icons";
const ArticleEditor = () => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const [cover, setCover] = useState([]);
  useEffect(() => {
    getTags().then((tags) => {
      setTags(tags);
    });
  }, []);
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase()); // 自定义搜索逻辑
  const handleSubmit = async (values) => {
    values.cover = cover[0];
    try {
      await addArticle(values);
      alert("Article added successfully!");
    } catch (e) {
      console.log(e);
      alert(e);
    }
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
      <h1 style={{ margin: "2vh", color: "#60a5fa" }}>
        Write Down Your Professional Idea!
      </h1>
      <Form
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        style={{ margin: "2vh", minWidth: "60vw" }}
      >
        {" "}
        <h3 style={{ marginBottom: "5px", color: "#60a5fa" }}>
          Select Tags For Your Article:
        </h3>
        <Form.Item
          id="tids"
          name="tids"
          rules={[{ required: true, message: "Please input your tags!" }]}
        >
          <Select
            filterOption={filterOption}
            mode="multiple"
            placeholder="Select tags"
            style={{ width: "100%" }}
            options={tags.map((tag) => {
              return { value: tag.id, label: tag.content };
            })}
          />
        </Form.Item>
        <h3 style={{ marginBottom: "5px", color: "#60a5fa" }}>
          Upload Cover Image:
        </h3>
        <Form.Item
          id="cover"
          name="cover"
          rules={[
            {
              validator: (_, value) => {
                if (cover.length > 0) {
                  return Promise.resolve();
                }
                return Promise.reject("Please upload a cover image!");
              },
            },
          ]}
          className="flex"
        >
          <ImageUploader
            multiple={false}
            children={
              <Button size="large" icon={<UploadOutlined />}>
                Upload Cover
              </Button>
            }
            selectedImages={cover}
            setSelectedImages={setCover}
          />
        </Form.Item>{" "}
        <h3 style={{ marginBottom: "5px", color: "#60a5fa" }}>Title:</h3>
        <Form.Item
          id="title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input size="large" placeholder="Title" />
        </Form.Item>
        <h3 style={{ marginBottom: "5px", color: "#60a5fa" }}>Description:</h3>
        <Form.Item
          id="description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input.TextArea rows={6} placeholder="Description" />
        </Form.Item>
        <h3 style={{ marginBottom: "5px", color: "#60a5fa" }}>Content:</h3>
        <Form.Item
          id="content"
          name="content"
          className=" max-w-[60vw]"
          rules={[{ required: true, message: "Please input your content!" }]}
        >
          <MdEditor value={value} onChange={setValue} language="en"/>
        </Form.Item>
        <Button
          htmlType="submit"
          style={{
            minWidth: "60vw",
            minHeight: "5vh",
            fontSize: "15px",
            backgroundColor: "#1890ff",
            color: "white",
          }}
        >
          Submit!
        </Button>
      </Form>
    </div>
  );
};

export default ArticleEditor;
