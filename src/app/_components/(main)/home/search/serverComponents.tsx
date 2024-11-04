import "server-only";

import Image from "next/image";
import superNaturalImage from "@/public/images/supernatural.jpg";

export function searchFilter() {
  return (
    <div className="sticky top-5 sm:top-0 z-10 bg-black-121212 py-4">
      <div className="flex space-x-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {["모두", "곡", "아티스트", "앨범", "이벤트", "플레이리스트"].map(
          (filter) => (
            <FilterButton key={filter} label={filter} />
          )
        )}
      </div>
    </div>
  );
}

// Filter Button Component
export function FilterButton({ label }: { label: string }) {
  return (
    <button className="px-3 py-2 rounded-full bg-gray-800 text-white">
      {label}
    </button>
  );
}

// Event Card Component
export function EventCard() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <Image
        src={superNaturalImage}
        alt="Event"
        width={150}
        height={150}
        className="rounded"
      />
    </div>
  );
}

export function SearchTopResultSection() {
  return (
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
  );
}

export function SearchSongListSection() {
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

  return (
    <div className="lg:col-span-2">
      <h2 className="text-2xl font-bold mb-4">곡</h2>
      <div className="bg-gray-900 p-4 rounded-lg">
        <SongList songs={dummyResults} />
      </div>
    </div>
  );
}

export function SongList({
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
      {songs.map((song) => (
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
          <p className="text-gray-400 hidden md:block">{song.duration}</p>
        </div>
      ))}
    </div>
  );
}
