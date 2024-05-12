import { Dropdown, Image } from "antd";
import React, { useRef, useState } from "react";

const ImageUploader = ({
  selectedImages,
  setSelectedImages,
  children,
  multiple,
}) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };
  const handleImageSelect = (event) => {
    const files = event.target.files;
    if (files.length === 0) {
      return; // 如果是取消选择文件，则不做任何处理
    }
    if (multiple) {
      const imagesArray = Array.from(files);
      setSelectedImages([...selectedImages, ...imagesArray]);
    } else {
      setSelectedImages([files[0]]);
    }
  };
  const items = [
    {
      label: (
        <div className="flex items-center gap-2 min-h-52 min-w-[400px]">
          {selectedImages &&
            selectedImages.map(
              (image) =>
                image && (
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                    className="w-[300px] object-cover"
                    width={500}
                  />
                )
            )}
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
        multiple={multiple}
        style={{ display: "none" }}
        ref={inputRef}
      />
      <Dropdown menu={{ items }}>
        <span onClick={handleClick}>{children}</span>
      </Dropdown>
    </div>
  );
};

export default ImageUploader;
