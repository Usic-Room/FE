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

interface GenreCardProps {
  title: string;
  Image: React.ElementType;
  bgColor: string;
}

export function GenreRecommendTitle() {
  return <h1 className="text-xl font-bold mb-4 mt-10">모두 둘러보기</h1>;
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

export function GenreCardSection() {
  const genres = [
    { title: "이벤트", Image: EventImage, bgColor: "bg-green-27856A" },
    { title: "최신 음악", Image: LatestSongImage, bgColor: "bg-blue-283EA3" },
    { title: "팝", Image: PopImage, bgColor: "bg-blue-1E3264" },
    { title: "차트", Image: ChartImage, bgColor: "bg-purple-8D67AB" },
    { title: "집중", Image: FocusImage, bgColor: "bg-red-E8115B" },
    { title: "R&B", Image: RnBImage, bgColor: "bg-purple-8D67AB" },
    { title: "가요", Image: KoreanMusicImage, bgColor: "bg-blue-7358FF" },
    { title: "케이팝", Image: KPopImage, bgColor: "bg-purple-8D67AB" },
    { title: "재즈", Image: JazzImage, bgColor: "bg-pink-F037A5" },
    { title: "여름", Image: SummerImage, bgColor: "bg-blue-9CF0E1" },
  ];

  return (
    <div>
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
  );
}
