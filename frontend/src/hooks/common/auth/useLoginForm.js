import { LoginMutation } from "../../../gql-queries/index";
import { useMutation } from "@apollo/client";

export const useLoginForm = () => {
  const [loginMutation] = useMutation(LoginMutation);

  const loginHandler = async (username, password) => {
      console.log("run")
      try{
        const answer = await loginMutation( {variables: {args: { username: username, password: password } }});
    return answer
      } catch(e){
          return {
              message: e["message"]
          }
      }
    
  };

  return {
    loginHandler,
  };
};
