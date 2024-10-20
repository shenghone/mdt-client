import React, { useState } from "react";
import LogInFormWrapper from "./Style/LoginFormWrapper";
import { useHistory } from "react-router-dom";
import {
  studentLoginSchema,
  teacherAdminLoginSchema,
} from "../../Schema/LogInSchema";
import { logInAction } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Name, Email, Password, Classcode } from "../../Static/Icons";
import axios from "axios";
import { Formik, Form, Field } from "formik";

export default ({ role, ...rest }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logIn = (user) => dispatch(logInAction(user));
  const [resError, setResError] = useState(null);
  const clearError = () => {
    setResError(null);
  };
  const handleTo = (to) => {
    history.push(to);
  };

  const handleSubmit = async (values, role) => {
    const { email, password, classcode, firstName, lastName } = values;

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
      console.log(data);
      if (data.user) {
        logIn(data.user);
        handleTo(`/${role}`);
      }
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
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
  if (role !== "student") {
    return (
      <LogInFormWrapper>
        <section className="switcher">
          <div>
            {role === "teacher" && (
              <div className="isTeacher">
                <button
                  className="switcherButton2"
                  onClick={() => handleTo("/login/admin")}
                >
                  Admin
                </button>
                <button
                  className="switcherButton2"
                  onClick={() => handleTo("/login/teacher")}
                >
                  Teacher
                </button>
              </div>
            )}
            {role === "admin" && (
              <div className="isAdmin">
                <button
                  className="switcherButton1"
                  onClick={() => handleTo("/login/admin")}
                >
                  Admin
                </button>
                <button
                  className="switcherButton1"
                  onClick={() => handleTo("/login/teacher")}
                >
                  Teacher
                </button>
              </div>
            )}
          </div>
        </section>
        {/* <h2>Log In to your {role} account</h2> */}
        <h2>Welcome Back!</h2>
        <Formik
          validationSchema={teacherAdminLoginSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => handleSubmit(values, role)}
        >
          {({ values, errors, touched, setValues, handleChange }) => (
            <Form>
              {/*email section*/}
              <section className="email">
                <section>
                  <img src={Email} alt="email icon" />
                </section>
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
                  {errors.email && touched.email ? (
                    <h6>{errors.email}</h6>
                  ) : null}
                </section>
              </section>
              {/*end of email section*/}
              {/*password section*/}
              <section>
                <section>
                  <img src={Password} alt="password icon" />
                </section>
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
                    <h6>{resError}</h6>
                  ) : errors.password && touched.password ? (
                    <h6>{errors.password}</h6>
                  ) : null}
                </section>
              </section>
              {/*end of password section*/}
              {/*password section*/}
              {/*errors.agree && touched.agree ? <h6>{errors.agree}</h6> : null*/}

              <button type="submit">Log In</button>
              <section className="forgotPass">
                <h5>Forgot your Password?</h5>
              </section>
            </Form>
          )}
        </Formik>
      </LogInFormWrapper>
    );
  }
  return (
    <LogInFormWrapper>
      <h2>Log in as {role}</h2>
      <Formik
        validationSchema={studentLoginSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          classcode: "",
        }}
        onSubmit={(values) => handleSubmit(values, role)}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            {/*name section*/}
            <section className="name">
              <section>
                <img src={Name} alt="name icon" />
              </section>
              <section>
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
                  <h6>{errors.firstName}</h6>
                ) : null}
              </section>
              <section>
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
                  <h6>{errors.lastName}</h6>
                ) : null}
              </section>
            </section>
            {/*end of name section*/}
            {/*Classcode section*/}
            <section>
              <section>
                <img src={Classcode} alt="Classcode Icon" />
              </section>
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
                  <h6>{resError}</h6>
                ) : errors.classcode && touched.classcode ? (
                  <h6>{errors.classcode}</h6>
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
    </LogInFormWrapper>
  );
};
