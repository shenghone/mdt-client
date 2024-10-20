import React, { useState, useCallback, useEffect } from "react";
import AddTeacherFormWrapper from "./Style/AddTeacherFormWrapper";
import { Formik, Form, Field } from "formik";
import AddTeacherSchema from "../../Schema/AddTeacherSchema";
import { getTeachers } from "../../util";
import { useDispatch } from "react-redux";
import { setTeachersAction } from "../../redux/actions";

import axios from "axios";

export default ({ title, setOpen, open, ...rest }) => {
  //const [setResError] = useState(null);

  const dispatch = useDispatch();
  const setTeachers = useCallback((t) => dispatch(setTeachersAction(t)), [
    dispatch,
  ]);
  const [currentTeacher, setCurrentTeacher] = useState(null);

  useEffect(() => {
    const getCurrentTeacherInfo = async () => {
      try {
        const { data } = await axios(
          `${process.env.REACT_APP_BACK_END}/api/teachers/${open}`,
          {
            withCredentials: true,
          }
        );

        if (data) {
          setCurrentTeacher(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (title === "Edit Teacher info" && open) {
      getCurrentTeacherInfo();
    }
  }, [open, title]);
  const handleSubmit = async (values, role) => {
    const { First_name, Last_name, Email, Available_tests } = values;

    try {
      if (title === "Add a teacher") {
        const { data } = await axios({
          method: "post",
          url: `${process.env.REACT_APP_BACK_END}/api/register/?role=teacher`,
          data: {
            First_name,
            Last_name,
            Email,
            Available_tests,
          },
          withCredentials: true,
        });
        if (data) {
          const d = await getTeachers();
          setTeachers(d);
          setOpen(false);
        }
      } else {
        const { data } = await axios({
          method: "put",
          url: `${process.env.REACT_APP_BACK_END}/api/teachers/${currentTeacher.User._id}`,
          data: {
            First_name,
            Last_name,
            Email,
            Available_tests,
          },
          withCredentials: true,
        });
        if (data) {
          const d = await getTeachers();
          setTeachers(d);
          setOpen(false);
        }
      }
    } catch (err) {
      if (err) {
        console.log(err.response.data);
      }
    }
  };
  if (
    title !== "Edit Teacher info" ||
    (title === "Edit Teacher info" && currentTeacher)
  ) {
    return (
      <AddTeacherFormWrapper>
        <section className="header">
          <div>{title}</div>
          <div onClick={() => setOpen(!open)}>x</div>
        </section>
        <div className="formbody">
          <Formik
            validationSchema={AddTeacherSchema}
            initialValues={{
              First_name:
                title === "Edit Teacher info"
                  ? currentTeacher.User.First_name
                  : "",
              Last_name:
                title === "Edit Teacher info"
                  ? currentTeacher.User.Last_name
                  : "",
              Email:
                title === "Edit Teacher info" ? currentTeacher.User.Email : "",
              Available_tests:
                title === "Edit Teacher info"
                  ? currentTeacher.Available_tests
                  : "",
            }}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              touched,

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
                  <label htmlFor="Available_tests">
                    No. of tests assigned*
                  </label>

                  <Field name="Available_tests" type="number" />
                  {errors.Available_tests && touched.Available_tests ? (
                    <h6>{errors.Available_tests}</h6>
                  ) : null}
                </section>

                <button type="submit" disabled={isSubmitting}>
                  {title === "Edit" ? "Update" : "Add"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </AddTeacherFormWrapper>
    );
  }
  return null;
};
