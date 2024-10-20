import { TEACHER } from "../constants";

const initialState = {
  classrooms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEACHER.SET_CLASSROOMS:
      return {
        ...state,
        classrooms: action.classrooms,
      };
    case TEACHER.CLEAR_CLASSROOMS:
      return {
        ...state,
        classrooms: [],
      };
    default:
      return state;
  }
};
