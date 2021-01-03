import { gql } from "@apollo/client";
const LoginMutation = gql`
  mutation($args: Args!) {
    logIn(args: $args) {
      access_token
    }
  }
`;

export default LoginMutation;
