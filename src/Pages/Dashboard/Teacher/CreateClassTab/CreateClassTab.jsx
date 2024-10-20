import React, { useEffect, useRef, useCallback } from "react";
import CreateClassTabWrapper from "./Style/CreateClassTabWrapper";
import { gsap } from "gsap";
import { useDispatch } from "react-redux";
import { ReactComponent as CaretForward } from "../../../../Static/Icons/caret-forward-sharp.svg";
import { Formik, Form, Field } from "formik";
import CreateClassroomSchema from "../../../../Schema/CreateClassroomSchema";
import axios from "axios";

import { getClassroomInfo } from "../../../../util";
import { useHistory } from "react-router-dom";
import { setClassroomAction } from "../../../../redux/actions";
import { v4 as uuid4 } from "uuid";

export default ({ setNewTab }) => {
  const step = 1;
  const selectRef = useRef();

  const dispatch = useDispatch();
  const setClassroom = useCallback((c) => dispatch(setClassroomAction(c)), [
    dispatch,
  ]);

  const innerBarRef = useRef();
  const history = useHistory();
  const GRADE_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    if (innerBarRef && innerBarRef.current) {
      gsap.to(innerBarRef.current, 1, {
        width: `${step * (1 / 3) * 100}%`,
      });
    }
  }, [step]);

  const handleSubmit = async (e) => {
    const { ClassName, Grade } = e;
    try {
      const { data } = await axios({
        url: `${process.env.REACT_APP_BACK_END}/api/classrooms`,
        method: "post",
        data: {
          ClassName,
          Grade,
        },
        withCredentials: true,
      });

      if (data) {
        const d = await getClassroomInfo(data.newClassroom._id);
        setClassroom(d);
        history.push({
          pathname: `/classroom/${data.newClassroom._id}`,
          state: {},
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CreateClassTabWrapper step={step}>
      <Formik
        innerRef={selectRef}
        validationSchema={CreateClassroomSchema}
        initialValues={{
          ClassName: "",
          Grade: 0,
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        {({
          values,
          errors,
          touched,
          setValues,
          handleChange,
          setFieldValue,
        }) => (
          <Form className="form">
            <section className="buttonArea">
              <section className="backToTeacher">
                <div className="iconWrapper" onClick={() => setNewTab(false)}>
                  <i className="fas fa-arrow-alt-circle-left"></i>
                </div>
              </section>
              <section className="title">Create a new class</section>
              <section className="nextAndBack">
                <div
                  className="iconWrapper left"
                  onClick={() => setNewTab(false)}
                >
                  <button type="button" className="iconWrapper">
                    <CaretForward />
                  </button>
                </div>

                <div className="iconWrapper right">
                  <button type="submit" className="iconWrapper">
                    <CaretForward />
                  </button>
                </div>
              </section>
            </section>
            <section className="contentArea">
              <div className="bar">
                <div className="innerBar" ref={innerBarRef}></div>
              </div>
              <div className="content">
                <section className="Title">
                  <h1>Enter a custom name for your Class</h1>
                </section>
                <section className="ClassName">
                  <section>
                    <Field
                      name="ClassName"
                      type="text"
                      placeholder="Enter classroom name here"
                    />
                    {errors.ClassName && touched.ClassName ? (
                      <span>{errors.ClassName}</span>
                    ) : null}
                  </section>
                </section>
                <section className="Grade">
                  <section className="selectField">
                    <Field name="Grade" as="select">
                      <option className="selection" value={0}>
                        Select Grade
                      </option>
                      {[...GRADE_ARR].map((g) => {
                        return (
                          <option
                            value={g}
                            onClick={() => setFieldValue("Grade")}
                            key={uuid4()}
                          >
                            {g}
                          </option>
                        );
                      })}
                    </Field>
                    {errors.Grade && touched.Grade ? (
                      <span>{errors.Grade}</span>
                    ) : null}
                  </section>
                </section>
              </div>
            </section>
          </Form>
        )}
      </Formik>
    </CreateClassTabWrapper>
  );
};
