import { CLASSROOM } from "../constants";

export const setClassroomAction = (classroomInfo) => ({
  type: CLASSROOM.SET_STUDENTS,
  classroomInfo,
});

export const clearClassroomAction = () => ({
  type: CLASSROOM.CLEAR_STUDENTS,
});
