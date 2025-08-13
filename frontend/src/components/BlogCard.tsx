import { Link } from "react-router-dom";
import { capitalizeWords } from "../utils/capitalizeWords";
import { formatDate } from "../utils/FormatDate";
import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id : number
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  const countWords: number = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(countWords / 200);


  return (
    <Link to={`/blog/${id}`}>
    <article className="group cursor-pointer w-full">
      <div className=" py-8 px-0 border-b border-gray-100 " >
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar name={authorName} />
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-900 font-medium hover:border-b transition-colors">
              {authorName}
            </span>
            <span className="text-gray-400">·</span>
            <time className="text-gray-500" dateTime={publishedDate}>
              {formatDate(publishedDate)}
            </time>
          </div>
        </div>

        {/* Content */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors leading-tight">
            {capitalizeWords(title)}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-4">
            {content.length > 350 ? content.slice(0, 350) + "..." : content}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Topic/Category Tag */}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
              Technology
            </span>
            
            {/* Read Time */}
            <span className="text-sm text-gray-500">
              {readTime} min read
            </span>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
};



export default BlogCard;