import { Button, Col, Flex, Input, Row, Upload } from "antd";
import EmojiDropdown from "./emoji_dropdown";
import { useState } from "react";
import { postTweet } from "../services/tweetService";
import { useAuth } from "../context/authContext";
import ImageUpload from "./image_upload";
import ImageUploader from "./image_upload";

const FeedEditor = ({ setTweets }) => {
  const [value, setValue] = useState("");
  const { client } = useAuth();
  const [selectedImages, setSelectedImages] = useState([]);

  const socialIcons = [
    {
      children: (
        <ImageUploader
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          children={
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/295d4cbba18c8555324aa8193d53ca9d7005accc5bd91937a2bf67ced21afa67?apiKey=9e661a5e0ad74c878ca984d592b3752c&" />
          }
        />
      ),

      alt: "Image",
      handleClick: () => console.log("Social icon 1 clicked"),
    },
    {
      children: (
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/655f4514f4fdaf7779139ba1b2d7717c8c824c697d315cd030e3675443da1402?apiKey=9e661a5e0ad74c878ca984d592b3752c&" />
      ),
      alt: "GIF",
      handleClick: () => console.log("Social icon 1 clicked"),
    },

    {
      children: <EmojiDropdown value={value} setValue={setValue} />,
      alt: "Emoji",
      handleClick: () => console.log("Social icon 1 clicked"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fc6030265755617261f3f38675fdb7eb7dbebb5b48743e15830df963cc0c37b?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
      alt: "Social icon 5",
      handleClick: () => console.log("Social icon 1 clicked"),
    },
  ];
  const handleClick = () => {
    postTweet({ content: value, file: selectedImages[0] }).then((res) => {
      setValue("");
      setTweets((prev) => [
        ...prev,
        {
          poster: client,
          content: value,
          time: new Date().toLocaleString(),
          likes: [],
          image: res.image,
        },
      ]);
    });
    alert("Tweet posted successfully");
  };
  return (
    <Flex vertical className=" h-[300] m-auto">
      <Row>
        <Col>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2cfb9074e6b0dba093da573ddfff70007b435a441359a1c30ff33a3d04f7a36?apiKey=9e661a5e0ad74c878ca984d592b3752c&"
            alt="Profile picture"
            className="shrink-0 aspect-square w-[49px] m-3 "
          />
        </Col>
        <Col>
          <Input.TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What's on your mind?"
            rows={6}
            className=" m-3 w-[800px] h-[200px] bg-transparent border-none text-xl font-bold leading-10 text-slate-500 resize-none focus:ring-0 focus:outline-none focus:border-none focus:border-transparent focus:ring-transparent focus:bg-transparent focus:shadow-none hover:bg-transparent"
          />
        </Col>
      </Row>
      <Row justify={"space-between"}>
        <nav className="flex gap-4 justify-between px-5 my-auto">
          {socialIcons.map((icon, index) => (
            <div
              key={index}
              children={icon.children}
              onClick={icon.handleClick}
              className="shrink-0 w-6 aspect-square"
            />
          ))}
        </nav>
        <button
          disabled={value.trim() === ""}
          onClick={handleClick}
          className=" justify-center px-5 py-2.5 text-base font-bold leading-5 text-center text-white whitespace-nowrap bg-sky-500 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Publish
        </button>
      </Row>
    </Flex>
  );
};

export default FeedEditor;
