export function SearchResultFilterSkeletonCC() {
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
