import Image from "next/image";

import { searchResultProfileTypes } from "@/types/searchResultDto";

import { isEmpty } from "lodash";

interface SearchResultProfilesSectionCCProps {
  profiles: searchResultProfileTypes[];
}

export function SearchResultProfilesSectionCC({
  profiles,
}: SearchResultProfilesSectionCCProps) {
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
