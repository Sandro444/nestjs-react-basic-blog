import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormFieldWrapper } from "./components";

import useRegisterForm from "../../../hooks/common/auth/useRegisterForm";

const RegisterForm = () => {
  const { registerHandler } = useRegisterForm();

  return (
    <div>
      <h1>Register Form</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
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
        onSubmit={async (values, {  setErrors }) => {
          const query = await registerHandler(values.username, values.email, values.password, values.repeatPassword);
          if (query.message) {
            console.log("message")
            setErrors({credentials: "message"});
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
                        <ErrorMessage name="credentials" component="div" />

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
};
export default RegisterForm;
