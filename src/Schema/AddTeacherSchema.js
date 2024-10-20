import * as Yup from "yup";

export default Yup.object().shape({
  First_name: Yup.string()
    .min(2, "Should be longer than 2 characters")
    .max(15, "Should be less than 15 characters")
    .required("Required"),
  Last_name: Yup.string()
    .min(2, "Should be longer than 2 characters")
    .max(15, "Should be less than 15 characters")
    .required("Required"),
  Email: Yup.string().email("Invalid Email").required("Required"),
  Available_tests: Yup.number().min(0).max(300).required("Required"),
});
