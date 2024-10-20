import { ADMIN } from "../constants";

export const setTeachersAction = (teachers) => ({
  type: ADMIN.SET_TEACHERS,
  teachers,
});

export const clearTeachersAction = () => ({
  type: ADMIN.CLEAR_TEACHERS,
});
