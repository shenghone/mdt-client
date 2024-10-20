import { TEST } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case TEST.SET_TEST:
      if (Array.isArray(action.newQuestion)) {
        return [...action.newQuestion];
      }
      return [...state, action.newQuestion];

    case TEST.CLEAR_TEST:
      return [];
    default:
      return state;
  }
};
