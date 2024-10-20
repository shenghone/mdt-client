import * as Yup from "yup";

export default Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Should be longer than 2 characters")
    .max(15, "Should be less than 15 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Should be longer than 2 characters")
    .max(15, "Should be less than 15 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
      "Password should at least contain 1 lower case letter, 1 Capital letter, 1 special character and 1 number"
    )
    .min(6, "Should be longer than 6 characters")
    .max(15, "Should be shorter than 15 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  agree: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});
