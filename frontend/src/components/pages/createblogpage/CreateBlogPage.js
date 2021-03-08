import { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useCreateBlogPage } from '../../../hooks';
import { createBlogValidationSchema } from '../../../validations';
import Layout from '../../common/layout/Layout';
import { FormFieldWrapper, FormButtonWrapper } from '../authpage/components';
const CreateBlogPage = () => {
  const {
    data,
    currentUserLoading,
    createBlogHandler,
    uploadImageToServer,
    imageHandler,
    file,
  } = useCreateBlogPage();
  return (
    <Layout>
      <h1>create blog</h1>
      <Formik
        initialValues={{
          title: '',
          image: {
            file: '',
            imagePreviewUrl: '',
          },
          content: '',
        }}
        validationSchema={createBlogValidationSchema}
        onSubmit={async (values, actions) => {
          await createBlogHandler(values);

          actions.resetForm();
        }}
      >
        {({ isSubmitting, errors, touched, setFieldValue, values }) => {
          return (
            <Form>
              {console.log('value', values)}
              <FormFieldWrapper>
                <h3>Title</h3>
                <Field type="text" name="title" />
                {touched.title && <ErrorMessage name="title" component="div" />}
              </FormFieldWrapper>

              <FormFieldWrapper>
                <h3>image</h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => imageHandler(event, setFieldValue)}
                />
                {touched.image && <ErrorMessage name="image" component="div" />}
              </FormFieldWrapper>

              <div>
                <h3>image preview</h3>
                {values.image.file?.name && (
                  <img
                    height="300"
                    width="300"
                    src={values.image.imagePreviewUrl}
                  ></img>
                )}
              </div>

              <FormFieldWrapper>
                <h3>Body</h3>
                <Field
                  as="textarea"
                  name="content"
                  style={{ resize: 'none', width: '50vw', height: '30vh' }}
                />
                {touched.content && (
                  <ErrorMessage name="content" component="div" />
                )}
              </FormFieldWrapper>

              <FormButtonWrapper
                type="submit"
                disabled={isSubmitting || currentUserLoading}
              >
                Create Blog
              </FormButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default CreateBlogPage;
