import { gql } from "@apollo/client";
const commentAddedSubscription = gql`
  subscription commentAdded {
    commentAdded {
      id
      body
    }
  }
`;

export default commentAddedSubscription;
