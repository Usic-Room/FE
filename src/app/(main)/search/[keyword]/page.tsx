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
}

function SearchFilter({ filterList }: searchFilterProps) {
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
          //<Link href={`${}/${filterLink[filter]}`}>
          <FilterButton key={filter} label={filter} />
          //</Link>
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
      <h2 className="text-2xl font-bold mb-4">곡</h2>
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
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  // Memoize the debounced function using useMemo
  const debouncedSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        setIsLoading(true); // 검색 시작 시 로딩 상태 활성화
        try {
          const result = await fetchSearchResults(query);
          setSearchResult(result!.response); //TODO: ! is not safe
        } catch (error) {
          console.error("검색 중 에러 발생:", error);
          // 에러 상태를 관리하려면 별도의 상태 추가 가능
        } finally {
          setIsLoading(false); // 검색 완료 시 로딩 상태 비활성화
        }
      }, 500),
    [] // Empty dependency array since setState functions are stable
  );

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
    // Cleanup on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  return (
    <div className="flex flex-col h-full bg-black-121212 text-white">
      {isLoading ? ( // 로딩 상태에 따라 조건부 렌더링
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : typeof searchResult === "undefined" || !searchResult ? (
        //<SearchResultNotFound />
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <>
          <SearchFilter filterList={searchResult.filterList} />
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
      )}
    </div>
  );
}

export default function SearchResultPage() {
  return <SearchContent />;
}
