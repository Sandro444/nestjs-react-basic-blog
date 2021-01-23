import { useState, useMemo, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GetCurrentUserQuery } from "../../../gql-queries/index";
import { AuthContext } from "../../../context/authcontext/authContext";
import {
  logInAction,
  logOutAction,
} from "../../../context/authcontext/actions";
export const useAuth = () => {
  const [state, dispatcher] = useContext(AuthContext) || [null, () => null];
  const localAuthToken = useMemo(() => localStorage.getItem("auth-token"), [
    state,
  ]);
  useEffect(() => {
    if (localAuthToken && state && !state.authorized) {
      dispatcher(logInAction(state));
    }
  }, [state]);
  const { data, loading, refetch } = useQuery(GetCurrentUserQuery, {
    fetchPolicy: 'no-cache',
    skip: !state.authorized,
  });

  useEffect(() => console.log('auth loading', loading), [loading])
  
  useEffect(() => {
    if(!loading && !data){
      logOut()
    }
  },[data, loading])

  const logOut = () => {
    localStorage.clear();
    dispatcher(logOutAction(state));
  };
  const makeAuth = (authToken) => {
    localStorage.setItem("auth-token", authToken);
    dispatcher(logInAction(state));
  };

  return {
    makeAuth,
    logOut,
    data,
  };
};
