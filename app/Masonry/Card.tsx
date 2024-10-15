import React from "react";
import { Post } from ".";
import MoreIcon from "./MoreIcon";
import Image from "next/image";

type Props = {
  post: Post;
};

const Card = (props: Props) => {
  return (
    <div className=" bg-gray-600 rounded-3xl">
      {props.post.img.url && (
        <Image
          src={props.post.img.url}
          className="w-full rounded-t-lg"
          width={props.post.img.width}
          height={props.post.img.height}
          alt={props.post.title || ""}
        />
      )}
      <div className="flex items-center		">
        <div className="w-full py-8 px-6 flex text-center">
          <div className="text-xl 	 ">{props.post.title}</div>
          <div className="text-base text-gray-100 pt-3 ">
            {new Date(props.post.created_at).toDateString()}
          </div>
        </div>
        <MoreIcon />
      </div>
    </div>
  );
};

export default Card;
