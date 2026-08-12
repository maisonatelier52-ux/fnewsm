export default function Loading() {
  return (
    <div className="w-full bg-white min-h-screen pt-12 pb-24 animate-fade-in">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Breadcrumb Skeleton */}
        <div className="w-48 h-4 bg-gray-200 rounded animate-pulse mb-8"></div>
        
        {/* Title Skeleton */}
        <div className="w-64 h-12 bg-gray-200 rounded animate-pulse mb-12"></div>

        {/* Top Feature Article Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-8 h-[400px] bg-gray-200 rounded animate-pulse"></div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="w-full h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full h-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full h-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-full aspect-video bg-gray-200 rounded animate-pulse"></div>
              <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
