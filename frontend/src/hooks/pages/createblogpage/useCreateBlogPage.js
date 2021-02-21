import { useMutation } from '@apollo/client';
import { useAlert } from 'react-alert';
import { createBlogMutation, AllBlogsQuery } from '../../../gql-queries/';
import allBlogsQuery from '../../../gql-queries/queries/allBlogs';
import { useAuth } from '../../../hooks';
const useCreateBlogPage = () => {
  const alert = useAlert();
  const { data, currentUserLoading } = useAuth();
  const [createBlog, { loading }] = useMutation(createBlogMutation, {
    refetchQueries: [
      {
        query: AllBlogsQuery,
        variables: {
          filter: {
            createdAtSort: 'DESC',
            take: 5,
          },
        },
      },
    ],
  });

  const createBlogHandler = async (values) => {
    try {
      await createBlog({
        variables: {
          record: {
            title: values.title,
            content: values.content,
            author: data?.getCurrentUser?.id,
          },
        },
      });
      alert.success('Blog Created Successfully');
    } catch (e) {
      alert.error('Error Creating Blog');
      console.log(e);
    }
  };
  return { data, currentUserLoading, createBlogHandler };
};

export default useCreateBlogPage;
