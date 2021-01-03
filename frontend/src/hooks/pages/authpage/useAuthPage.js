import {useRouteMatch} from "react-router-dom"

export const useAuthPage = () => {
    const {params: {
        authType
    }} = useRouteMatch("/auth/:authType")

    return {
        authType: authType === "login"? "login" : authType === "register"? "register" : "login"
    }

}