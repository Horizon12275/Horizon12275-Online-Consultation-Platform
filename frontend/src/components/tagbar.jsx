// 首页热门话题的标签栏
import React, { useEffect, useState } from "react";
import { Flex, Tag } from "antd";
import { useSearchParams } from "react-router-dom";
import { getTags } from "../services/tagService";

const TagBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tags, setTags] = useState([]);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    getTags().then((res) => {
      setTags(res);
    });
    setSelected([searchParams.get("tag") || ""]);
  }, [searchParams.get("tag")]);
  const handleChange = (tag, checked) => {
    setSelected(checked ? [tag] : [""]);
    setSearchParams({
      page: 1,
      pageSize: searchParams.get("pageSize") || 12,
      keyword: "",
      tag: checked ? tag : "",
    });
  };

  return (
    <div className="flex flex-wrap gap-3 mt-10">
      <Flex gap="10px 3px" wrap="wrap" align="center" className="mt-10">
        {tags.map((tag) => (
          <Tag.CheckableTag
            key={tag.id}
            checked={selected.includes(tag.id.toString())}
            onChange={(checked) => handleChange(tag.id.toString(), checked)}
            className="px-3 py-1 rounded border-zinc-500 text-center "
          >
            {tag.content}
          </Tag.CheckableTag>
        ))}
      </Flex>
    </div>
  );
};
export default TagBar;
