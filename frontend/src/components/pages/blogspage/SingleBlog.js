import { useSingleBlog } from '../../../hooks';
import { Spinner } from '../../../components/common/spinner/Spinner';
const SingleBlog = ({ id }) => {
  const { data, loading } = useSingleBlog({ id });
  const blogData = data?.getOneBlog;
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h1> {blogData.title} </h1>
      <p> {blogData.content} </p>
      <p> created at - {blogData.createdAt} </p>
      <p> author - {blogData.author.username} </p>
    </div>
  );
};

export default SingleBlog;
