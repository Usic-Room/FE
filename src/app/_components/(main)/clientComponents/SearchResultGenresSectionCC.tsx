import { genreTypes } from "@/types/genreTypes";

import { isEmpty } from "lodash";

interface SearchResultGenresSectionCCProps {
  genres: genreTypes[];
}

export function SearchResultGenresSectionCC({
  genres,
}: SearchResultGenresSectionCCProps) {
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
