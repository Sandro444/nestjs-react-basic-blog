import { useQuery, useMutation } from "@apollo/client";
import { useAlert } from "react-alert";
import { getAllUsersQuery, AssignRoleMutation } from "../../../gql-queries";

const useUsersPage = () => {
  const alert = useAlert();

  const { data, loading } = useQuery(getAllUsersQuery);

  const [assignRole, { loading: assignRoleLoading }] =
    useMutation(AssignRoleMutation);

  const assignRoleHandler = async (userId, roleName) => {
    try {
      await assignRole({
        variables: {
          record: {
            userId,
            roleName,
          },
        },
        refetchQueries: [{ query: getAllUsersQuery }],
      });
      alert.success("role assigned");
    } catch (e) {
      console.log(e);
      alert.error("role not assigned");
    }
  };
  return { data, loading, assignRoleHandler, assignRoleLoading };
};

export default useUsersPage;
