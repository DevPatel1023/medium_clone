const BlogSkeleton = () => {
  return (
    <div className="p-6 border-b border-gray-200 animate-pulse max-w-3xl mx-auto space-y-4">

      {/* Meta (author, date) */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-300 rounded w-24"></div>
          <div className="h-2 bg-gray-200 rounded w-20"></div>
        </div>
      </div>

      {/* Paragraph lines */}
      <div className="space-y-3">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Optional image thumbnail */}
      <div className="w-full h-48 bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default BlogSkeleton;
