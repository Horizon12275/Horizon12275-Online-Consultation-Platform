import React, { useState } from "react";
import { Dropdown, Input, Menu } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function IconButton({ src, alt, onClick }) {
  return (
    <div className="flex flex-col justify-center p-1">
      <div className="flex flex-col justify-center rounded-[100px]">
        <div className="flex justify-center items-center p-2">
          <img
            src={src}
            alt={alt}
            onClick={onClick}
            className="w-6 aspect-square bg-transparent border-none hover:bg-transparent cursor-pointer focus:ring-0 focus:bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}

const SearchBar = ({ withSelect }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchType, setSearchType] = useState("Expert"); // expert, article, tweet
  const [keyword, setKeyword] = useState("");
  const handleSearch = (value) => {
    if (withSelect) {
      location.href = `/${searchType}?keyword=${value}`;
    } else setSearchParams({ keyword: value });
  };
  const handleClick = ({ key }) => {
    setSearchType(key);
  };

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
  const items = [
    {
      key: "Expert",
      label: "Expert",
    },
    {
      key: "Article",
      label: "Article",
    },
    {
      key: "Tweet",
      label: "Tweet",
    },
  ];

  return (
    <section className="flex flex-col justify-center bg-gray-200 rounded-3xl max-w-[800px]">
      <div className="flex gap-1 p-1 max-md:flex-wrap">
        {withSelect && (
          <>
            <Dropdown
              menu={{
                items,
                selectable: true,
                selectedKeys: searchType,
                onClick: handleClick,
              }}
            >
              <button className=" border-none bg-inherit">
                <IconButton src={icons[0].src} alt={icons[0].alt} />
              </button>
            </Dropdown>
            <span className="flex items-center text-sm text-gray-500">
              {searchType}
            </span>
          </>
        )}

        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onPressEnter={() => handleSearch(keyword)}
          placeholder="Search The Content You Want!"
          className="bg-transparent border-none focus:ring-0 focus:bg-transparent hover:bg-transparent"
        />
        <IconButton
          src={icons[1].src}
          alt={icons[1].alt}
          onClick={() => handleSearch(keyword)}
        />
      </div>
    </section>
  );
};

export default SearchBar;
