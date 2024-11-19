"use client";
import Link from "next/link";

import { useIsLogin } from "@/app/_hooks/useIsLogin";
import { useIsSearchPath, useSearchResult } from "@/app/_hooks/useSearch";

//import { NavLogo } from "@/app/_components/(main)/home/serverComponents";

import SearchButtonImage from "@/public/images/searchButton.svg";

export function MainSearchBar() {
  const searchUrl = process.env.NEXT_PUBLIC_MAIN_SEARCH || "/error";

  const isSearchPath = useIsSearchPath();

  return (
    <div className="grow w-full ml-4">
      <div className="relative max-w-md mx-auto px-10 md:px-8 lg:px-5">
        {isSearchPath ? (
          <MainSearchInputBar />
        ) : (
          <Link href={searchUrl}>
            <MainSearchInputBar />
          </Link>
        )}
      </div>
    </div>
  );
}

function MainSearchInputBar() {
  const { query, handleInputChange, handleClearInput } = useSearchResult();

  return (
    <div className="relative w-full">
      <MainSearchButton />
      <input
        type="search"
        id="default-search"
        value={query}
        onChange={handleInputChange}
        className="peer block w-full p-4 pl-12 pr-12 text-m text-white border rounded-full border-black bg-[#1F1F1F] outline-none focus:ring-2 focus:ring-white focus:border-white"
        placeholder="어떤 음악을 듣고 싶으세요?"
      />

      {/* Clear (x) 버튼 */}
      {query && (
        <button
          type="button"
          onClick={handleClearInput}
          className="absolute inset-y-0 right-4 flex items-center text-2xl  text-gray-878787 hover:text-white "
        >
          &#x2715;
        </button>
      )}
    </div>
  );
}

function MainSearchButton() {
  const { handleSearchButtonClicked } = useSearchResult();

  return (
    <button
      type="button"
      onClick={handleSearchButtonClicked}
      className="absolute inset-y-0 left-4 flex items-center text-gray-500"
    >
      <SearchButtonImage className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
