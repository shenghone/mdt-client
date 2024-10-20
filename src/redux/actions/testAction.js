import { TEST } from "../constants";

export const setTestAction = (newQuestion) => ({
  type: TEST.SET_TEST,
  newQuestion,
});

export const clearTestAction = () => ({
  type: TEST.CLEAR_TEST,
});
