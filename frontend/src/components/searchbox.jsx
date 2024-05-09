import React, { useContext, useState } from "react";
import { Button, Input } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import SearchContext from "../context/searchcontext";
function IconButton({ src, alt }) {
  return (
    <div className="flex flex-col justify-center p-1">
      <div className="flex flex-col justify-center rounded-[100px]">
        <div className="flex justify-center items-center p-2">
          <img
            src={src}
            alt={alt}
            onClick={() => {}}
            className="w-6 aspect-square bg-transparent border-none hover:bg-transparent cursor-pointer focus:ring-0 focus:bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (value) => {
    setSearchParams({ keyword: value });
  };
  const [keyword, setKeyword] = useState("");
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/047ad1a6c4cfdfe5107645be3796ce88c653372764e88d549a0bdb7c29cbff46?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
      alt: "Icon 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/07452d7ff781497b3a417e671407f5fe8d2d246f0e0b093209e3a1d8f5fd7cbe?apiKey=9e661a5e0ad74c878ca984d592b3752c&",
      alt: "Icon 2",
    },
  ];
  // 修改 handleSearch 函数，加入页面跳转逻辑

  return (
    <section className="flex flex-col justify-center bg-gray-200 rounded-3xl max-w-[720px]">
      <div className="flex gap-1 p-1 max-md:flex-wrap">
        <IconButton src={icons[0].src} alt={icons[0].alt} />
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onPressEnter={() => handleSearch(keyword)}
          placeholder="输入关键词搜索"
          className="bg-transparent border-none focus:ring-0 focus:bg-transparent hover:bg-transparent"
        />
        <IconButton src={icons[1].src} alt={icons[1].alt} />
      </div>
    </section>
  );
};

export default SearchBar;
