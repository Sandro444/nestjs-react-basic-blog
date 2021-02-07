import {
  BlogPreviewWrapper,
  BlogPreviewHeader,
  BlogPreviewContent,
  BlogPreviewButtons,
} from './components';

const BlogPreview = ({ title, content, id }) => {
  return (
    <BlogPreviewWrapper>
      <BlogPreviewHeader>{title}</BlogPreviewHeader>
      <BlogPreviewContent>{content}</BlogPreviewContent>
      <BlogPreviewButtons>
        <button>more</button>
      </BlogPreviewButtons>
    </BlogPreviewWrapper>
  );
};

export default BlogPreview;
