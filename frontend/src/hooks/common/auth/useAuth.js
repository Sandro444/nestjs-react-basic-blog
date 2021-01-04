import { useState, useMemo, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/authcontext/authContext";
import { useQuery } from "@apollo/client";
import {
  logInAction,
  logOutAction,
} from "../../../context/authcontext/actions";
export const useAuth = () => {
  const [state, dispatcher] = useContext(AuthContext) || [null, () => null];
  const localAuthToken = useMemo(() => localStorage.getItem("auth-token"), [
    state
  ]);


  useEffect(() => {
    console.log("useefect")
    if(localAuthToken && state && !state.authorized) {
      console.log("pijp")
      dispatcher(logInAction(state));
    } 
  },[state])
  /* const { data } = useQuery(LoginQuery, {
    variables: {
      args: {
        username: "sandro",
        password: "password",
      },
    },
  });
  console.log(data); */
  

  const logOut = () => {
    console.log("fires")
    localStorage.clear();
    dispatcher(logOutAction(state))
  };
  const makeAuth = (authToken) => {
    localStorage.setItem("auth-token", authToken);
    dispatcher(logInAction(state))
  };

  return {
    makeAuth,
    logOut,
  };
};
