import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLoginForm } from "../../../hooks/common/auth/useLoginForm";
import { FormFieldWrapper } from "./components";

const LoginForm = () => {
  const { loginHandler } = useLoginForm();
  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (values.username.length <= 3) {
            errors.username = "minimum 4 letter of username";
          } else if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const query = await loginHandler(values.username, values.password);
          console.log(query);
          if (query.message) {
            setErrors({credentials: query.message});
          }
          setSubmitting(true);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <FormFieldWrapper>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </FormFieldWrapper>

            <FormFieldWrapper>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </FormFieldWrapper>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <ErrorMessage name="credentials" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
