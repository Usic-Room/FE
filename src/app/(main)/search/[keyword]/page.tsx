"use client";
import Image from "next/image";
import Link from "next/link";

//import { headers } from "next/headers";

import superNaturalImage from "@/public/images/superNatural.jpg";
import { Suspense, useEffect, useState } from "react";

import { searchRequestByQuery } from "@/app/(main)/search/api/router";
import { searchResultDto } from "@/app/_types/searchResultDto";

import { useEscapePathname } from "@/hooks/useSearch";

import { searchResultFilterTypes } from "@/types/searchResultDto";

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

async function SearchContent() {
  const { query, decodedPathname } = useEscapePathname();
  const searchResult: searchResultDto = await searchRequestByQuery(query);
  console.log(searchResult);

  return (
    <div className="flex flex-col h-full bg-black-121212 text-white">
      {typeof searchResult === undefined || !searchResult ? (
        <SearchResultNotFound />
      ) : (
        <>
          <SearchFilter filterList={searchResult.filterList} />
          <div className="flex-grow overflow-y-auto scrollbar-hide p-4 mb-12">
            {/* Grid for "상위결과" and "곡" Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 상위결과 Section */}
              <SearchTopResultSection />

              {/* 곡 Section */}
            </div>

            {/* 이벤트 Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">이벤트</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((event) => (
                  <EventCard key={event} />
                ))}
              </div>
            </div>

            {/* 곡 Section */}
            <SearchSongListSection />

            {/* 장르 Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">장르</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((genre) => (
                  <div
                    key={genre}
                    className="bg-gray-800 p-4 rounded-lg text-white"
                  >
                    {genre}
                  </div>
                ))}
              </div>
            </div>

            {/* 앨범 Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">앨범</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((album) => (
                  <div
                    key={album}
                    className="bg-gray-800 p-4 rounded-lg text-white"
                  >
                    {album}
                  </div>
                ))}
              </div>
            </div>

            {/* 프로필 Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">프로필</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((profile) => (
                  <div
                    key={profile}
                    className="bg-gray-800 p-4 rounded-lg text-white"
                  >
                    {profile}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function SearchResultPage() {
  //const headersList = headers();
  //const referer = headersList.get("referer") || "";
  //const searchPath = "/home/search";
  //const isSearchPath = referer.includes(searchPath);

  //console.log("referer: ", referer);
  //console.log("searchPath: ", searchPath);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
