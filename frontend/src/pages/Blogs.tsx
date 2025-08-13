import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks/useBlogs";

const Blogs = () => {
  const { loading, blogs } = useBlogs();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Latest Articles
          </h1>
          <p className="text-gray-600 text-lg">
            Discover insights, tutorials, and stories from our community
          </p>
        </div>

        {/* Show skeletons while loading */}
        {loading
  ? Array.from({ length: 5 }).map((_, idx) => <BlogSkeleton key={idx} />)
  : blogs.map((blog) => (
      <BlogCard
        key={blog.id}
        id={blog.id}
        authorName={blog.author?.name || "Anonymous"}
        title={blog.title}
        content={blog.content}
        publishedDate={blog.createdAt}
      />
    ))}

      </div>
    </div>
  );
};

export default Blogs;
