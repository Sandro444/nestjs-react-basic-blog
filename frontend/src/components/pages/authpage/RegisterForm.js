import { Formik, Form, Field, ErrorMessage } from "formik";

import { FormFieldWrapper, FormButtonWrapper } from "./components";

import useRegisterForm from "../../../hooks/common/auth/useRegisterForm";

import { registerValidationSchema } from "../../../validations";

const RegisterForm = () => {
  const { registerHandler, redirectToLogin } = useRegisterForm();

  return (
    <div>
      <h1>Register Form</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
          credentials: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, { setErrors }) => {
          const query = await registerHandler(
            values.username,
            values.email,
            values.password,
            values.repeatPassword
          );
          if (query.message) {
            setErrors({ credentials: query.message });
          }
        }}
      >
        {({ isSubmitting, errors }) => (
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
              <ErrorMessage name="repeatPassword" render={(msg) => <p>{msg}</p>} />
            </FormFieldWrapper>

            <FormButtonWrapper type="submit" disabled={isSubmitting}>
              Register
            </FormButtonWrapper>
            <FormButtonWrapper onClick={(e) => redirectToLogin()}>
              Log In
            </FormButtonWrapper>
            <ErrorMessage name="credentials" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegisterForm;
