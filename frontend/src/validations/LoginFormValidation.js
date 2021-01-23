import * as Yup from 'yup'
import {lengthError} from './utils'


export const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username Required').min(6, lengthError('Username', false, 6)).max(20, lengthError('Username', true, 20)),
    password: Yup.string().required('Password Required'),
})