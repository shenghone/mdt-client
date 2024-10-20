import { USER } from "../constants";

export const logInAction = (user) => ({
  type: USER.SET_CURRENT_USER,
  user,
});

export const logOutAction = () => ({
  type: USER.LOGOUT_CURRENT_USER,
  user: null,
});
