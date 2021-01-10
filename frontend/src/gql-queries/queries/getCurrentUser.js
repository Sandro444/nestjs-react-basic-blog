import { gql } from "@apollo/client";
const GetCurrentUserQuery = gql`
  query{
    getCurrentUser{
        username
        email
    }
  }
`;

export default GetCurrentUserQuery;
