const MainBlogSkeleton = () => {
  return (
    <div
      className="flex justify-center flex-col md:grid md:grid-cols-12 px-10 py-20 gap-5 animate-pulse"
      aria-busy="true"
    >
      {/* Left Side (Main Blog Content) */}
      <div className="md:col-span-8">
        {/* Title Placeholder */}
        <div className="h-10 w-3/4 bg-gray-300 rounded mb-6"></div>

        {/* Meta Info (Date, Reading Time) */}
        <div className="flex gap-3 items-center mb-4">
          <div className="h-3 bg-gray-300 rounded w-24"></div>
          <span className="text-gray-400">·</span>
          <div className="h-3 bg-gray-200 rounded w-20"></div>
        </div>

        {/* Blog Content Placeholder */}
        <div className="py-4 space-y-3">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="h-3 bg-gray-200 rounded w-5/6"></div>
          ))}
        </div>
      </div>

      {/* Right Side (Author Info) */}
      <div className="md:col-span-4">
        <h3 className="pl-2 text-gray-600 mb-2">&#x2022; Author</h3>
        <div className="flex flex-col gap-4 py-5">
          {/* Avatar and Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>

          {/* Short Bio */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogSkeleton;
