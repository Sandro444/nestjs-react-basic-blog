import { gql } from '@apollo/client';
const singleBlogQuery = gql`
  query getOneBlog($record: GetOneBlogRecord!) {
    getOneBlog(record: $record) {
      id
      content
      title
      author {
        username
      }
      createdAt
    }
  }
`;

export default singleBlogQuery;
