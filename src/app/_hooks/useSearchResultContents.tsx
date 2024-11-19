"use client";
import { useEffect, useState, useMemo } from "react";
import { debounce } from "lodash";
import { searchRequestByQuery } from "@/app/(main)/search/api/router";

import { searchResultDto } from "@/types/searchResultDto";

import { useEscapePathname } from "@/hooks/useSearch";

export function useSearchResultContents() {
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
          const result = await searchRequestByQuery(query);
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

  return { searchResult, isLoading, query };
}
