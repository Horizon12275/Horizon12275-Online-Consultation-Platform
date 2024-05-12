import { Dropdown } from "antd";
import React, { useRef, useState } from "react";

const ImageUploader = ({ selectedImages, setSelectedImages, children }) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleImageSelect = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setSelectedImages([...selectedImages, ...imagesArray]);
  };
  const items = [
    {
      label: (
        <div className="flex items-center gap-2 min-h-52 min-w-[400px]">
          {selectedImages &&
            selectedImages.map((image) => (
              <img
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="w-[300px] object-cover"
              />
            ))}
        </div>
      ),
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
