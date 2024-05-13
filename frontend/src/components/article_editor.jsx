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
      <h1 style={{ margin: "2vh" }}>Write Down Your Professional Idea!</h1>
      <Form
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        style={{ margin: "2vh", minWidth: "60vw" }}
      >
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
          className="flex justify-center"
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
        </Form.Item>
        <Form.Item
          id="title"
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input size="large" placeholder="Title" />
        </Form.Item>
        <Form.Item
          id="description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input.TextArea rows={6} placeholder="Description" />
        </Form.Item>
        <Form.Item
          id="content"
          name="content"
          rules={[{ required: true, message: "Please input your content!" }]}
        >
          <MdEditor value={value} onChange={setValue} />
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
