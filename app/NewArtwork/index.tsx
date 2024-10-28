"use client";
import React, { useState } from "react";
import NewIcon from "./NewIcon";
import NextImage from "next/image";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const supabase = createClient();

const Index = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState("");
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const extension = file?.name.split(".").pop();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setImageURL(window.URL.createObjectURL(selectedFile));

      // Create an Image object to get the dimensions
      const img: HTMLImageElement = new Image();
      img.src = URL.createObjectURL(selectedFile);

      img.onload = () => {
        setImageDimensions({
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };

      (document.getElementById("artwork") as HTMLDialogElement).showModal();
    }
  };

  const handleUpload:
    | React.FormEventHandler<HTMLFormElement>
    | undefined = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Please select an image");
      return;
    }
    // const { data, error } = await supabase.storage.listBuckets();
    setLoading(true);

    const uploadImageResult = await supabase.storage

      .from("posts")
      .upload(`public/${uuidv4()}.${extension}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadImageResult.error) {
      alert(uploadImageResult.error.message);
      setLoading(false);
      return;
    }
    const insertImageResult = await supabase
      .from("images")
      .insert({
        url: `https://oongvcbebqpcxrpntpok.supabase.co/storage/v1/object/public/${uploadImageResult.data.fullPath}`,
        width: imageDimensions.width,
        height: imageDimensions.height,
      })
      .select("*");
    console.log(insertImageResult.data);
    if (insertImageResult.error) {
      alert(insertImageResult.error.message);
      setLoading(false);
      return;
    }
    const insertPostResult = await supabase.from("posts").insert({
      title: title,
      image_id: (insertImageResult.data as any[])?.[0].id,
    });
    if (insertPostResult.error) {
      alert(insertPostResult.error.message);
      setLoading(false);
      return;
    }
    alert("Successfully Uploaded!");
    (document.getElementById("artwork") as HTMLDialogElement).close();
    setLoading(false);
    router.refresh();
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
        <div className="modal-box bg-gray-700">
          <form onSubmit={handleUpload} className="flex flex-col gap-6">
            {file ? (
              <NextImage
                src={imageURL} // Using th e object URL for the image source
                alt=""
                width={imageDimensions.width} // Use dynamic width
                height={imageDimensions.height} // Use dynamic height
                className="rounded-2xl"
              />
            ) : null}
            <input
              type="text"
              className="w-full bg-gray-600 rounded-lg py-2 px-2 outline-none"
              value={title}
              placeholder="Please Insert Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              disabled={loading}
            />
            <div className="grid justify-items-end	">
              <button
                type="submit"
                disabled={loading}
                className="bg-gray-600 px-6 py-2 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </label>
  );
};

export default Index;
