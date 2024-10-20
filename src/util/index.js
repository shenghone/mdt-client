export { default as getTeachers } from "./getTeachers";
export { default as getDaysUntilSubEnds } from "./getDaysUntilSubEnds";
export { default as getClassroomInfo } from "./getClassroomInfo";
export { default as getStudent } from "./getStudent";
export { default as getOrganizedData } from "./getOrganizedData";
export const handleTo = (history, to, param = null) => {
  param ? history.push(`${to}/${param}`) : history.push(to);
};
