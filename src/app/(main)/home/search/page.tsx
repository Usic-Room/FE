import React from "react";
import { Metadata } from "next";
import {
  GenreRecommendTitle,
  GenreCardSection,
} from "@/components/(main)/home/search/serverComponents";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchGenreRecommendPage() {
  return (
    <div className="flex flex-col h-full w-full bg-black-121212 text-white pl-2">
      <GenreRecommendTitle />
      <GenreCardSection />
    </div>
  );
}
