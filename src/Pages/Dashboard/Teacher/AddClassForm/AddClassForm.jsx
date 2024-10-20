// import React from "react";
// import { useForm, useStep } from "react-hooks-helper";

// // import Names from "./Names";
// // import Address from "./Address";
// // import Contact from "./Contact";
// // import Review from "./Review";
// // import Submit from "./Submit";

// import AddStudents from "./FormComponents/AddStudents";
// import ClassCode from "./FormComponents/ClassCode";

// import NameClass from "./FormComponents/NameClass";


// const steps = [
//   { id: "nameClass" },
//   { id: "addStudents" },
//   { id: "classCode" }
// ];

// const defaultData = {
//   nameClass: "",
//   classCode: "",
//   studentList: []
// };

// const AddTeacherForm = ({ images }) => {
//   const [formData, setForm] = useForm(defaultData);
//   const { step, navigation } = useStep({ initialStep: 0, steps });
//   const { id } = step;

//   const props = { formData, setForm, navigation };

//   switch (id) {
//     case "nameClass":
//       return <NameClass {...props} />;
//     case "addStudents":
//       return <AddStudents {...props} />;
//     case "classCode":
//       return <ClassCode {...props} />;
//     default:
//       return null;
//   }
// };

// export default AddTeacherForm;
