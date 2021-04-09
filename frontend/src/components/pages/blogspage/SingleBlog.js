import { Formik, Form, Field, ErrorMessage } from "formik";

import { useSingleBlog } from "../../../hooks";
import { Spinner } from "../../../components/common/spinner/Spinner";
import { FormButtonWrapper, FormFieldWrapper } from "../authpage/components";
const SingleBlog = ({ id }) => {
  const { data, loading, createCommentHandler } = useSingleBlog({ id });
  const blogData = data?.getOneBlog;
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h1> {blogData.title} </h1>
      <p> {blogData.content} </p>
      <p> created at - {blogData.createdAt} </p>
      <p> author - {blogData.author.username} </p>
      <br />

      <Formik
        initialValues={{ body: "" }}
        onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
          await createCommentHandler(values);
          resetForm();
        }}
      >
        {({ isSubmitting, errors, resetForm }) => (
          <Form>
            <h3>Make Comment</h3>
            <FormFieldWrapper>
              <Field type="text" name="body" />
              <ErrorMessage name="body" component="div" />
            </FormFieldWrapper>
            <FormButtonWrapper type="submit" disabled={isSubmitting}>
              Comment
            </FormButtonWrapper>
          </Form>
        )}
      </Formik>

      <h1>Blog Comments</h1>

      <br />
      {blogData?.comments.lenght === 0 ? (
        <h2>no comments yet</h2>
      ) : (
        blogData.comments?.map((comment) => {
          return (
            <>
              <h3>{comment.author.username}</h3>
              <p>{comment.body}</p>
              <p>{comment.createdAt}</p>
            </>
          );
        })
      )}
    </div>
  );
};

export default SingleBlog;
