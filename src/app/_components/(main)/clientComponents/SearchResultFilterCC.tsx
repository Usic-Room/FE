import Link from "next/link";

import { searchResultFilterTypes } from "@/types/searchResultDto";

interface SearchResultFilterCCProps {
  filterList: searchResultFilterTypes[];
  searchQuery: string;
}

export function SearchResultFilterCC({
  filterList,
  searchQuery,
}: SearchResultFilterCCProps) {
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
            key={filter}
            href={`${process.env.NEXT_PUBLIC_MAIN_SEARCH}/${searchQuery}/${filterLink[filter]}`}
          >
            <button className="px-3 py-2 rounded-full bg-gray-800 text-white">
              {filter}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
