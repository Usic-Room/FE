import Image from "next/image";

import { searchResultSongTypes } from "@/types/searchResultDto";
import { calculateRunningTime } from "@/utils/calculator";

import { isEmpty } from "lodash";

interface SearchResultSongsSectionCCProps {
  songs: searchResultSongTypes[];
}

//TODO: 다수의 아티스트 표시
export function SearchResultSongsSectionCC({
  songs,
}: SearchResultSongsSectionCCProps) {
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
