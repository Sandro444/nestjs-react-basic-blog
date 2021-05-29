import { gql } from "@apollo/client";
const getAllUsers = gql`
  query getAllUsers {
    getAllUsers {
      id
      username
      email
      createdAt
      role {
        id
        name
      }
    }
  }
`;

export default getAllUsers;
