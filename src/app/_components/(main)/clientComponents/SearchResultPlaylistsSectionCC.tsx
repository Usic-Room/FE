import Image from "next/image";

import { searchResultPlaylistTypes } from "@/types/searchResultDto";

import { isEmpty } from "lodash";

interface SearchResultPlaylistsSectionCCProps {
  playlists: searchResultPlaylistTypes[];
}

export function SearchResultPlaylistsSectionCC({
  playlists,
}: SearchResultPlaylistsSectionCCProps) {
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
