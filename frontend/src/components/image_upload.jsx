import { Dropdown } from "antd";
import React, { useRef, useState } from "react";

const ImageUploader = ({ onImageSelect, children }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleImageSelect = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setSelectedImages([...selectedImages, ...imagesArray]);
    onImageSelect(imagesArray); // 将文件数组传递给父组件
  };
  const items = [
    {
      label:
        selectedImages &&
        selectedImages.map((image) => (
          <img
            src={URL.createObjectURL(image)}
            alt="Selected"
            className="w-[300px] object-cover"
          />
        )),
    },
  ];
  return (
    <div>
      <input
        type="file"
        onChange={handleImageSelect}
        accept="image/*"
        multiple
        className="hidden"
        ref={inputRef}
      />
      <Dropdown menu={{ items }}>
        <span onClick={handleClick}>{children}</span>
      </Dropdown>
    </div>
  );
};

export default ImageUploader;
