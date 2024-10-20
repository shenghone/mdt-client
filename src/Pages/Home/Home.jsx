import React, { useEffect, useState, useCallback } from "react";
import { handleTo } from "../../util";
import { Formik, Form, Field } from "formik";
import HomeWrapper from "./Style/HomeWrapper";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logInAction } from "../../redux/actions";
import {
  teacherAdminLoginSchema,
  studentLoginSchema,
} from "./ValidationSchema";

export default ({ history, match }) => {
  const {
    params: { role },
  } = match;
  const dispatch = useDispatch();
  const [resError, setResError] = useState(null);
  const logIn = useCallback((u) => dispatch(logInAction(u)), [dispatch]);
  const user = useSelector((state) => state.user.USER);
  const clearError = () => {
    setResError(null);
  };
  useEffect(() => {
    if (user && user.Role === "student") {
      history.push("/student");
    } else if (user && user.Role === "admin") {
      history.push("/admin");
    } else if (user && user.Role === "teacher") {
      history.push("/teacher");
    }
  }, [user]);
  const handleSubmit = async (values, role) => {
    const { email, password, classcode, firstName, lastName } = values;
    console.log(values);
    try {
      const { data } = await axios({
        method: "post",

        url: `${process.env.REACT_APP_BACK_END}/api/signIn/?role=${role}`,
        data: {
          firstName: firstName,
          lastName: lastName,
          classcode: classcode,
          Email: email,
          Password: password,
        },
        withCredentials: true,
      });
      if (data.user) {
        logIn(data.user);
        handleTo(`/${role}`);
      }
    } catch (err) {
      if (err && role !== "student") {
        setResError(err.response.data);
      } else if (err && role === "student") {
        setResError("Incorrect name/access code combination");
      } else if (err && err.response.data) {
        setResError(err.response.data);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <HomeWrapper>
      <section className="logoRow">
        <img
          src={process.env.PUBLIC_URL + "/MDTnewLogo.png"}
          alt="math test"
          onClick={() => history.push("/")}
        />
      </section>
      <section className="form-outter-wrapper">
        <h4>Welcome!</h4>
        <section className="role-section">
          <div
            onClick={() => history.push("/home/admin")}
            className={role === "admin" ? "current admin-login" : "admin-login"}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/Admin_Icon.png"}
              alt="admin"
            />
            <h4>Admin</h4>
          </div>
          <div
            onClick={() => history.push("/home/teacher")}
            className={
              role === "teacher" ? "current teacher-login" : "teacher-login"
            }
          >
            <img
              src={process.env.PUBLIC_URL + "/images/Teacher_Icon.png"}
              alt="teacher"
            />
            <h4>Teacher</h4>
          </div>
          <div
            onClick={() => history.push("/home/student")}
            className={
              role === "student" ? "current student-login" : "student-login"
            }
          >
            <img
              src={process.env.PUBLIC_URL + "/images/Student_Icon.png"}
              alt="student"
            />
            <h4>Student</h4>
          </div>
        </section>
        {role === "student" && (
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              classcode: "",
            }}
            validationSchema={studentLoginSchema}
            onSubmit={(values) => handleSubmit(values, role)}
          >
            {({ errors, touched, handleChange }) => (
              <Form>
                {/*name section*/}
                <section className="name fieldRow">
                  <section className="fieldRow">
                    <label htmlFor="firstName">First Name*</label>
                    <br />
                    <Field
                      name="firstName"
                      onChange={(e) => {
                        handleChange(e);
                        clearError();
                      }}
                    />
                    {errors.firstName && touched.firstName ? (
                      <h6 className="error">{errors.firstName}</h6>
                    ) : null}
                  </section>
                  <section className="fieldRow">
                    <label htmlFor="lastName">Last Name*</label>
                    <br />
                    <Field
                      name="lastName"
                      onChange={(e) => {
                        handleChange(e);
                        clearError();
                      }}
                    />
                    {errors.lastName && touched.lastName ? (
                      <h6 className="error">{errors.lastName}</h6>
                    ) : null}
                  </section>
                </section>
                {/*end of name section*/}
                {/*Classcode section*/}
                <section className="accessCode fieldRow">
                  <section>
                    <label htmlFor="classcode">Access Code*</label>
                    <br />
                    <Field
                      name="classcode"
                      type="text"
                      onChange={(e) => {
                        handleChange(e);
                        clearError();
                      }}
                    />
                    {resError ? (
                      <h6 className="error">{resError}</h6>
                    ) : errors.classcode && touched.classcode ? (
                      <h6 className="error">{errors.classcode}</h6>
                    ) : null}
                  </section>
                </section>
                {/* <section></section> */}
                {/*end of Classcode section*/}

                <button type="register">Log In</button>
                <section className="forgotPass"></section>
              </Form>
            )}
          </Formik>
        )}
        {(role === "admin" || role === "teacher") && (
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={teacherAdminLoginSchema}
            onSubmit={(values) => handleSubmit(values, role)}
          >
            {({ values, errors, touched, setValues, handleChange }) => (
              <Form>
                {/*email section*/}
                <section className="email fieldRow">
                  <section>
                    <label htmlFor="email">Email*</label>
                    <br />
                    <Field
                      name="email"
                      type="email"
                      onChange={(e) => {
                        handleChange(e);
                        clearError();
                      }}
                    />
                    {resError ? (
                      <h6 className="error">{resError}</h6>
                    ) : errors.email && touched.email ? (
                      <h6 className="error">{errors.email}</h6>
                    ) : null}
                  </section>
                </section>
                {/*end of email section*/}
                {/*password section*/}
                <section className="password fieldRow">
                  <section>
                    <label htmlFor="password">Password*</label>
                    <br />
                    <Field
                      name="password"
                      type="password"
                      onChange={(e) => {
                        handleChange(e);
                        clearError();
                      }}
                    />
                    {resError ? (
                      <h6 className="error">{resError}</h6>
                    ) : errors.password && touched.password ? (
                      <h6 className="error">{errors.password}</h6>
                    ) : null}
                  </section>
                </section>
                {/*end of password section*/}
                {/*password section*/}
                {/*errors.agree && touched.agree ? <h6>{errors.agree}</h6> : null*/}

                <button type="submit">Log In</button>
              </Form>
            )}
          </Formik>
        )}
      </section>
    </HomeWrapper>
  );
};
