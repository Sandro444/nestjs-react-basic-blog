import * as Yup from 'yup'
import {lengthError} from './utils'


export const registerValidationSchema = Yup.object().shape({
    username: Yup.string().required('Username Required').min(6, lengthError('Username', false, 6)).max(20, lengthError('Username', true, 20)),
    email: Yup.string().email('Invalid email').required('Email Required'),
    password: Yup.string().min(8, lengthError('Password', false, 8)).max(32, lengthError('Password', true, 32)).required('Password Required'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords don\'t match')
})