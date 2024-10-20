import { STUDENT } from "../constants";

export const setCurrentStudentAction = (student) => ({
  type: STUDENT.SET_CURRENT_STUDENT,
  student,
});

export const clearCurrentStudentAction = () => ({
  type: STUDENT.CLEAR_CURRENT_STUDENT,
  student: null,
});
