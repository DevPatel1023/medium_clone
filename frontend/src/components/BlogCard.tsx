import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const countWords: number = content.trim().split(/\s+/).length;
  return (
    <div className="border-b pb-5 border-gray-200">
      {/* user details */}
      <div className="flex flex-row space-x-3">
        <Avatar name={authorName} />
        <p className="font-thin text-black">{authorName} . </p>
      </div>
      {/* content */}
      <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{content.slice(0, 100)}</p>
      </div>
      {/* footer */}
      <div>
        {/* read time calculation */}
        <small>{publishedDate}</small>

        {`${Math.ceil(countWords / 200)} min read`}
      </div>
    </div>
  );
};

export default BlogCard;
