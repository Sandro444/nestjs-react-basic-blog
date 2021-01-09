import { LoginMutation } from "../../../gql-queries/index";
import { useMutation } from "@apollo/client";
import { useAuth } from "./useAuth";
import {useHistory} from 'react-router-dom'
export const useLoginForm = () => {
  const [loginMutation] = useMutation(LoginMutation);
  const { makeAuth } = useAuth();
  const history = useHistory()

  const redirectToRegister = () => history.push('/auth/register')
  const loginHandler = async (username, password) => {
    try {
      const answer = await loginMutation({
        variables: { args: { username: username, password: password } },
      });
      makeAuth(answer.data.logIn.access_token)
      history.push("/index")
    } catch (e) {
      return {
        message: e["message"],
      };
    }
  };

  return {
    loginHandler,
    redirectToRegister
  };
};
