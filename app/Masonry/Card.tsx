import React from "react";

const card = {
  title: "Title Title Title",
  date: "24th June 2024",
};

const Card = () => {
  return (
    <div className="p-2 bg-green-700">
      <div className="w-[314px] h-[368px] bg-green-300"></div>
      <div className="w-[314px]">
        <div className="text-xl pt-4 ">{card.title}</div>
        <div className="text-base text-[#A1A0A0] pt-3 ">{card.date}</div>
      </div>
    </div>
  );
};

export default Card;
