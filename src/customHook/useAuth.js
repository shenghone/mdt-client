import { useEffect, useCallback } from "react";
import { logInAction } from "../redux/actions";
import { useDispatch } from "react-redux";

import axios from "axios";

export default () => {
  const dispatch = useDispatch();
  const logIn = useCallback((user) => dispatch(logInAction(user)), [dispatch]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`${process.env.REACT_APP_BACK_END}/api/me`, {
        withCredentials: true,
      });
      if (data) {
        logIn(data.user);
      }
    };
    getUser();
  }, [logIn]);
};
