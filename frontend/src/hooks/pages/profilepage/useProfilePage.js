import { useState } from "react";
import { useMutation } from "@apollo/client";
import * as axios from "axios";
import { useAlert } from "react-alert";

import { useAuth } from "../../../hooks";

const useProfilePage = () => {
  const { data, currentUserLoading } = useAuth();

  return {
    userRole: data?.getCurrentUser?.role?.name,
  };
};

export default useProfilePage;
