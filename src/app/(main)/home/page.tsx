import { Metadata } from "next";
import { TopArtists } from "@/components/artist/artistInfo";

export const metadata: Metadata = {
  title: "Musicroom",
};

export default function Home() {
  return (
    <div>
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
