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
  Icon: React.ElementType;
}

const GenreCard = ({ title, Icon }: GenreCardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-32 sm:h-52 bg-gray-700 rounded-md overflow-hidden text-white p-2">
      <Icon className="relative inset-0 w-full h-full object-cover opacity-80" />
      <div className="relative z-10 text-center text-lg font-semibold">
        {title}
      </div>
    </div>
  );
};

export default function SearchPage() {
  const genres = [
    { title: "이벤트", Icon: EventIcon },
    { title: "최신 음악", Icon: LatestSongIcon },
    { title: "팝", Icon: PopIcon },
    { title: "차트", Icon: ChartIcon },
    { title: "집중", Icon: FocusIcon },
    { title: "R&B", Icon: RnBIcon },
    { title: "가요", Icon: KoreanMusicIcon },
    { title: "케이팝", Icon: KPopIcon },
    { title: "재즈", Icon: JazzIcon },
    { title: "여름", Icon: SummerIcon },
  ];

  return (
    <div className="flex flex-col h-full bg-black-121212 text-white p-4">
      <h1 className="text-xl font-bold mb-4">장르 리스트</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {genres.map((genre) => (
          <GenreCard key={genre.title} title={genre.title} Icon={genre.Icon} />
        ))}
      </div>
    </div>
  );
}
