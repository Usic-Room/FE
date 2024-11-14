import { Metadata } from "next";
import { TopArtists } from "@/app/_components/artist/artistInfo";

export const metadata: Metadata = {
  title: "Musicroom",
};

import { headers } from "next/headers";

export default async function Home() {
  const isMobileUser = headers().get("x-is-mobile-user") === "true";
  console.log("isMobileUser: ", isMobileUser);

  return (
    <div className="overflow-y-scroll mb-12">
      <p className="font-lg font-bold">인기 아티스트</p>
      <TopArtists />
      <p className="font-lg font-bold">인기 아티스트</p>
      <TopArtists />
      <p className="font-lg font-bold">인기 아티스트</p>
      <TopArtists />
      <p className="font-lg font-bold">인기 아티스트</p>
      <TopArtists />
      {/* <TopAlbums /> */}
    </div>
  );
}
