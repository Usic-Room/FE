import Image from "next/image";

import { searchResultEventTypes } from "@/types/searchResultDto";
import { caclulateDate } from "@/utils/calculator";

import { isEmpty } from "lodash";

interface SearchResultEventsSectionCCProps {
  events: searchResultEventTypes[];
}

//TODO: event 개수 추후 결정
export function SearchResultEventsSectionCC({
  events,
}: SearchResultEventsSectionCCProps) {
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
