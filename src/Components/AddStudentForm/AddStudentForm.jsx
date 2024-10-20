import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { StudentSchema } from "../../Schema";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClassroomInfo } from "../../util";
import AddStudentFormWrapper from "./Style/AddStudentFormWrapper";
import { setClassroomAction } from "../../redux/actions";
import axios from "axios";

export default ({ title, setOpen, open, ...rest }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { classroomID } = params;
  const { classroomInfo } = useSelector((state) => state.classroom);
  const setClassroom = useCallback((c) => dispatch(setClassroomAction(c)), [
    dispatch,
  ]);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    if (title === "Edit Profile") {
      const getStudent = async () => {
        console.log(open);
        try {
          const { data } = await axios(
            `${process.env.REACT_APP_BACK_END}/api/students/${open}`,
            {
              withCredentials: true,
            }
          );
          if (data) {
            setCurrentStudent(data);
          }
        } catch (err) {
          console.error(err);
        }
      };
      getStudent();
    }
  }, [title, open]);

  useEffect(() => {
    const getClass = async () => {
      const d = await getClassroomInfo(classroomID);
      setClassroom(d);
    };
    if (classroomID) {
      getClass();
    }
  }, [params, classroomID, setClassroom]);
  const handleSubmit = async (event, role) => {
    const { First_name, Last_name, Email, EmailType } = event;
    try {
      let data;
      if (title === "Student Profile") {
        const { data: newRegisteredStudent } = await axios({
          url: `${process.env.REACT_APP_BACK_END}/api/register`,
          method: "post",
          data: {
            First_name,
            Last_name,
            Email,
            EmailType,
            Grade: classroomInfo.Grade,
            AccessCode: classroomInfo.AccessCode,
          },
          withCredentials: true,
        });
        if (newRegisteredStudent) {
          data = newRegisteredStudent;
        }
      } else {
        const { data: updatedStudent } = await axios({
          url: `${process.env.REACT_APP_BACK_END}/api/students/${open}`,
          method: "put",
          data: {
            First_name,
            Last_name,
            Email,
            EmailType,
            Grade: classroomInfo.Grade,
            AccessCode: classroomInfo.AccessCode,
          },
          withCredentials: true,
        });
        if (updatedStudent) {
          data = updatedStudent;
        }
      }
      if (data) {
        const d = await getClassroomInfo(classroomInfo._id);
        setClassroom(d);
        setOpen(false);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  if (
    classroomInfo &&
    (title === "Student Profile" ||
      (title === "Edit Profile" && currentStudent))
  ) {
    return (
      <AddStudentFormWrapper>
        <section className="header">
          <div>{title}</div>
          <div onClick={() => setOpen(!open)}>x</div>
        </section>
        <div className="formbody">
          <Formik
            validationSchema={StudentSchema}
            initialValues={{
              First_name:
                title === "Edit Profile" ? currentStudent.User.First_name : "",
              Last_name:
                title === "Edit Profile" ? currentStudent.User.Last_name : "",
              Email: title === "Edit Profile" ? currentStudent.User.Email : "",
              EmailType: "5efd10ec16aee03c6f48673e",
              Grade: classroomInfo.Grade,
            }}
            onSubmit={(e) => handleSubmit(e, "student")}
          >
            {({
              errors,
              touched,
              setFieldValue,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                <section>
                  <label htmlFor="First_name">First Name*</label>

                  <Field name="First_name" type="text" />
                  {errors.First_name && touched.First_name ? (
                    <h6>{errors.First_name}</h6>
                  ) : null}
                </section>
                <section>
                  <label htmlFor="Last_name">Last Name*</label>

                  <Field name="Last_name" type="text" />
                  {errors.Last_name && touched.Last_name ? (
                    <h6>{errors.Last_name}</h6>
                  ) : null}
                </section>
                <section>
                  <label htmlFor="Email">Email*</label>

                  <Field name="Email" type="text" />
                  {errors.Email && touched.Email ? (
                    <h6>{errors.Email}</h6>
                  ) : null}
                </section>
                <section>
                  <label htmlFor="EmailType">Parent or Student Email:</label>

                  <Field name="EmailType" as="select">
                    <option
                      value="5efd10ec16aee03c6f48673e"
                      onClick={() => setFieldValue("EmailType")}
                    >
                      Parent
                    </option>
                    <option
                      value="5efd10e316aee03c6f48673d"
                      onClick={() => setFieldValue("EmailType")}
                    >
                      Student
                    </option>
                  </Field>
                  {errors.EmailType && touched.EmailType ? (
                    <h6>{errors.EmailType}</h6>
                  ) : null}
                </section>
                {/*disabled={isSubmitting}*/}
                <button type="submit">
                  {title === "Edit Profile" ? "Update" : "Add"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </AddStudentFormWrapper>
    );
  }
  return null;
};
