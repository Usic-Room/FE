"use client";

import { SearchResultFilterSkeletonCC } from "@/components/(main)/clientComponents/SearchResultFilterSkeletonCC";
import { SearchResultSkeletonCC } from "@/components/(main)/clientComponents/SearchResultSkeletonCC";

import { SearchResultFilterCC } from "@/components/(main)/clientComponents/SearchResultFilterCC";
import { SearchResultEventsSectionCC } from "@/components/(main)/clientComponents/SearchResultEventsSectionCC";
import { SearchResultSongsSectionCC } from "@/components/(main)/clientComponents/SearchResultSongsSectionCC";
import { SearchResultPlaylistsSectionCC } from "@/components/(main)/clientComponents/SearchResultPlaylistsSectionCC";
import { SearchResultGenresSectionCC } from "@/components/(main)/clientComponents/SearchResultGenresSectionCC";
import { SearchResultAlbumsSectionCC } from "@/components/(main)/clientComponents/SearchResultAlbumsSectionCC";
import { SearchResultProfilesSectionCC } from "@/components/(main)/clientComponents/SearchResultProfilesSectionCC";

import { useSearchResultContents } from "@/hooks/useSearchResultContents";

export function SearchResultForm() {
  const { searchResult, isLoading, query } = useSearchResultContents();

  return (
    <>
      {isLoading ? (
        <>
          <SearchResultFilterSkeletonCC />
          <div className="flex-grow overflow-y-auto scrollbar-hide p-4">
            <SearchResultSkeletonCC />
            <SearchResultSkeletonCC />
            <SearchResultSkeletonCC />
            <SearchResultSkeletonCC />
            <SearchResultSkeletonCC />
            <SearchResultSkeletonCC />
          </div>
        </>
      ) : searchResult ? (
        <>
          <SearchResultFilterCC
            filterList={searchResult.filterList}
            searchQuery={query}
          />
          <div className="flex-grow overflow-y-auto scrollbar-hide p-4">
            <SearchResultEventsSectionCC events={searchResult.events} />
            <SearchResultSongsSectionCC songs={searchResult.songs} />
            <SearchResultPlaylistsSectionCC
              playlists={searchResult.playlists}
            />
            <SearchResultGenresSectionCC genres={searchResult.genres} />
            <SearchResultAlbumsSectionCC albums={searchResult.albums} />
            <SearchResultProfilesSectionCC profiles={searchResult.profiles} />
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>No results found.</p>
        </div>
      )}
    </>
  );
}
