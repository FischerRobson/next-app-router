export function SkeletonLoading() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
      <div className="h-32 bg-gray-300"></div>
      <div className="px-6 py-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2 mt-3">
          <div className="h-3 bg-gray-300 rounded"></div>
          <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  )
}
