"use client";

import React from "react";
import Card from "./Card";
import useMediaQuery from "../hooks";

export type Post = {
  id: number;
  title: string | null;
  img?: {
    url: string | null;
    width: number;
    height: number;
  };
  created_at: string;
};

type Props = {
  posts: Post[];
};

const Cards = (props: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const columns = isDesktop ? 3 : 2;

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {[...Array(columns)].map((_, i) => (
        <div className="flex flex-col gap-4" key={i}>
          {props.posts
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
