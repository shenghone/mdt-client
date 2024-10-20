import { CLASSROOM } from "../constants";

const initialState = {
  classroomInfo: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLASSROOM.SET_STUDENTS:
      return {
        ...state,
        classroomInfo: action.classroomInfo,
      };
    case CLASSROOM.CLEAR_STUDENTS:
      return {
        ...state,
        classroomInfo: null,
      };
    default:
      return state;
  }
};
