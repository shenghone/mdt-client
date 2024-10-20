import * as Yup from "yup";

export const studentLoginSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is required"),
  lastName: Yup.string().required("last name is required"),

  classcode: Yup.string().required("Access code is required"),
});

export const teacherAdminLoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});
