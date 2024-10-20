import React from "react";
import SignUpFormWrapper from "./Style/SignUpFormWrapper";
import { useHistory } from "react-router-dom";
import SignUpSchema from "../../Schema/SignUpSchema";
import Name from "../../Static/Icons/Name.svg";
import Email from "../../Static/Icons/Email.svg";
import Password from "../../Static/Icons/Password.svg";

import { Formik, Form, Field } from "formik";

export default ({ role, ...rest }) => {
  const history = useHistory();
  const handleTo = (to) => {
    history.push(to);
  };
  const getOtherRole = (currentRole) => {
    switch (currentRole) {
      case "admin":
        return "teacher";
      case "teacher":
        return "admin";
      default:
        return;
    }
  };
  return (
    <SignUpFormWrapper>
      <h2>Create your {role} account</h2>
      <Formik
        validationSchema={SignUpSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          agree: false,
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched }) => (
          <Form>
            {/*name section*/}
            <section>
              <section>
                <img src={Name} alt="name icon" />
              </section>
              <section>
                <label htmlFor="firstName">First Name*</label>
                <br />
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <h6>{errors.firstName}</h6>
                ) : null}
              </section>
              <section>
                <label htmlFor="lastName">Last Name*</label>
                <br />
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <h6>{errors.lastName}</h6>
                ) : null}
              </section>
            </section>
            {/*end of name section*/}
            {/*email section*/}
            <section>
              <section>
                <img src={Email} alt="email icon" />
              </section>
              <section>
                <label htmlFor="email">Email*</label>
                <br />
                <Field name="email" type="email" />
                {errors.email && touched.email ? <h6>{errors.email}</h6> : null}
              </section>
            </section>
            {/*end of email section*/}
            {/*password section*/}
            <section>
              <secion>
                <img src={Password} alt="password icon" />
              </secion>
              <section>
                <label htmlFor="password">Password*</label>
                <br />
                <Field name="password" type="password" />
                {errors.password && touched.password ? (
                  <h6>{errors.password}</h6>
                ) : null}
              </section>
            </section>
            {/*end of password section*/}
            {/*password section*/}
            <section>
              <section>
                <img src={Password} alt="password icon" />
              </section>
              <section>
                <label htmlFor="confirmPassword">Confirm Password*</label>
                <br />
                <Field name="confirmPassword" type="password" />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <h6>{errors.confirmPassword}</h6>
                ) : null}
              </section>
            </section>
            <section>
              <Field name="agree" type="checkbox" />

              <div>
                I have read the <span>Terms and Conditions</span>
                <br />
                Not a teacher?{" "}
                <span
                  onClick={() =>
                    role === "teacher"
                      ? handleTo("/signUp/admin")
                      : handleTo("/signUp/teacher")
                  }
                >
                  Create an {getOtherRole(role)} account!
                </span>
              </div>
              {errors.agree && touched.agree ? <h6>{errors.agree}</h6> : null}
            </section>

            <button type="register">Register</button>
          </Form>
        )}
      </Formik>
    </SignUpFormWrapper>
  );
};
