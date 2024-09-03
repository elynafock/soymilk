import Image from "next/image";
import Navigation from "./Navigation";
import Banner from "./Banner";

export default function Home() {
  return (
    <main className="w-full">
      {/* className="flex min-h-screen flex-col items-center justify-between p-24" */}
      <Navigation />
      <Banner />
    </main>
  );
}
