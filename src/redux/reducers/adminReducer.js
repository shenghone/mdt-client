import { ADMIN } from "../constants";

const initialState = {
  teachers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN.SET_TEACHERS:
      return {
        ...state,
        teachers: action.teachers,
      };
    case ADMIN.CLEAR_TEACHERS:
      return {
        ...state,
        teachers: [],
      };
    default:
      return state;
  }
};
