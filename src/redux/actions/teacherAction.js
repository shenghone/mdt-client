import { TEACHER } from "../constants";

export const setClassroomsAction = (classrooms) => ({
  type: TEACHER.SET_CLASSROOMS,
  classrooms,
});

export const clearClassroomsAction = () => ({
  type: TEACHER.CLEAR_CLASSROOMS,
});
