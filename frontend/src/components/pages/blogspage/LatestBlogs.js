import { useLatestBlogs } from "../../../hooks";
import { Spinner } from "../../../components/common/spinner/Spinner";
import BlogPreview from "./BlogPreview";

const LatestBlogs = () => {
  const { blogsData, blogsLoading } = useLatestBlogs();

  if (blogsLoading) return <Spinner />;
  else {
    return (
      <div>
        {blogsData?.allBlogs?.map((blog) => {
          return (
            <BlogPreview
              key={blog.id}
              title={blog.title}
              content={blog.content}
              id={blog.id}
              fileUrl={blog.file.url}
              fileId={blog.file.id}
            />
          );
        })}
      </div>
    );
  }
};

export default LatestBlogs;
