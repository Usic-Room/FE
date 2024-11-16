import React from "react";
import { Metadata } from "next";
import { SearchRecommendTitleSC } from "@/components/(main)/serverComponents/SearchRecommendTitleSC";
import { SearchRecommendSectionSC } from "@/components/(main)/serverComponents/SearchRecommendSectionSC";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <div className="flex flex-col w-full h-screen bg-black-121212 text-white pl-2 overflow-y-scroll mb-12 scrollbar-hide">
      <SearchRecommendTitleSC />
      <SearchRecommendSectionSC />
    </div>
  );
}
