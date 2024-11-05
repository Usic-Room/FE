"use client";

import { useState } from "react";
import EventIcon from "@/public/images/event.svg";
import ChartIcon from "@/public/images/chart.svg";
import FocusIcon from "@/public/images/focus.svg";
import JazzIcon from "@/public/images/jazz.svg";
import KPopIcon from "@/public/images/k-pop.svg";
import KoreanMusicIcon from "@/public/images/korean-music.svg";
import PopIcon from "@/public/images/pop.svg";
import RnBIcon from "@/public/images/rnb.svg";
import SummerIcon from "@/public/images/summer.svg";
import LatestSongIcon from "@/public/images/latest-song.svg";

interface GenreCardProps {
  title: string;
  Image: React.ElementType;
  bgColor: string;
}

const GenreCard = ({ title, Image, bgColor }: GenreCardProps) => {
  return (
    <div
      className={`relative flex items-start justify-start w-full h-full min-w-[120px] min-h-[120px] sm:aspect-square overflow-hidden text-white rounded-xl ${bgColor}`}
    >
      <div className="absolute top-4 left-4 z-10 text-left text-lg font-semibold">
        {title}
      </div>
      <Image className="absolute right-[-16px] bottom-[-16px] w-28 h-28 transform rotate-[25deg] opacity-90" />
    </div>
  );
};

export default function SearchPage() {
  const genres = [
    { title: "이벤트", Image: EventIcon, bgColor: "bg-green-27856A" },
    { title: "최신 음악", Image: LatestSongIcon, bgColor: "bg-blue-283EA3" },
    { title: "팝", Image: PopIcon, bgColor: "bg-blue-1E3264" },
    { title: "차트", Image: ChartIcon, bgColor: "bg-purple-8D67AB" },
    { title: "집중", Image: FocusIcon, bgColor: "bg-red-E8115B" },
    { title: "R&B", Image: RnBIcon, bgColor: "bg-purple-8D67AB" },
    { title: "가요", Image: KoreanMusicIcon, bgColor: "bg-blue-7358FF" },
    { title: "케이팝", Image: KPopIcon, bgColor: "bg-purple-8D67AB" },
    { title: "재즈", Image: JazzIcon, bgColor: "bg-pink-F037A5" },
    { title: "여름", Image: SummerIcon, bgColor: "bg-blue-9CF0E1" },
  ];

  return (
    <div className="flex flex-col h-full w-full bg-black-121212 text-white pl-2">
      <h1 className="text-xl font-bold mb-4 mt-10">모두 둘러보기</h1>
      <div className="">
        <div
          style={{ gap: "2rem 1rem" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto"
        >
          {genres.map((genre) => (
            <GenreCard
              key={genre.title}
              title={genre.title}
              Image={genre.Image}
              bgColor={genre.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
