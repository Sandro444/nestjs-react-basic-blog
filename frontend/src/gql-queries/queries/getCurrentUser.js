import { gql } from '@apollo/client';
const getCurrentUserQuery = gql`
  query getCurrentUser {
    getCurrentUser {
      id
      username
      email
    }
  }
`;

export default getCurrentUserQuery;
