import { useState } from "react";
import { useQuery } from "@apollo/client";
export const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const localAuthToken = localStorage.getItem("auth-token");

  /* const { data } = useQuery(LoginQuery, {
    variables: {
      args: {
        username: "sandro",
        password: "password",
      },
    },
  });
  console.log(data); */
  if (localAuthToken) {
    setAuthorized(true);
    setAuthToken(localAuthToken);
  } else {
  }

  const makeAuth = (authToken) => {
    localStorage.setItem("auth-token", authToken);
    setAuthToken(authToken);
  };

  return {
    authorized,
    makeAuth,
  };
};
