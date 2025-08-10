import { useParams } from "react-router-dom";
import BlogSkeleton from "../components/BlogSkeleton";
import { useGetBlog } from "../hooks/usegetBlog";
import Avatar from "../components/Avatar";
import { formatDate } from "../utils/FormatDate";
import { capitalizeWords } from "../utils/capitalizeWords";

const Blog = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, blog } = useGetBlog(id ?? "");

  if (loading) {
    return <BlogSkeleton />;
  }

  return (
    <div className="flex justify-center flex-col md:grid md:grid-cols-12 px-10 py-20 gap-5">
      <div className="md:col-span-8">
        <h1 className="text-5xl font-bold pb-6">{capitalizeWords(blog?.title ?? "")}</h1>

        <div className="inline-flex gap-3">
            <p className="text-gray-500">posted on {formatDate(blog?.createdAt ?? "")}</p>
            <span className="text-gray-500">
              &#x2022; mins read
            </span>
        </div>

        {/* content */}
        <div className="py-4">
          <p className="text-gray-500 font-normal text-lg">{capitalizeWords(blog?.content ?? "")}</p>
        </div>
      </div>
      <div className=" md:col-span-4">
        {/* user details */}
        <h3 className="pl-2 text-gray-600">&#x2022; Author</h3>
        <div className="flex gap-3 justify-start flex-row py-5">
          <Avatar name={blog?.author.name ?? "Annoymous"} />
          <p className="inline font-bold text-xl text-gray-600">{blog?.author.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
