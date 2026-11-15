import React from "react";

const date = new Date();
const year = date.getFullYear();

const index = () => {
  return (
    <div className="bg-gray-700 text-white flex justify-center pb-6 pt-22">
      Copyright © {year} Un Poco Loco. All rights reserved.
    </div>
  );
};
export default index;
