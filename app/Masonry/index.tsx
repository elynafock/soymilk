"use client";

import React from "react";
import Card from "./Card";
import useMediaQuery from "../hooks";

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
      height: 238,
    },
    createdAt: new Date(2024, 8, 4),
  },
  {
    id: "2",
    title: "Drawing 2",
    img: {
      url: "././public/hw6.png",
      width: 314,
      height: 349,
    },
    createdAt: new Date(2024, 8, 4),
  },
  {
    id: "3",
    title: "Drawing 3",
    img: {
      url: "././public/hw6.png",
      width: 314,
      height: 543,
    },
    createdAt: new Date(2024, 8, 4),
  },
  {
    id: "4",
    title: "Drawing 4",
    img: {
      url: "././public/hw6.png",
      width: 314,
      height: 600,
    },
    createdAt: new Date(2024, 8, 4),
  },
  {
    id: "5",
    title: "Drawing 4",
    img: {
      url: "././public/hw6.png",
      width: 314,
      height: 200,
    },
    createdAt: new Date(2024, 8, 4),
  },
];

const Cards = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const columns = isDesktop ? 3 : 2;

  return (
    <div className="grid grid-cols-2 gap-4 pt-12 px-4 max-w-screen-lg mx-auto lg:grid-cols-3">
      {[...Array(columns)].map((_, i) => (
        <div className="flex flex-col gap-4" key={i}>
          {posts
            .filter((_, j) => j % columns === i)
            .map((post) => (
              <Card post={post} key={post.id} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default Cards;
