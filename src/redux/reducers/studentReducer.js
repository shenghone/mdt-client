import { STUDENT } from "../constants";

const initialState = {
  student: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STUDENT.SET_CURRENT_STUDENT:
      return {
        ...state,
        student: action.student,
      };
    case STUDENT.CLEAR_CURRENT_STUDENT:
      return {
        ...state,
        student: action.student,
      };
    default:
      return state;
  }
};
