import React from "react";
import Search from "./Search";
import Login from "./Login";
import ShareLink from "./ShareLink";

const Navigation = () => {
  return (
    <div className="flex flex-row px-6 py-2 justify-between w-full bg-gray-700 gap-4">
      <div className="w-28 h-12 bg-slate-500">Logo</div>
      <Search />
      <div className="gap-6 flex">
        <ShareLink />
        <Login />
      </div>
    </div>
  );
};

export default Navigation;
