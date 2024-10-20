import { USER } from "../constants";

const initialState = {
  USER: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER.SET_CURRENT_USER:
      return {
        ...state,
        USER: action.user,
      };
    case USER.LOGOUT_CURRENT_USER:
      return {
        ...state,
        USER: null,
      };
    default:
      return state;
  }
};
