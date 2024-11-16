"use client";

import { SearchResultSectionSkeletonForm } from "@/components/(main)/clientComponents/SearchResultSectionSkeletonForm";
import { SearchResultSectionForm } from "@/components/(main)/clientComponents/SearchResultSectionForm";

import { useSearchResultContents } from "@/hooks/useSearchResultContents";

export default function SearchResultPage() {
  const { searchResult, isLoading, query } = useSearchResultContents();

  return (
    <div className="flex flex-col h-full bg-black-121212 text-white">
      {isLoading ? (
        <SearchResultSectionSkeletonForm />
      ) : searchResult ? (
        <SearchResultSectionForm searchResult={searchResult} query={query} />
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
}
