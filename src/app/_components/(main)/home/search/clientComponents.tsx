"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import superNaturalImage from "@/public/images/supernatural.jpg";

export function SearchResultNotFound() {
  const searchParams = useSearchParams();

  return <p>No results found for &quot;{searchParams.get("search")}&quot;.</p>;
}

function SearchContent() {
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
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      fetchSearchResults(searchQuery);
    } else {
      setResults([]);
    }
  }, [searchParams]);

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
      <div className="sm:hidden absolute z-30">{/* <MobileSearchBar /> */}</div>
      {/* Sticky Filter Button Section */}

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto scrollbar-hide p-4 mb-12">
        {searchParams.get("search") ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Search Results for: {searchParams.get("search")}
            </h2>
            {results.length > 0 ? (
              <SongList songs={results} />
            ) : (
              <SearchResultNotFound />
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
