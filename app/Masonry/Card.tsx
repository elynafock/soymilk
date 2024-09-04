import React from "react";
import { Post } from ".";

type Props = {
  post: Post;
};

const Card = (props: Props) => {
  return (
    <div className="p-2 bg-green-700">
      <div className="w-[314px] h-[368px] bg-green-300"></div>
      <div className="w-[314px]">
        <div className="text-xl pt-4 ">{props.post.title}</div>
        <div className="text-base text-[#A1A0A0] pt-3 ">
          {props.post.createdAt.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default Card;
