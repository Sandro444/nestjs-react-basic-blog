import { gql } from "@apollo/client";
const CreateCommentMutation = gql`
  mutation createComment($record: CreateCommentRecord!) {
    createComment(record: $record) {
      id
    }
  }
`;

export default CreateCommentMutation;
