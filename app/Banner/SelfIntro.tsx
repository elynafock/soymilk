import Image from "next/image";
import React from "react";

const user = {
  imageUrl: "",
  fullName: "Elyna Fock",
  description:
    "I'm a recent Software Engineering graduate. Along my journey, I discovered a passion for UI/UX design, and as I delved deeper, I found myself drawn to digital illustration as well.Hence, I combined all my knowledge to create this online gallery, a space to showcase and collect my artwork.",
};

const SelfIntro = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-6 w-full">
      <div className="rounded-full">
        <Image
          src={"/profile.jpg"}
          width={160}
          height={160}
          className="w-40 h-40 rounded-full object-cover"
          alt={"Profile Picture"}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-[40px]">{user.fullName}</h1>
        <h2 className="  line-clamp-3 text-[#A1A0A0] pt-4">
          {user.description}
        </h2>
      </div>
    </div>
  );
};
// text-2xl text-[#A1A0A0] w-[493px] truncate
export default SelfIntro;
