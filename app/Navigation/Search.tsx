"use client";
import React from "react";
import SearchIcon from "./SearchIcon";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();

  return (
    <div className="w-[688px] h-12 bg-gray-600 rounded-full  px-4 flex items-center gap-4">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search.."
        className="outline-none bg-transparent w-full"
        onChange={(event) => router.replace(`?q=${event.target.value}`)}
      />
    </div>
  );
};

export default Search;
