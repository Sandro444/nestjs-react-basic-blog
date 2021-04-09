import { useMutation, useQuery } from "@apollo/client";
import { singleBlogQuery } from "../../../gql-queries/";
import { CreateCommentMutation } from "../../../gql-queries/";
import { useAlert } from "react-alert";
const useSingleBlog = ({ id }) => {
  const { data, loading, error, refetch: refetchBlog } = useQuery(
    singleBlogQuery,
    {
      variables: {
        record: {
          id: +id,
        },
      },
    }
  );

  const alert = useAlert();

  const [createComment] = useMutation(CreateCommentMutation);

  const createCommentHandler = async (values) => {
    const response = await createComment({
      variables: {
        record: {
          body: values.body,
          blog: data.getOneBlog.id,
        },
      },
    });
    if (response) {
      alert.success("comment created successfuly");
    }

    await refetchBlog();
  };
  return {
    data,
    loading,
    createCommentHandler,
  };
};

export default useSingleBlog;
