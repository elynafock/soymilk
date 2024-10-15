import Image from "next/image";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Masonry, { Post } from "./Masonry";
import { createClient } from "@/utils/supabase/server";
import Footer from "./Footer";
import NewArtwork from "./NewArtwork";

export default async function Home() {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from("posts").select(`
    *,
    img:images(*)
    `);
  // console.log(posts);

  return (
    <main className="w-full">
      {/* className="flex min-h-screen flex-col items-center justify-between p-24" */}
      <Navigation />
      <div className="flex flex-col items-center pt-16 	">
        <div className="w-full max-w-screen-lg gap-16 flex flex-col items-stretch">
          <Banner />

          <div className="w-full flex justify-center	">
            <NewArtwork />
          </div>

          <Masonry posts={posts as Post[]} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
