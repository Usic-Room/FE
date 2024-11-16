"use client";

import { GenreResultDto, GenreResultTypes } from "@/app/_types/genreMusicDto";
import Link from "next/link";
import Image from "next/image";

interface GenreMusicCardListCCProps {
  info: GenreResultTypes;
  keyword: keyof GenreResultDto;
}

export function GenreMusicCardListCC({
  info,
  keyword,
}: GenreMusicCardListCCProps) {
  const baseUrl = process.env.NEXT_PUBLIC_MAIN || "";

  return (
    <Link
      href={`${baseUrl}/${keyword.includes("Songs") ? "songs" : keyword}?id=${
        info.id
      }`}
      className={`relative flex items-start justify-start w-full h-full min-w-[120px] min-h-[120px] sm:aspect-square overflow-hidden text-white rounded-xl`}
    >
      <Image
        src={info.imageUrl}
        alt="genreCardImage"
        width={300}
        height={300}
      />
    </Link>
  );
}
