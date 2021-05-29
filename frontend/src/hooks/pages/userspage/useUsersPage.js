import { useQuery } from "@apollo/client";
import { getAllUsersQuery } from "../../../gql-queries";

const useUsersPage = () => {
  const { data, loading } = useQuery(getAllUsersQuery);
  console.log("data", data);
  return { data, loading };
};

export default useUsersPage;
