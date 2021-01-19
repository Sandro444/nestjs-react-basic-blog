import { gql } from "@apollo/client";
<<<<<<< HEAD
const GetCurrentUserQuery = gql`
=======
const getCurrentUserQuery = gql`
>>>>>>> 881a2d070dfea417345430e57da9c5102993217b
  query{
    getCurrentUser{
        username
        email
    }
  }
`;

<<<<<<< HEAD
export default GetCurrentUserQuery;
=======
export default getCurrentUserQuery;
>>>>>>> 881a2d070dfea417345430e57da9c5102993217b
