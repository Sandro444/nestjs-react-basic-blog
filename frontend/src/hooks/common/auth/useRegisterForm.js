import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { RegisterMutation } from "../../../gql-queries/index";
const useRegisterForm = () => {
  const [registerMutation] = useMutation(RegisterMutation);
  const history = useHistory();
  const registerHandler = async (username, email, password, repeatPassword) => {
    try {
      const answer = await registerMutation({
        variables: {
          args: {
            username,
            email,
            password,
            repeatPassword,
          },
        },
      });
      history.push("/auth/login");
    } catch (e) {
        console.log(e["message"])
      return {
        message: e["message"],
      };
    }
  };
  const redirectToLogin = () => history.push("/auth/login")
  return { registerHandler,redirectToLogin };
};

export default useRegisterForm;
