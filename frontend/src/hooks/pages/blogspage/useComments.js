import { useAlert } from "react-alert";
import { useSubscription } from "@apollo/client";
import { commentAddedSubscription } from "../../../gql-queries";
import { useEffect } from "react";

const useComments = () => {
  const alert = useAlert();
  const {
    data: commentData,
    loading,
    error,
  } = useSubscription(commentAddedSubscription);

  useEffect(() => {
    if (commentData) {
      alert.success("you have comment");
    }
  }, [commentData]);
};

export default useComments;
