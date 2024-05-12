import React, { useState } from "react";
import { Flex, Rate } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const RateButton = () => {
  const [value, setValue] = useState(3);
  return (
    <Flex
      gap="middle"
      vertical
      align="center"
      style={{ position:'absolute',left:'420px',top:'330px',width:'180px'}}
    >
      <header className="text-2xl text-center text-black max-w-[84px] m-auto ">
        Rating:
      </header>
      <Rate tooltips={desc} onChange={setValue} value={value} />
    </Flex>
  );
};
export default RateButton;
