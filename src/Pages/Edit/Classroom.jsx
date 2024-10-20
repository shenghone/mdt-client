import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ClassroomWrapper from "./Style/ClassroomWrapper";
import {
  setClassroomAction,
  clearCurrentStudentAction,
  clearClassroomAction,
} from "../../redux/actions";
import { getClassroomInfo } from "../../util";
import { ReactComponent as Name } from "../../Static/Icons/Name.svg";
import { ReactComponent as Search } from "../../Static/Icons/search-circle.svg";
import { ReactComponent as Caret } from "../../Static/Icons/caret-back-sharp.svg";
import { ReactComponent as CaretNext } from "../../Static/Icons/caret-forward-sharp.svg";

import {
  Footer,
  NavBar,
  NavItem,
  DropDownMenu,
  DropDownItem,
  ClassroomStudentTable,
} from "../../Components";
import { gsap } from "gsap";

import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const params = useParams();
  const { classroomID } = params;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const clearStudent = () => dispatch(clearCurrentStudentAction());
  const clearClassroom = () => dispatch(clearClassroomAction());
  const currentClassroom = useSelector(
    (state) => state.classroom.classroomInfo
  );
  const handleTo = (p) => {
    clearClassroom();
    clearStudent();
    history.push(p);
  };

  const setClassroom = useCallback((c) => dispatch(setClassroomAction(c)), [
    dispatch,
  ]);
  const { state } = location;

  const [step, setStep] = useState(2);
  const innerBarRef = useRef();
  const user = useSelector((state) => state.user.USER);
  useEffect(() => {
    if (innerBarRef && innerBarRef.current && step) {
      gsap.to(innerBarRef.current, 1, {
        width: `${step * (1 / 3) * 100}%`,
      });
    }
  }, [step]);
  const handleDecrement = () => {
    if (step >= 3) {
      setStep(() => step - 1);
    } else if (step === 2) {
      history.push("/teacher");
    }
  };

  useEffect(() => {
    const getClass = async (classroomID) => {
      const d = await getClassroomInfo(classroomID);
      setClassroom(d);
    };

    if (classroomID) {
      getClass(classroomID);
    }

    return () => {
      setClassroom(null);
    };
  }, [classroomID, setClassroom]);

  if (user && currentClassroom && state) {
    return (
      <ClassroomWrapper step={step}>
        <div className="navContain">
          <NavBar
            id={`${user.First_name} ${user.Last_name}`}
            drop={
              <NavItem icon={<Caret />}>
                <DropDownMenu>
                  <DropDownItem>Archive</DropDownItem>
                  <DropDownItem>Help</DropDownItem>
                  <DropDownItem text={"logout"}>Logout</DropDownItem>
                </DropDownMenu>
              </NavItem>
            }
          >
            <NavItem icon={<Search />}></NavItem>
            <NavItem icon={<Name />}></NavItem>
          </NavBar>
        </div>
        <div className="content">
          <section className="buttonArea">
            <div className="toDashboard">
              <button onClick={() => handleTo("/teacher")}>
                <i className="fas fa-arrow-alt-circle-left"></i>
              </button>
              <div></div>
            </div>
            <div className="title">
              <h3>
                {state && state.Mode
                  ? currentClassroom.ClassName
                  : "Add students"}
              </h3>
              <div />
            </div>
            {state && state.Mode !== "Edit" && (
              <div className="backAndForwardRow">
                <button
                  className="buttonWrapper"
                  onClick={() => handleDecrement()}
                >
                  <Caret />
                </button>
                <div />
                {step === 2 && (
                  <button
                    className="buttonWrapper"
                    onClick={() => setStep(() => step + 1)}
                  >
                    <CaretNext />
                  </button>
                )}
              </div>
            )}
          </section>
          {!state.Mode && (
            <section className="barArea">
              <div className="barWrapper">
                <div className="innerBar" ref={innerBarRef}></div>
              </div>
            </section>
          )}
          {step === 2 && currentClassroom && (
            <ClassroomStudentTable Grade={currentClassroom.Grade} />
          )}
          {step === 3 && (
            <div className="accessCodeArea">
              <div>
                <h2>Access code for this class</h2>
                <h2>{currentClassroom.AccessCode}</h2>
                <button onClick={() => handleTo("/teacher")}>
                  Go to dashboard
                </button>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </ClassroomWrapper>
    );
  }
  return null;
};
