import { GenreResultDto } from "@/types/genreMusicDto";

import { GenreMusicCardSection } from "@/components/(main)/genre/serverComponents";

function GenreResultTitle() {
  return <h1 className="text-xl font-bold mb-4 mt-10">모두 둘러보기</h1>;
}

export default function genreResultPage() {
  //const router = await pathname();

  //TODO: 장르별로 라우팅을 어떻게 할지 고민해보기
  const router = "pop";

  const genreMusicResultType: {
    description: string;
    key: keyof GenreResultDto;
  }[] = [
    { description: "최신 장르 음악 베스트", key: "newSongs" },
    { description: "인기 장르 음악", key: "popularSongs" },
    { description: "인기 장르 아티스트", key: "artists" },
    { description: "인기 장르 앨범", key: "albums" },
    { description: "인기 장르 플레이리스트", key: "playlists" },
  ];

  return (
    <div className="overflow-y-scroll mb-12 scrollbar-hide">
      <GenreResultTitle />
      <GenreMusicCardSection
        router={router}
        genreMusicResultType={genreMusicResultType}
      />
    </div>
  );
}
