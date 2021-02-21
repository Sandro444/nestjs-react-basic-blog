import { Formik, Form, Field, ErrorMessage } from 'formik';

import Layout from '../../common/layout/Layout';
import { FormFieldWrapper, FormButtonWrapper } from '../authpage/components';
const CreateBlogPage = () => {
  return (
    <Layout>
      <h1>create blog</h1>
      <Formik
        initialValues={{
          title: '',
          body: '',
        }}
        onSubmit
      >
        {({ isSubmitting, errors }) => {
          return (
            <Form>
              <FormFieldWrapper>
                <h3>Title</h3>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" />
              </FormFieldWrapper>

              <FormFieldWrapper>
                <h3>Body</h3>
                <Field
                  as="textarea"
                  name="body"
                  style={{ resize: 'none', width: '50vw', height: '30vh' }}
                />
                <ErrorMessage name="body" component="div" />
              </FormFieldWrapper>

              <FormButtonWrapper type="button" disabled={isSubmitting}>
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
