import * as Yup from "yup";

export default Yup.object().shape({
  ClassName: Yup.string().min(3).max(30).required("Class name is required"),
  Grade: Yup.number().min(1).max(9).required("Grade is required"),
});
