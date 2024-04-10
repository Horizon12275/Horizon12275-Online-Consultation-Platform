import React from "react";
import { Card, Tag, Typography } from "antd";

const { Title, Paragraph } = Typography;

function SpecialtyBadge({ label }) {
  return (
    <div className="flex flex-col flex-1 justify-center rounded-lg border border-solid border-zinc-500">
      <div className="justify-center px-4 py-1.5">{label}</div>
    </div>
  );
}

const CarouselCard = ({ expert }) => {
  const specialties = ["Label", "Label"];
  return (
    <div className="flex mt-6 justify-between text-lg font-medium text-black whitespace-nowrap">
      <img
        loading="lazy"
        src={expert.image}
        alt="Profile"
        className=" w-24 h-24 border-4 border-white border-solid shadow-lg aspect-square rounded-full object-cover"
      />
      <div className="flex flex-col self-start px-5">
        <div>{expert.name}</div>
        <div>
          Specialties
          <br />
        </div>
        <div className="flex gap-3.5 mt-3 text-sm tracking-normal leading-5 text-center text-zinc-700">
          {specialties.map((specialty, index) => (
            <Tag.CheckableTag
              key={index}
              className="px-3 py-1 rounded mr-3 border-zinc-500 text-center "
            >
              {specialty}
            </Tag.CheckableTag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
