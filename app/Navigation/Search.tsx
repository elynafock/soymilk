import React from "react";
import SearchIcon from "./SearchIcon";

const Search = () => {
  return (
    <div className="w-[688px] h-12 bg-gray-600 rounded-full  px-4 flex items-center gap-4">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search.."
        className="outline-none bg-transparent"
      />
    </div>
  );
};

export default Search;
