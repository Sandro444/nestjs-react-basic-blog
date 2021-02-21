import { Link } from 'react-router-dom';
import {
  BlogPreviewWrapper,
  BlogPreviewHeader,
  BlogPreviewContent,
  BlogPreviewButtons,
  BlogSeeMoreButton,
} from './components';

const BlogPreview = ({ title, content, id }) => {
  return (
    <BlogPreviewWrapper>
      <BlogPreviewHeader>{title}</BlogPreviewHeader>
      <BlogPreviewContent>{content}</BlogPreviewContent>
      <BlogPreviewButtons>
        <Link to={`/blogs/${id}`}>
          <BlogSeeMoreButton>more</BlogSeeMoreButton>
        </Link>
      </BlogPreviewButtons>
    </BlogPreviewWrapper>
  );
};

export default BlogPreview;
