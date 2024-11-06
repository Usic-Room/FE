"use client";

import { create } from "zustand";
import useSWR from "swr";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

//import { useSearchParams } from "next/navigation";
import { searchRequestByParams } from "@/app/(main)/home/api/router";

//export function useSearchByParams() {
//  const searchParams = useSearchParams();
//  const searchQuery = searchParams.get("search");

//  return (
//    <div className="flex-grow overflow-y-auto scrollbar-hide p-4 mb-12">
//      {searchParams.get("search") ? (
//        <SearchResults searchQuery={searchQuery} />
//      ) : (
//        <>
//          {/* Grid for "상위결과" and "곡" Section */}
//          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//            {/* 상위결과 Section */}
//            <SearchTopResultSection />

//            {/* 곡 Section */}
//          </div>

//          {/* 이벤트 Section */}
//          <div className="mt-8">
//            <h2 className="text-2xl font-bold mb-4">이벤트</h2>
//            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//              {[1, 2, 3].map((event) => (
//                <EventCard key={event} />
//              ))}
//            </div>
//          </div>
//        </>
//      )}
//    </div>
//  );
//}

//interface SearchStore {
//  query: string;
//  setQuery: (newQuery: string) => void;
//  search: () => void;
//}

//export const useSearchStore = create<SearchStore>((set) => {
//  const router = useRouter(); // Use router only within a function, not directly in the Zustand setup
//  const searchUrl = process.env.NEXT_PUBLIC_HOME_SEARCH;

//  return {
//    query: "",
//    setQuery: (newQuery) => set({ query: newQuery }),
//    search: () => {
//      set((state) => {
//        if (state.query.trim()) {
//          router.push(`${searchUrl}/${encodeURIComponent(state.query.trim())}`);
//        }
//        return state;
//      });
//    },
//  };
//});

interface SearchStore {
  query: string;
  setQuery: (newQuery: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  setQuery: (newQuery) => set({ query: newQuery }),
}));

export function useSearchResult() {
  const router = useRouter();
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);
  const searchUrl = process.env.NEXT_PUBLIC_HOME_SEARCH;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    console.log("newQuery: " + newQuery);
    setQuery(newQuery); // Update the query in Zustand store
    router.push(`${searchUrl}/${encodeURIComponent(newQuery.trim())}`);
  };

  const handleSearchButtonClicked = () => {
    console.log("query: " + query);
    router.push(`${searchUrl}/${encodeURIComponent(query.trim())}`);
  };

  return {
    query,
    handleInputChange,
    handleSearchButtonClicked,
  };
}

// Custom hook to manage and track the current path
export function useIsSearchPath() {
  const pathname = usePathname();
  const searchUrl = process.env.NEXT_PUBLIC_HOME_SEARCH;

  const isSearchPath = pathname && pathname.startsWith(`/home/search`);
  console.log("pathname: " + pathname);
  console.log("searchUrl: " + searchUrl);

  return isSearchPath;
}
