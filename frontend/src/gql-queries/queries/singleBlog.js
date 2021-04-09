import { gql } from "@apollo/client";
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
      comments {
        id
        body
        createdAt
        author {
          username
        }
      }
    }
  }
`;

export default singleBlogQuery;
