import { useState, useMemo, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GetCurrentUserQuery } from "../../../gql-queries/index";
import { AuthContext } from "../../../context/authcontext/authContext";
import {
  logInAction,
  logOutAction,
} from "../../../context/authcontext/actions";
const useAuth = () => {
  const [state, dispatcher] = useContext(AuthContext);
  const localAuthToken = useMemo(() => localStorage.getItem("auth-token"), [
    state,
  ]);
  useEffect(() => {
    if (localAuthToken && state && !state.authorized) {
      dispatcher(logInAction(state));
    }
  }, [state]);

  const { data, loading: currentUserLoading, refetch } = useQuery(
    GetCurrentUserQuery,
    {
      fetchPolicy: "network-only",
    }
  );

  useEffect(() => {
    if (currentUserLoading === false && !data) {
      logOut();
    }
  }, [data, currentUserLoading]);

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
    currentUserLoading,
  };
};

export default useAuth;
