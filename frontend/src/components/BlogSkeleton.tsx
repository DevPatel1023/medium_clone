const BlogSkeleton = () => {
  return (
    <div className="p-6 border-b border-gray-200 animate-pulse max-w-3xl mx-auto space-y-4">
      <div>
        <div className=" py-8 px-0 border-b border-gray-100 ">
          {/* Author Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-3 bg-gray-300 rounded w-24"></div>
              <span className="text-gray-400">·</span>
              <div className="h-2 bg-gray-200 rounded w-20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-4 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-60"></div>
            <div>
            <div className=" text-gray-600 text-base leading-relaxed line-clamp-3 mb-4 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-250"></div>
              <div className="h-3 bg-gray-200 rounded w-250"></div>
            </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Topic/Category Tag */}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
                <div className="h-2 bg-gray-200 rounded w-20"></div>
              </span>

              {/* Read Time */}
              <span className="text-sm text-gray-500">
                <div className="h-2 bg-gray-200 rounded w-25"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
