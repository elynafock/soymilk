import React from "react";

const date = new Date();
const year = date.getFullYear();

const index = () => {
  return (
    <div className="text-gray-500 flex justify-center py-6 mt-16">
      Copyright © {year} Un Poco Loco. All rights reserved.
    </div>
  );
};
export default index;
