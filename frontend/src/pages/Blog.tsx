import { useParams } from "react-router-dom";
import BlogSkeleton from "../components/BlogSkeleton";
import { useGetBlog } from "../hooks/usegetBlog";

const Blog = () => {
  const { id } = useParams<{ id: string }>(); 

  const { loading, blog } = useGetBlog(id ?? "");

  if (loading) {
    return <BlogSkeleton />;
  }

  console.log(blog);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
    </div>
  );
};

export default Blog;
