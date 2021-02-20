import Layout from '../../common/layout/Layout';
import LatestBlogs from './LatestBlogs';
import SingleBlog from './SingleBlog';
const BlogsPage = ({ id }) => {
  return <Layout>{id ? <SingleBlog id={id} /> : <LatestBlogs />}</Layout>;
};

export default BlogsPage;
