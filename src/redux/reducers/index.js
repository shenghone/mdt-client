import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import classroomReducer from "./classroomReducer";
import teacherReducer from "./teacherReducer";
import studentReducer from "./studentReducer";
import testReducer from "./testReducer";

export default combineReducers({
  user: userReducer,
  teachers: adminReducer,
  classrooms: teacherReducer,
  questions: testReducer,
  classroom: classroomReducer,
  student: studentReducer,
});
