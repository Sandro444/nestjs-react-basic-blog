import { gql } from "@apollo/client";
const getCurrentUserQuery = gql`
  query{
    getCurrentUser{
        username
        email
    }
  }
`;

export default getCurrentUserQuery;
