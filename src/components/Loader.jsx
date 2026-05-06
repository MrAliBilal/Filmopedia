export default function Loader() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Backdrop Skeleton */}
      <div className="h-96 md:h-[500px] bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />

      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Poster Skeleton */}
          <div className="md:col-span-1">
            <div className="w-full h-96 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg animate-pulse" />
          </div>

          {/* Info Skeleton */}
          <div className="md:col-span-3 space-y-4">
            <div className="h-12 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse" />
            <div className="h-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse w-1/3" />
            <div className="h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse w-1/2" />

            <div className="flex gap-2 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full animate-pulse"
                />
              ))}
            </div>

            <div className="space-y-2 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cast Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="h-8 w-32 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-48 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse" />
              <div className="h-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded animate-pulse w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}