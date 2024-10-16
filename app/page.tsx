import Image from "next/image";
import Navigation from "./Navigation";
import Banner from "./Banner";
import Masonry, { Post } from "./Masonry";
import { createClient } from "@/utils/supabase/server";
import Footer from "./Footer";
import NewArtwork from "./NewArtwork";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from("posts").select(`
    *,
    img:images(*)
    `);
  const { data } = await supabase.auth.getUser();
  console.log(searchParams);

  return (
    <main className="w-full">
      {/* className="flex min-h-screen flex-col items-center justify-between p-24" */}
      <Navigation user={data.user} />
      <div className="flex flex-col items-center pt-16 	">
        <div className="w-full max-w-screen-lg gap-16 flex flex-col items-stretch">
          <Banner />
          {data.user ? (
            <div className="w-full flex justify-center	">
              <NewArtwork />
            </div>
          ) : null}

          <Masonry
            posts={(posts as Post[]).filter((post) =>
              searchParams.q
                ? post.title
                    ?.toLowerCase()
                    ?.includes(searchParams.q.toLowerCase())
                : true
            )}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
