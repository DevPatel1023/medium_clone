import BlogCard from "../components/BlogCard";

const Blogs = () => {
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
        <BlogCard
          authorName= "Sarah Chen"
      title= "The Future of Artificial Intelligence in Web Development"
      content= "Artificial intelligence is revolutionizing how we build web applications. From automated code generation to intelligent user interfaces, AI tools are becoming indispensable for modern developers. In this comprehensive guide, we'll explore the cutting-edge AI technologies that are reshaping the development landscape and how you can leverage them in your projects."
      publishedDate= "2025-01-15"
        />
      </div>
    </div>
  );
};

export default Blogs;
