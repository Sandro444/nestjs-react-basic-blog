import { createContext } from "react";

const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "logIn":
      return {
        ...state,
        authorized: true,
      };
    case "logOut":
      return {
        ...state,
        authorized: false,
      };
    default:
      return initialState;
  }
};

const initialState = {
  authorized: false,
};

export { AuthContext, AuthReducer, initialState };
