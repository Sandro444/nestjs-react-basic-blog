export const logInAction = (state) => {
  return {
    type: "logIn",
    payload: {
      ...state,
      authorized: true,
    },
  };
};

export const logOutAction = (state) => {
  return {
    type: "logOut",
    payload: {
      ...state,
      authorized: false,
    },
  };
};
