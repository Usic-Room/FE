import Image from "next/image";

import { searchResultAlbumTypes } from "@/types/searchResultDto";

import { isEmpty } from "lodash";

interface SearchResultAlbumsSectionCCProps {
  albums: searchResultAlbumTypes[];
}

export function SearchResultAlbumsSectionCC({
  albums,
}: SearchResultAlbumsSectionCCProps) {
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
