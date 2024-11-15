//import "server-only";

export function SearchResultFilterSkeleton() {
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

export function SearchResultSkeleton() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 animate-pulse bg-gray-700 h-8 w-1/3"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

function EventCardSkeleton() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg animate-pulse">
      <div className="w-full h-40 bg-gray-700 rounded"></div>
    </div>
  );
}

export function SearchResultNoContent() {
  return (
    <div className="flex justify-center items-center h-full">
      <p>No results found.</p>
    </div>
  );
}
