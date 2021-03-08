import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useAlert } from 'react-alert';
import {
  createBlogMutation,
  AllBlogsQuery,
  uploadBlogImage,
} from '../../../gql-queries/';
import allBlogsQuery from '../../../gql-queries/queries/allBlogs';
import { useAuth } from '../../../hooks';
const useCreateBlogPage = () => {
  const alert = useAlert();
  const { data, currentUserLoading } = useAuth();

  const [file, setFile] = useState('');
  const [uploadImage] = useMutation(uploadBlogImage);
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

  const uploadImageToServer = async (file) => {
    await uploadImage({
      variables: {
        file,
      },
    });
  };

  const imageHandler = async (event, setFieldValue) => {
    //setFieldValue('image', event.currentTarget.files[0]);
    let reader = new FileReader();
    let file = event.currentTarget.files[0];

    reader.onloadend = () => {
      setFieldValue('image', {
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const createBlogHandler = async (values) => {
    try {
      await uploadImageToServer(values.image.file);

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
  return {
    data,
    currentUserLoading,
    createBlogHandler,
    uploadImageToServer,
    imageHandler,
    file,
  };
};

export default useCreateBlogPage;
