//TODO: LOOP THROUGH THE SKELETONS
export function SearchResultSkeletonCC() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 animate-pulse bg-gray-700 h-8 w-1/3"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg animate-pulse">
          <div className="w-full h-40 bg-gray-700 rounded"></div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg animate-pulse">
          <div className="w-full h-40 bg-gray-700 rounded"></div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg animate-pulse">
          <div className="w-full h-40 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
