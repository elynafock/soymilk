import React from "react";
import ShareIcon from "./ShareIcon";

const ShareLink = () => {
  return (
    <div className="flex-row flex items-center gap-2">
      <ShareIcon />
      <button className="text-gray-500"> Share Link</button>
    </div>
  );
};

export default ShareLink;
