import { Metadata } from "next";

import { MainTopArtistsSC } from "@/components/(main)/serverComponents/MainTopArtistsSC";

export const metadata: Metadata = {
  title: "Musicroom",
};

import { headers } from "next/headers";

export default async function Home() {
  const isMobileUser = headers().get("x-is-mobile-user") === "true";
  console.log("isMobileUser: ", isMobileUser);

  return (
    <div className="overflow-y-scroll mb-12 scrollbar-hide">
      <p className="font-lg font-bold">인기 아티스트</p>
      <MainTopArtistsSC />
      <p className="font-lg font-bold">인기 아티스트</p>
      <MainTopArtistsSC />
      <p className="font-lg font-bold">인기 아티스트</p>
      <MainTopArtistsSC />
      <p className="font-lg font-bold">인기 아티스트</p>
      <MainTopArtistsSC />
      {/* <TopAlbums /> */}
    </div>
  );
}
