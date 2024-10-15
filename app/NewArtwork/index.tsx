import React from "react";
import NewIcon from "./NewIcon";

const index = () => {
  return (
    <button className="flex flex-col gap-6 items-center bg-gray-600 rounded-3xl py-6 w-[296px]">
      <div>New Artwork</div>
      <NewIcon />
    </button>
  );
};

export default index;
