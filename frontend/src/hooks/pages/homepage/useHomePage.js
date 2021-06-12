import { useQuery } from "@apollo/client";
import { getTopBlogsQuery } from "../../../gql-queries";

const useHomePage = () => {
  const { data, loading } = useQuery(getTopBlogsQuery, {
    fetchPolicy: "network-only",
  });

  return {
    data,
    loading,
  };
};

export default useHomePage;
