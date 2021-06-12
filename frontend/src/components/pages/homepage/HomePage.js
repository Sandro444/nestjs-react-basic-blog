import { useHomepage } from "../../../hooks";
import Layout from "../../common/layout/Layout";
import BlogPreview from "../blogspage/BlogPreview";

const HomePage = () => {
  const { data, loading } = useHomepage();
  return (
    <Layout>
      <h1>homepage</h1>

      <h2>Top 3 Blogs</h2>

      {data?.getTopBlogs?.map((blog) => {
        return (
          <BlogPreview
            title={blog.title}
            content={blog.content}
            id={blog.id}
            fileUrl={blog.file.url}
            commentsCount={blog.commentsCount}
          />
        );
      })}
    </Layout>
  );
};

export default HomePage;
