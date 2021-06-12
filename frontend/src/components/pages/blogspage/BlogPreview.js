import { Link } from "react-router-dom";
import {
  BlogPreviewWrapper,
  BlogPreviewHeader,
  BlogPreviewContent,
  BlogPreviewButtons,
  BlogSeeMoreButton,
} from "./components";

const BlogPreview = ({
  title,
  content,
  id,
  fileUrl,
  fileId,
  commentsCount = null,
}) => {
  return (
    <BlogPreviewWrapper>
      <BlogPreviewHeader>
        <img src={fileUrl} height={100} width={100} />
        <h1>{title}</h1>
        {(commentsCount || commentsCount === 0) && (
          <h4 style={{ marginLeft: "auto" }}>comment - {commentsCount}</h4>
        )}
      </BlogPreviewHeader>
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
