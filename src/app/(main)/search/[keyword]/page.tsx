"use client";
import Image from "next/image";
import Link from "next/link";

//import { headers } from "next/headers";

import { caclulateDate, calculateRunningTime } from "@/utils/calculator";

import {
  SearchResultFilterSkeleton,
  SearchResultSkeleton,
  SearchResultNoContent,
} from "@/components/(main)/search/[keyword]/serverComponents";

import superNaturalImage from "@/public/images/superNatural.jpg";
import { Suspense, useEffect, useState, useMemo } from "react";

import { searchRequestByQuery } from "@/app/(main)/search/api/router";
import {
  searchResultDto,
  searchResultEventTypes,
  searchResultSongTypes,
  searchResultPlaylistTypes,
  searchResultAlbumTypes,
  searchResultProfileTypes,
} from "@/app/_types/searchResultDto";

import { genreTypes } from "@/types/genreTypes";

import { useEscapePathname } from "@/hooks/useSearch";

import { searchResultFilterTypes } from "@/types/searchResultDto";

import { debounce, isEmpty } from "lodash";

interface SearchResultFilterProps {
  filterList: searchResultFilterTypes[];
  searchQuery: string;
}

function SearchResultFilter({
  filterList,
  searchQuery,
}: SearchResultFilterProps) {
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

async function fetchSearchResults(query: string) {
  if (!query) return null;
  return await searchRequestByQuery(query);
}

interface SearchResultEventSectionProps {
  events: searchResultEventTypes[];
}

//TODO: event 개수 추후 결정
function SearchResultEventsSection({ events }: SearchResultEventSectionProps) {
  return isEmpty(events) ? null : (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">이벤트</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-800 p-4 rounded-lg md:flex ">
            <Image
              src={event.eventImage}
              alt={event.eventName}
              width={150}
              height={150}
              className="rounded"
            />
            <div className="ml-4 flex flex-col justify-center">
              <p className="text-lg font-bold">{event.eventName}</p>
              <p className="text-sm text-gray-400">
                {caclulateDate(event.eventDate)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SearchResultSongsSectionProps {
  songs: searchResultSongTypes[];
}

//TODO: 다수의 아티스트 표시
function SearchResultSongsSection({ songs }: SearchResultSongsSectionProps) {
  return isEmpty(songs) ? null : (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">곡</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex flex-col space-y-4">
          {songs.map((song) => (
            <div key={song.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={song.artwork}
                  alt={song.musicName}
                  width={50}
                  height={50}
                  className="rounded"
                />
                <div className="ml-4">
                  <p className="text-lg font-bold">{song.musicName}</p>
                  <p className="text-sm text-gray-400">{song.artistName}</p>
                </div>
              </div>
              <p className="text-gray-400 hidden md:block">
                {calculateRunningTime(song.runningTime)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SearchResultPlaylistsSectionProps {
  playlists: searchResultPlaylistTypes[];
}

function SearchResultPlaylistsSection({
  playlists,
}: SearchResultPlaylistsSectionProps) {
  return isEmpty(playlists) ? null : (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">플레이리스트</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex flex-col space-y-4">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="flex items-center">
              <Image
                src={playlist.artwork}
                alt={playlist.title}
                width={50}
                height={50}
                className="rounded"
              />
              <div className="ml-4">
                <p className="text-lg font-bold">{playlist.title}</p>
                <p className="text-sm text-gray-400">{playlist.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SearchResultGenresSectionProps {
  genres: genreTypes[];
}

function SearchResultGenresSection({ genres }: SearchResultGenresSectionProps) {
  return isEmpty(genres) ? null : (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">장르</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex flex-wrap gap-4">
          {genres.map((genre, index) => (
            <div key={index} className="bg-gray-800 p-2 rounded-full">
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SearchResultAlbumsSectionProps {
  albums: searchResultAlbumTypes[];
}

function SearchResultAlbumsSection({ albums }: SearchResultAlbumsSectionProps) {
  return isEmpty(albums) ? null : (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">앨범</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex flex-col space-y-4">
          {albums.map((album) => (
            <div key={album.id} className="flex items-center">
              <Image
                src={album.artwork}
                alt={album.title}
                width={50}
                height={50}
                className="rounded"
              />
              <div className="ml-4">
                <p className="text-lg font-bold">{album.title}</p>
                <p className="text-sm text-gray-400">{album.artistName}</p>
                <p className="text-sm text-gray-400">{album.releaseYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SearchResultProfilesSectionProps {
  profiles: searchResultProfileTypes[];
}

function SearchResultProfilesSection({
  profiles,
}: SearchResultProfilesSectionProps) {
  return isEmpty(profiles) ? null : (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">프로필</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex flex-col space-y-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="flex items-center">
              <Image
                src={profile.profileImage}
                alt={profile.username}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="text-lg font-bold">{profile.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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
    //<div className="flex flex-col h-full bg-black-121212 text-white">
    <>
      {isLoading ? (
        <>
          {/* TODO: 섹션별 스켈레톤 UI 적용 */}
          <SearchResultFilterSkeleton />
          <div className="flex-grow overflow-y-auto scrollbar-hide p-4">
            <SearchResultSkeleton />
            <SearchResultSkeleton />
            <SearchResultSkeleton />
            <SearchResultSkeleton />
            <SearchResultSkeleton />
            <SearchResultSkeleton />
          </div>
        </>
      ) : searchResult ? (
        /* Render actual search results */
        <>
          <SearchResultFilter
            filterList={searchResult.filterList}
            searchQuery={query}
          />
          <div className="flex-grow overflow-y-auto scrollbar-hide p-4">
            <SearchResultEventsSection events={searchResult.events} />
            <SearchResultSongsSection songs={searchResult.songs} />
            <SearchResultPlaylistsSection playlists={searchResult.playlists} />
            <SearchResultGenresSection genres={searchResult.genres} />
            <SearchResultAlbumsSection albums={searchResult.albums} />
            <SearchResultProfilesSection profiles={searchResult.profiles} />
          </div>
        </>
      ) : (
        /* Handle no results or error */
        <SearchResultNoContent />
      )}
    </>
  );
}
export default function SearchResultPage() {
  return (
    <div className="flex flex-col h-full bg-black-121212 text-white">
      <SearchContent />
    </div>
  );
}
