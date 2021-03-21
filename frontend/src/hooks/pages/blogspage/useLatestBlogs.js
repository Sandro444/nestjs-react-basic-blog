import { useQuery } from "@apollo/client";
import { AllBlogsQuery } from "../../../gql-queries";
const useLatestBlogs = () => {
  const { data: blogsData, loading: blogsLoading } = useQuery(AllBlogsQuery, {
    variables: {
      filter: {
        createdAtSort: "DESC",
        take: 5,
      },
    },
  });

  return {
    blogsData,
    blogsLoading,
  };
};

export default useLatestBlogs;
