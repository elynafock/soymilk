import React from "react";

const user = {
  imageUrl: "",
  fullName: "Hollow Knight",
  description:
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl imperdiet quam class luctus urna bibendum. Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl imperdiet quam class luctus urna bibendum.",
};

const SelfIntro = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-40 h-40 bg-yellow-200 rounded-full"></div>
      <div className="pl-6">
        <h1 className="text-[40px]">{user.fullName}</h1>
        <h2 className="w-[493px] overflow-hidden text-ellipsis whitespace-pre-line line-clamp-3 text-[#A1A0A0] pt-4">
          {user.description}
        </h2>
      </div>
    </div>
  );
};
// text-2xl text-[#A1A0A0] w-[493px] truncate
export default SelfIntro;
