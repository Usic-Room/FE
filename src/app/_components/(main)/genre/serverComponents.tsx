import "server-only";
import { genreMusicInfoApi } from "@/main/genre/api/router";
import { GenreResultDto, GenreResultTypes } from "@/app/_types/genreMusicDto";
import Link from "next/link";

import { GenreMusicCardListCC } from "@/components/(main)/genre/clientComponents";

interface GenreMusicCardSectionProps {
  router: string;
  genreMusicResultType: {
    description: string;
    key: keyof GenreResultDto;
  }[];
}

export async function GenreMusicCardSection({
  router,
  genreMusicResultType,
}: GenreMusicCardSectionProps) {
  const genreMusicInfos: GenreResultDto = await genreMusicInfoApi({
    genre: router,
  });

  const genreResultDetailUrl = process.env.NEXT_PUBLIC_MAIN_GENRE_DETAIL || "";

  return (
    <div>
      {genreMusicResultType.map(({ description, key }, index) => (
        <div key={index} className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <p className="font-lg font-bold">{description}</p>
            <Link href={`${genreResultDetailUrl}/${router}?filter=${key}`}>
              <button className="text-white font-bold hover:underline">
                모두 보기
              </button>
            </Link>
          </div>
          <div
            style={{ gap: "2rem 1rem" }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto h-full mb-12 scrollbar-hide p-4"
          >
            {genreMusicInfos[key].slice(0, 5).map((info) => (
              <GenreMusicCardListCC info={info} keyword={key} key={info.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
