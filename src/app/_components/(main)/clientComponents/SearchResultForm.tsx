"use client";
import Image from "next/image";
import Link from "next/link";
import { isEmpty } from "lodash";

import {
  searchResultDto,
  searchResultFilterTypes,
  searchResultEventTypes,
  searchResultSongTypes,
  searchResultPlaylistTypes,
  searchResultAlbumTypes,
  searchResultProfileTypes,
} from "@/types/searchResultDto";
import { genreTypes } from "@/types/genreTypes";

import { caclulateDate, calculateRunningTime } from "@/utils/calculator";
import { useSearchResultContents } from "@/hooks/useSearchResultContents";

export function SearchResultForm() {
  const { searchResult, isLoading, query } = useSearchResultContents();

  return (
    <>
      {isLoading ? (
        <SearchResultSectionSkeletonForm />
      ) : searchResult ? (
        <SearchResultSectionForm searchResult={searchResult} query={query} />
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>No results found.</p>
        </div>
      )}
    </>
  );
}

/**
 * Search result section form components
 */

interface SearchResulSectionProps {
  searchResult: searchResultDto;
  query: string;
}

function SearchResultSectionForm({
  searchResult,
  query,
}: SearchResulSectionProps) {
  return (
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
  );
}

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

/**
 * Search result section skeleton form components
 */

//TODO: 섹션별 스켈레톤 UI 적용
function SearchResultSectionSkeletonForm() {
  return (
    <>
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
  );
}

function SearchResultFilterSkeleton() {
  return (
    <div className="sticky top-5 sm:top-0 z-10 bg-black-121212 py-4">
      <div className="flex space-x-2 overflow-x-auto whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="px-3 py-2 rounded-full bg-gray-700 animate-pulse"
            style={{ width: "80px", height: "32px" }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function SearchResultSkeleton() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 animate-pulse bg-gray-700 h-8 w-1/3"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <SearchResultEventCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

function SearchResultEventCardSkeleton() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg animate-pulse">
      <div className="w-full h-40 bg-gray-700 rounded"></div>
    </div>
  );
}
