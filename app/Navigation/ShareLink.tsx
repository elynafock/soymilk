import React from "react";
import ShareIcon from "./ShareIcon";

const ShareLink = () => {
  return (
    <button className="flex-row flex items-center gap-2">
      <ShareIcon />
      <div className="text-gray-500"> Share Link</div>
    </button>
  );
};

export default ShareLink;
