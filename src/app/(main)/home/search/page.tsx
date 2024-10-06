"use client";

import { Metadata } from "next";
import Image from "next/image";
import { useRef } from "react";

//export const metadata: Metadata = {
//  title: "Search",
//};

export default function Search() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className="flex h-screen bg-black-121212 text-white">
      {/* Main Content Area */}
      <div className="flex-grow p-4 overflow-y-scroll">
        {/* Search Filters */}
        <div className="flex space-x-2 my-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {["모두", "곡", "아티스트", "앨범", "이벤트", "플레이리스트"].map(
            (filter) => (
              <FilterButton key={filter} label={filter} />
            )
          )}
        </div>

        {/* Responsive Grid Layout for Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 상위결과 Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">상위결과</h2>
            <div className="flex items-center space-x-4">
              <Image
                src="/path/to/image.jpg"
                alt="Supernatural"
                width={100}
                height={100}
                className="rounded"
              />
              <div>
                <h3 className="text-xl font-bold">Supernatural</h3>
                <p className="text-gray-400">곡 · NewJeans</p>
              </div>
            </div>
          </div>

          {/* 곡 Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">곡</h2>
            <SongList />
          </div>
        </div>

        {/* 이벤트 Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">이벤트</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Repeating Event Cards */}
            {[1, 2, 3].map((event) => (
              <EventCard key={event} />
            ))}
          </div>
        </div>
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

// Song List Component
function SongList() {
  const songs = [
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
  ];

  return (
    <table className="w-full text-left text-white">
      <thead>
        <tr className="flex">
          <th>#</th>
          <th>제목</th>
          <th>앨범</th>
          <th>시간</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id} className="border-b border-gray-800">
            <td className="py-2">{song.id}</td>
            <td className="flex items-center py-2">
              <Image
                src="/path/to/image.jpg"
                alt={song.title}
                width={40}
                height={40}
              />
              <div className="ml-3">
                <p>{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </td>
            <td>{song.album}</td>
            <td>{song.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
