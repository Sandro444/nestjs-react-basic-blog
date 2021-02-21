import * as Yup from 'yup';
import { lengthError } from './utils';

export const createBlogValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title Required')
    .min(6, lengthError('Title', false, 6))
    .max(20, lengthError('Title', true, 100)),
  content: Yup.string()
    .required('Content Required')
    .min(30, lengthError('Content', false, 30)),
});
