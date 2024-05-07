import React, { useState } from "react";

const SortButton = ({ label, isActive, onClick }) => (
  <div
    className={`px-4 cursor-pointer ${
      isActive ? "bg-zinc-300" : "bg-zinc-200"
    }  rounded-md flex items-center`}
    onClick={onClick}
  >
    {label}
  </div>
);

const SortByButtons = ({ onSortChange }) => {
  const [activeButton, setActiveButton] = useState("price");

  const buttons = [
    { label: "Price", value: "price" },
    { label: "Rating", value: "rating" },
  ];

  const handleButtonClick = (value) => {
    setActiveButton(value);
    onSortChange(value);
  };

  return (
    <div className="flex gap-0">
      {buttons.map((button) => (
        <SortButton
          key={button.label}
          label={button.label}
          isActive={activeButton === button.value}
          onClick={() => handleButtonClick(button.value)}
        />
      ))}
    </div>
  );
};

export default function RadioSort({ onSortChange }) {
  return (
    <div className="flex gap-5 h-[40px] text-base  text-center ">
      <div className="my-auto">Sort By:</div>
      <SortByButtons onSortChange={onSortChange} />
    </div>
  );
}
