import { useState } from "react";
import { useRouter } from "next/navigation";

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

export function useSearchQuery(initialQuery: string = "") {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  console.log("searchUrl:", initialQuery);

  const handleSearch = () => {
    if (query.trim() !== "") {
      console.log("hello" + query);
      const requestUrl = `${initialQuery}/${encodeURIComponent(query)}`;
      console.log(initialQuery);
      router.push(requestUrl);
    }
  };

  const updateQuery = (newQuery: string) => setQuery(newQuery);

  return {
    query,
    updateQuery,
    handleSearch,
  };
}
