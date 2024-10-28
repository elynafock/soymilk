import React from "react";
import Search from "./Search";
import Login, { User } from "./Login";
import ShareLink from "./ShareLink";
import Image from "next/image";

type Props = {
  user: User | null;
};

const Navigation = (props: Props) => {
  return (
    <div className="flex flex-row px-6 py-2 justify-between w-full bg-gray-700 gap-4 items-center">
      <Image
        src={"/logo_dark.png"}
        alt={"Logo"}
        width={160}
        height={50}
        className="h-full"
      ></Image>
      <Search />
      <div className="gap-6 flex">
        <Login user={props.user} />
      </div>
    </div>
  );
};

export default Navigation;
