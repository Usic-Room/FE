import React from "react";
import { Metadata } from "next";
import {
  GenreRecommendTitle,
  GenreCardSection,
} from "@/components/(main)/home/search/serverComponents";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <div className="flex flex-col w-full h-screen bg-black-121212 text-white pl-2 overflow-y-scroll mb-12 scrollbar-hide">
      <GenreRecommendTitle />
      <GenreCardSection />
    </div>
  );
}
