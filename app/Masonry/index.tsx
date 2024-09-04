import React from "react";
import Card from "./Card";

export type Post = {
  id: string;
  title: string;
  img: {
    url: string;
    width: number;
    height: number;
  };
  createdAt: Date;
};

const posts: Array<Post> = [
  {
    id: "1",
    title: "Drawing 1",
    img: {
      url: "././public/hw6.png",
      width: 314,
      height: 368,
    },
    createdAt: new Date(2024, 8, 4),
  },
  {
    id: "2",
    title: "Drawing 2",
    img: {
      url: "././public/hw6.png",
      width: 314,
      height: 368,
    },
    createdAt: new Date(2024, 8, 4),
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 justify-center">
      {posts.map((post) => (
        <Card post={post}></Card>
      ))}
    </div>
  );
};

export default Cards;
