import "server-only";

import EventImage from "@/public/images/event.svg";
import ChartImage from "@/public/images/chart.svg";
import FocusImage from "@/public/images/focus.svg";
import JazzImage from "@/public/images/jazz.svg";
import KPopImage from "@/public/images/k-pop.svg";
import KoreanMusicImage from "@/public/images/korean-music.svg";
import PopImage from "@/public/images/pop.svg";
import RnBImage from "@/public/images/rnb.svg";
import SummerImage from "@/public/images/summer.svg";
import LatestSongImage from "@/public/images/latest-song.svg";

import Link from "next/link";

interface GenreCardProps {
  title: string;
  enTitle: string;
  Image: React.ElementType;
  bgColor: string;
}

export function GenreRecommendTitle() {
  return <h1 className="text-xl font-bold mb-4 mt-10">모두 둘러보기</h1>;
}

const GenreCard = ({ title, enTitle, Image, bgColor }: GenreCardProps) => {
  return (
    <Link
      href={`${enTitle}`}
      className={`relative flex items-start justify-start w-full h-full min-w-[120px] min-h-[120px] sm:aspect-square overflow-hidden text-white rounded-xl ${bgColor} `}
    >
      <div className="absolute top-4 left-4 z-10 text-left text-lg font-semibold">
        {title}
      </div>
      <Image
        className="absolute right-[-16px] bottom-[-16px] w-28 h-28 transform rotate-[25deg] opacity-90"
        alt="genreCardImage"
      />
    </Link>
  );
};

export function GenreCardSection() {
  const genres = [
    {
      title: "이벤트",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/event`,
      Image: EventImage,
      bgColor: "bg-green-27856A",
    },
    {
      title: "최신 음악",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/new-release`,
      Image: LatestSongImage,
      bgColor: "bg-blue-283EA3",
    },
    {
      title: "팝",
      Image: PopImage,
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/pop`,
      bgColor: "bg-blue-1E3264",
    },
    {
      title: "차트",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/chart`,
      Image: ChartImage,
      bgColor: "bg-purple-8D67AB",
    },
    {
      title: "집중",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/focus`,
      Image: FocusImage,
      bgColor: "bg-red-E8115B",
    },
    {
      title: "R&B",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/rnb`,
      Image: RnBImage,
      bgColor: "bg-purple-8D67AB",
    },
    {
      title: "가요",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/korean-music`,
      Image: KoreanMusicImage,
      bgColor: "bg-blue-7358FF",
    },
    {
      title: "케이팝",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/k-pop`,
      Image: KPopImage,
      bgColor: "bg-purple-8D67AB",
    },
    {
      title: "재즈",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/jazz`,
      Image: JazzImage,
      bgColor: "bg-blue-1E3264",
    },
    {
      title: "여름",
      enTitle: `${process.env.NEXT_PUBLIC_MAIN_GENRE}/summer`,
      Image: SummerImage,
      bgColor: "bg-blue-9CF0E1",
    },
  ];

  return (
    <div>
      <div
        style={{ gap: "2rem 1rem" }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto h-full mb-12 scrollbar-hide p-4"
      >
        {genres.map((genre) => (
          <GenreCard
            key={genre.title}
            title={genre.title}
            enTitle={genre.enTitle}
            Image={genre.Image}
            bgColor={genre.bgColor}
          />
        ))}
      </div>
    </div>
  );
}
