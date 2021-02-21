import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useCreateBlogPage } from '../../../hooks';
import { createBlogValidationSchema } from '../../../validations';
import Layout from '../../common/layout/Layout';
import { FormFieldWrapper, FormButtonWrapper } from '../authpage/components';
const CreateBlogPage = () => {
  const { data, currentUserLoading, createBlogHandler } = useCreateBlogPage();
  return (
    <Layout>
      <h1>create blog</h1>
      <Formik
        initialValues={{
          title: '',
          content: '',
        }}
        validationSchema={createBlogValidationSchema}
        onSubmit={async (values, actions) => {
          await createBlogHandler(values);

          actions.resetForm();
        }}
      >
        {({ isSubmitting, errors, touched }) => {
          return (
            <Form>
              <FormFieldWrapper>
                <h3>Title</h3>
                <Field type="text" name="title" />
                {touched.title && <ErrorMessage name="title" component="div" />}
              </FormFieldWrapper>

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
