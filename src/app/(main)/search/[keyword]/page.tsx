"use client";
import Image from "next/image";
import Link from "next/link";

//import { headers } from "next/headers";

import superNaturalImage from "@/public/images/superNatural.jpg";
import { Suspense, useEffect, useState, useMemo } from "react";

import { searchRequestByQuery } from "@/app/(main)/search/api/router";
import { searchResultDto } from "@/app/_types/searchResultDto";

import { useEscapePathname } from "@/hooks/useSearch";

import { searchResultFilterTypes } from "@/types/searchResultDto";

import { debounce } from "lodash";

interface searchFilterProps {
  filterList: searchResultFilterTypes[];
  searchQuery: string;
}

function SearchFilterSkeleton() {
  return (
    <div className="sticky top-5 sm:top-0 z-10 bg-black-121212 py-4">
      <div className="flex space-x-2 overflow-x-auto whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="px-3 py-2 rounded-full bg-gray-700 animate-pulse"
            style={{ width: "80px", height: "32px" }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function SearchTopResultSectionSkeleton() {
  return (
    <div className="lg:col-span-1">
      <h2 className="text-2xl font-bold mb-4 animate-pulse bg-gray-700 h-6 w-1/3"></h2>
      <div className="flex-row items-center bg-gray-900 p-4 rounded-lg max-h-[300px] overflow-hidden animate-pulse">
        <div className="w-24 h-24 bg-gray-700 rounded"></div>
        <div className="ml-auto">
          <div className="bg-gray-700 h-6 w-32 mb-2 mt-2"></div>
          <div className="bg-gray-700 h-4 w-24"></div>
        </div>
      </div>
    </div>
  );
}

function SongListSkeleton() {
  return (
    <div className="flex flex-col space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between animate-pulse"
        >
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-700 rounded"></div>
            <div className="ml-4">
              <div className="bg-gray-700 h-4 w-24 mb-2"></div>
              <div className="bg-gray-700 h-3 w-16"></div>
            </div>
          </div>
          <div className="bg-gray-700 h-4 w-12 hidden md:block"></div>
        </div>
      ))}
    </div>
  );
}

function EventCardSkeleton() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg animate-pulse">
      <div className="w-full h-40 bg-gray-700 rounded"></div>
    </div>
  );
}

function SearchFilter({ filterList, searchQuery }: searchFilterProps) {
  const filterLink = {
    모두: "",
    이벤트: "events",
    곡: "songs",
    플레이리스트: "playlists",
    장르: "genres",
    앨범: "albums",
    프로필: "profiles",
  };

  return (
    <div className="sticky top-5 sm:top-0 z-10 bg-black-121212 py-4">
      <div className="flex space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {filterList.map((filter) => (
          <Link
            href={`${process.env.NEXT_PUBLIC_MAIN_SEARCH}/${searchQuery}/${filterLink[filter]}`}
          >
            <FilterButton key={filter} label={filter} />
          </Link>
        ))}
      </div>
    </div>
  );
}

// Filter Button Component
function FilterButton({ label }: { label: string }) {
  return (
    <button className="px-3 py-2 rounded-full bg-gray-800 text-white">
      {label}
    </button>
  );
}

// Event Card Component
function EventCard() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <Image
        src={superNaturalImage}
        alt="Event"
        width={150}
        height={150}
        className="rounded"
      />
    </div>
  );
}

function SearchTopResultSection() {
  return (
    <div className="lg:col-span-1">
      <h2 className="text-2xl font-bold mb-4">상위결과</h2>
      <div className="flex-row items-center bg-gray-900 p-4 rounded-lg max-h-[300px] overflow-hidden">
        <Image
          src={superNaturalImage}
          alt="Supernatural"
          width={100}
          height={100}
          className="rounded max-h-[100px] max-w-[100px] object-cover"
        />
        <div className="ml-auto ">
          <p className="text-xl font-bold">Supernatural</p>
          <p className="text-gray-400">곡 · NewJeans</p>
        </div>
      </div>
    </div>
  );
}

function SearchSongListSection() {
  // Dummy data for default song list
  const dummyResults = [
    {
      id: 1,
      title: "Supernatural",
      artist: "NewJeans",
      album: "Supernatural",
      duration: "3:14",
    },
    {
      id: 2,
      title: "How Sweet",
      artist: "NewJeans",
      album: "How Sweet",
      duration: "3:14",
    },
    {
      id: 3,
      title: "Ditto",
      artist: "NewJeans",
      album: "Ditto",
      duration: "3:14",
    },
    {
      id: 4,
      title: "OMG",
      artist: "NewJeans",
      album: "OMG",
      duration: "3:14",
    },
  ];

  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold mb-4 mt-2">곡</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <SongList songs={dummyResults} />
      </div>
    </div>
  );
}

function SongList({
  songs,
}: {
  songs: {
    id: number;
    title: string;
    artist: string;
    album: string;
    duration: string;
  }[];
}) {
  return (
    <div className="flex flex-col space-y-4">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={superNaturalImage}
              alt={song.title}
              width={50}
              height={50}
              className="rounded"
            />
            <div className="ml-4">
              <p className="text-lg font-bold">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
          </div>
          <p className="text-gray-400 hidden md:block">{song.duration}</p>
        </div>
      ))}
    </div>
  );
}

function SearchResultNotFound() {
  return <p>No results found;</p>;
}

async function fetchSearchResults(query: string) {
  if (!query) return null;
  return await searchRequestByQuery(query);
}

function SearchContent() {
  const { query } = useEscapePathname();
  const [searchResult, setSearchResult] = useState<searchResultDto | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true); // Initialize as true
  const [error, setError] = useState<string | null>(null); // Error state

  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        setIsLoading(true);
        try {
          const result = await fetchSearchResults(query);
          setSearchResult(result ? result.response : null);
          setError(null);
        } catch (error) {
          console.error("검색 중 에러 발생:", error);
          setSearchResult(null);
          setError("검색 중 오류가 발생했습니다.");
        } finally {
          setIsLoading(false);
        }
      }, 500),
    []
  );

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    } else {
      setIsLoading(false);
      setSearchResult(null);
    }
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  return (
    <div className="flex flex-col h-full bg-black-121212 text-white">
      {isLoading ? (
        <>
          {/* Skeleton UI */}
          <SearchFilterSkeleton />
          <div className="flex-grow overflow-y-auto scrollbar-hide p-4 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <SearchTopResultSectionSkeleton />
              {/* Add more skeletons as needed */}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 animate-pulse bg-gray-700 h-6 w-1/3"></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <EventCardSkeleton key={index} />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 animate-pulse bg-gray-700 h-6 w-1/3"></h2>
              <div className="bg-gray-900 p-4 rounded-lg">
                <SongListSkeleton />
              </div>
            </div>
          </div>
        </>
      ) : error ? (
        <div className="flex justify-center items-center h-full">
          <p>{error}</p>
        </div>
      ) : searchResult ? (
        /* Render actual search results */
        <>
          <SearchFilter
            filterList={searchResult.filterList}
            searchQuery={query}
          />
          <div className="flex-grow overflow-y-auto scrollbar-hide p-4 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <SearchTopResultSection />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">이벤트</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((event) => (
                  <EventCard key={event} />
                ))}
              </div>
            </div>
            <SearchSongListSection />
          </div>
        </>
      ) : (
        /* Handle no results or error */
        <div className="flex justify-center items-center h-full">
          <p>No results found.</p>
        </div>
      )}
    </div>
  );
}
export default function SearchResultPage() {
  return <SearchContent />;
}
