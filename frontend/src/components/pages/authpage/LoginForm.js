import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLoginForm } from '../../../hooks/common/auth/useLoginForm';
import { FormFieldWrapper, FormButtonWrapper } from './components';
import { loginValidationSchema } from '../../../validations';
const LoginForm = () => {
  const { loginHandler, redirectToRegister } = useLoginForm();

  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={{ username: '', password: '', credentials: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const query = await loginHandler(values.username, values.password);
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
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </FormFieldWrapper>

            <FormButtonWrapper type="submit" disabled={isSubmitting}>
              Log In
            </FormButtonWrapper>
            <FormButtonWrapper onClick={(e) => redirectToRegister()}>
              Register
            </FormButtonWrapper>

            <ErrorMessage name="credentials" component="div" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
