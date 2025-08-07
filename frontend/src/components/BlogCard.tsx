interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: Date;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div>
      {/* user details */}
      <div>
        <p>By {authorName}</p>
        <small>{publishedDate.toDateString()}</small>
      </div>
      <h2>{title}</h2>
      <p>{content.slice(0, 100)}</p>
    </div>
  );
};

export default BlogCard;
