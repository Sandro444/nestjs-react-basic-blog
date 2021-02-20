import { useQuery } from '@apollo/client';
import { singleBlogQuery } from '../../../gql-queries/';

const useSingleBlog = ({ id }) => {
  const { data, loading, error } = useQuery(singleBlogQuery, {
    variables: {
      record: {
        id: +id,
      },
    },
  });
  return {
    data,
    loading,
  };
};

export default useSingleBlog;
