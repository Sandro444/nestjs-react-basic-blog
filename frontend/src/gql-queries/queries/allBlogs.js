import { gql } from "@apollo/client";
const allBlogsQuery = gql`
  query allBlogs($filter: AllBlogsFilterInput) {
    allBlogs(filter: $filter) {
      id
      title
      content
      author {
        username
        email
      }
      file {
        id
        url
      }
    }
  }
`;

export default allBlogsQuery;
