import { useAuthPage } from "../../../hooks/pages/authpage/useAuthPage";

import LoginForm from './LoginForm'
import RegisterForm from "./RegisterForm";

import { AuthPageWrapper } from "./components";

const AuthPage = () => {
    const {authType} = useAuthPage()
    return <AuthPageWrapper>
        {authType === "login" ? <LoginForm /> : <RegisterForm />}
    </AuthPageWrapper>
}

export default AuthPage