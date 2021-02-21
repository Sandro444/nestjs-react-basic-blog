import { gql } from '@apollo/client';
const createBlogMutation = gql`
  mutation createBlog($record: CreateBlogRecord!) {
    createBlog(record: $record) {
      id
      author {
        id
        username
        email
      }
      content
    }
  }
`;

export default createBlogMutation;
