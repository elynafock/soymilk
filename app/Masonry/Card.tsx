import React from "react";
import { Post } from ".";

type Props = {
  post: Post;
};

const Card = (props: Props) => {
  return (
    <div className="p-2 bg-green-700 rounded-lg ">
      <div
        className="w-full bg-green-300"
        style={{ height: props.post.img.height }}
      ></div>
      <div className="w-full">
        <div className="text-xl pt-4 ">{props.post.title}</div>
        <div className="text-base text-[#A1A0A0] pt-3 ">
          {props.post.createdAt.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default Card;
