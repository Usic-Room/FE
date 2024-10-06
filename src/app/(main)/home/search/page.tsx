"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import superNaturalImage from "@/public/images/supernatural.jpg";

// TODO: Filter Button 타입화
export default function Search() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<
    {
      id: number;
      title: string;
      artist: string;
      album: string;
      duration: string;
    }[]
  >([]);

  // Simulate a search function, fetching or filtering based on the searchQuery
  useEffect(() => {
    if (searchParams.get("search")) {
      fetchSearchResults(searchParams.get("search") as string);
    } else {
      setResults([]);
    }
  }, [searchParams.get("search")]);

  const fetchSearchResults = (query: string) => {
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

    const filteredResults = dummyResults.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults.slice(0, 4)); // Limit to 4 results
  };

  return (
    <div className="flex flex-col h-full bg-black-121212 text-white">
      {/* Sticky Filter Button Section */}
      <div className="sticky top-0 z-10 bg-black-121212 py-4">
        <div className="flex space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {["모두", "곡", "아티스트", "앨범", "이벤트", "플레이리스트"].map(
            (filter) => (
              <FilterButton key={filter} label={filter} />
            )
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto scrollbar-hide p-4">
        {searchParams.get("search") ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Search Results for: {searchParams.get("search")}
            </h2>
            {results.length > 0 ? (
              <SongList songs={results} />
            ) : (
              <p>No results found for "{searchParams.get("search")}".</p>
            )}
          </>
        ) : (
          <>
            {/* Grid for "상위결과" and "곡" Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* 상위결과 Section */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-4">상위결과</h2>
                <div className="flex-col items-center bg-gray-900 p-4 rounded-lg max-h-[300px] overflow-hidden">
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

              {/* 곡 Section */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">곡</h2>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <SongList songs={dummyResults} />
                </div>
              </div>
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
          </>
        )}
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

// Song List Component (Updated layout for song list)
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
      {songs.map((song, index) => (
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
          <p className="text-gray-400">{song.duration}</p>
        </div>
      ))}
    </div>
  );
}

// Event Card Component
function EventCard() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <Image
        src="/path/to/event-image.jpg"
        alt="Event"
        width={150}
        height={150}
        className="rounded"
      />
      <h3 className="mt-2 text-lg font-bold">Daily Mix 1</h3>
    </div>
  );
}

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
