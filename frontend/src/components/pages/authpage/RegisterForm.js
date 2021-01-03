import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormFieldWrapper } from "./components";

const RegisterForm = () => (
  <div>
    <h1>Register Form</h1>
    <Formik
      initialValues={{ username: "", email: "", password: "", repeatPassword: "" }}
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
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormFieldWrapper>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </FormFieldWrapper>

          <FormFieldWrapper>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </FormFieldWrapper>

          <FormFieldWrapper>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </FormFieldWrapper>

          <FormFieldWrapper>
            <Field type="password" name="repeatPassword" />
            <ErrorMessage name="repeatPassword" component="div" />
          </FormFieldWrapper>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;
