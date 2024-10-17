"use client";
import React, { useState } from "react";
import NewIcon from "./NewIcon";
import Image from "next/image";

const index = () => {
  const [file, setFile] = useState<File | null>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
    (document.getElementById("artwork") as HTMLDialogElement).showModal();
  };

  const handleUpload = async () => {
    if (file) {
    }
  };

  return (
    <label className="flex flex-col gap-6 items-center bg-gray-600 rounded-3xl py-6 w-[296px] cursor-pointer">
      <input
        type="file"
        className="hidden"
        accept=".png,.jpeg,.jpg,.webp"
        onChange={handleFileChange}
      />
      <div>New Artwork</div>
      <NewIcon />

      <dialog id="artwork" className="modal">
        <div className="modal-box">
          {file ? (
            <Image src={URL.createObjectURL(file)} alt={""} fill></Image>
          ) : null}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </label>
  );
};

export default index;
