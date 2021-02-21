import { gql } from '@apollo/client';
const RegisterMutation = gql`
  mutation registerUser($args: RegisterUserInput!) {
    registerUser(args: $args) {
      username
      email
      password
    }
  }
`;

export default RegisterMutation;
