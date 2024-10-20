import React, { useState, useEffect, useCallback } from "react";
// import { gsap } from "gsap";
import {
  NavBar,
  NavItem,
  DropDownMenu,
  DropDownItem,
} from "../../../../Components/NavBar2/NavBar";
import StudentTestWrapper from "./StudentTestWrapper";
import { ReactComponent as Search } from "../../../../Static/Icons/search-circle.svg";
import { ReactComponent as Caret } from "../../../../Static/Icons/caret-back-sharp.svg";
import { ReactComponent as Name } from "../../../../Static/Icons/Name.svg";
import StudentDashboardWrapper from "./StudentTestWrapper";
import Footer from "../../../../Components/Footer/Footer";
import {
  logOutAction,
  setCurrentStudentAction,
} from "../../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CaretForward } from "../../../../Static/Icons/caret-forward-sharp.svg";
import axios from "axios";

import { useHistory } from "react-router-dom";
import parse from "html-react-parser";
import PretestQuestions from "../../../../Pretest";
import { v4 as uuid4 } from "uuid";

// import { useDispatch } from "react-redux";
// import { logOutAction } from "../../../../redux/actions";
// import axios from "axios";

const initialState = {
  NN: 1,
  NO: 1,
  RP: 1,
  RE: 1,
  SS: 1,
  SM: 1,
  PD: 1,
  PC: 2,
};
export default () => {
  const history = useHistory();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    PretestQuestions[currentIdx]
  );
  const user = useSelector((state) => state.user.USER);
  const st = useSelector((state) => state.student.student);

  const dispatch = useDispatch();
  const logOut = () => dispatch(logOutAction());
  const setStudent = useCallback((s) => dispatch(setCurrentStudentAction(s)), [
    dispatch,
  ]);
  //const clearCurrentStudent = () => dispatch(clearCurrentStudentAction());
  const [result, setResult] = useState(initialState);
  const [answerArray, setAnswerArray] = useState([]);
  const getCurrentStudent = useCallback(async () => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BACK_END}/api/students/${user._id}`,
        {
          withCredentials: true,
        }
      );

      if (data) {
        setStudent(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [setStudent, user]);
  const handleTo = () => {
    history.push("/student/test");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target.option;
    if (!value) {
      return;
    }
    const { idx, answer, category } = currentQuestion;
    setAnswerArray([...answerArray, { ...currentQuestion, answered: answer }]);
    if (answer === value) {
      setResult((result) => ({
        ...result,
        [category]: result[category] + 1,
      }));
    }
    if (category !== "PC") {
      if (answer === value) {
        setCurrentIdx(() => currentIdx + 1);
      } else {
        if (idx % 2 === 0) {
          setCurrentIdx(() => currentIdx + 2);
        } else {
          setCurrentIdx(() => currentIdx + 1);
        }
      }
    } else {
      setCurrentIdx(() => currentIdx + 1);
    }
  };

  const handleBack = () => {
    const clonedArr = [...answerArray];
    const lastQuestion = clonedArr.pop();
    const { category } = currentQuestion;

    if (currentIdx % 2 === 1) {
      setResult((result) => ({
        ...result,
        [currentQuestion.category]: 1,
      }));
    }
    if (category === "PC") {
      setResult((result) => ({
        ...result,
        PC: 2,
      }));
    }
    setCurrentIdx(lastQuestion.idx);
    setAnswerArray(clonedArr);
  };
  useEffect(() => {
    if (st && !st.Pretest_result && currentIdx === 15) {
      const savePretest = async () => {
        try {
          const { data } = await axios({
            url: `${process.env.REACT_APP_BACK_END}/api/test`,
            method: "post",
            data: {
              Pretest_result: result,
              studentID: st._id,
            },
            withCredentials: true,
          });
          if (data) {
            getCurrentStudent();
          }
        } catch (err) {
          console.error(err);
        }
      };
      savePretest();
    }
  }, [st, currentIdx, getCurrentStudent, result]);

  useEffect(() => {
    if (currentIdx <= 14) {
      setCurrentQuestion(PretestQuestions[currentIdx]);
      if (currentIdx === 0) {
        setResult(initialState);
      }

      if (currentIdx % 2 !== 0 && currentIdx !== 15) {
        const clonedArr = [...answerArray];
        const lastQuestion = clonedArr.pop();
        setResult((result) => ({
          ...result,
          [lastQuestion.category]: 2,
        }));
      }
    }
  }, [currentIdx, answerArray]);

  const handleLogOut = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACK_END}/api/signOut`,
        withCredentials: true,
      });
      if (!data.user) {
        logOut();
        history.replace("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (user && user._id) {
      getCurrentStudent();
    }
  }, [user, setStudent, getCurrentStudent]);
  if (user && user.First_name && st) {
    return (
      <StudentDashboardWrapper>
        <div className="navContain">
          <NavBar
            id={`${user.First_name} ${user.Last_name}`}
            drop={
              <NavItem icon={<Caret />}>
                <DropDownMenu>
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
        {currentIdx <= 14 && !st.Pretest_result ? (
          <StudentTestWrapper>
            {/* innerRef={selectRef} */}

            <div className="mainContain">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="questionArea">
                  <div className="questionContainer">
                    <div className="question">
                      <div className="content">
                        <section className="questionTitle">
                          {parse(currentQuestion.title)}
                        </section>
                        {currentQuestion.img && (
                          <img
                            src={process.env.PUBLIC_URL + currentQuestion.img}
                            alt="question"
                          />
                        )}
                        {currentQuestion &&
                          currentQuestion.description.length > 0 && (
                            <section className="desc">
                              {parse(currentQuestion.description)}
                            </section>
                          )}
                      </div>
                      <ul>
                        {currentQuestion.options.map((o) => {
                          return Object.entries(o).map(([key, value], i) => {
                            return (
                              <li key={uuid4()}>
                                <label>
                                  <input
                                    type="radio"
                                    value={key}
                                    name="option"
                                  ></input>
                                  {parse(key)}) {parse(value)}
                                </label>
                              </li>
                            );
                          });
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="buttonArea">
                  {currentIdx !== 0 && (
                    <button
                      className="back"
                      type="button"
                      onClick={() => handleBack()}
                    >
                      <CaretForward />
                    </button>
                  )}

                  <button className="next" type="submit">
                    <CaretForward />
                  </button>
                </div>
              </form>
            </div>
          </StudentTestWrapper>
        ) : (
          <StudentTestWrapper>
            <div className="pretestResultWrapper">
              <div className="studentDisplay">
                <div className="titleContainer">
                  <h1>Good job!</h1>
                  <h4>You have just finished the pretest</h4>
                </div>
                <div className="buttonContainer">
                  <button onClick={() => handleTo()}>Proceed to test</button>
                  <br />
                  <button onClick={() => handleLogOut()}>Log Out</button>
                </div>
              </div>
            </div>
          </StudentTestWrapper>
        )}

        <div className="footerContain">
          <Footer />
        </div>
      </StudentDashboardWrapper>
    );
  }
  return null;
};
