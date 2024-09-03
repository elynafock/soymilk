import React from "react";
import Search from "./Search";
import Login from "./Login";

const Navigation = () => {
  return (
    <div className="flex flex-row px-6 py-2 justify-between w-full bg-red-50">
      <div className="w-28 h-12 bg-slate-500">Logo</div>
      <Search />
      <Login />
    </div>
  );
};
export default Navigation;
