import { gql } from "@apollo/client";
const AssignRoleMutation = gql`
  mutation assignRole($record: AssignRoleRecord!) {
    assignRole(record: $record)
  }
`;

export default AssignRoleMutation;
