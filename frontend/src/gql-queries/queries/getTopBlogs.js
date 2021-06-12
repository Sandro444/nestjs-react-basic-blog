import { gql } from "@apollo/client";

const getTopBlogsQuery = gql`
  query getTopBlogs {
    getTopBlogs {
      id
      title
      commentsCount
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

export default getTopBlogsQuery;
