import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  NavBar,
  NavItem,
  DropDownMenu,
  DropDownItem,
} from "../../../../Components/NavBar2/NavBar";
import StudentTestWrapper from "./Style/TestWrapper";
import { ReactComponent as Search } from "../../../../Static/Icons/search-circle.svg";
import { ReactComponent as Caret } from "../../../../Static/Icons/caret-back-sharp.svg";
import { ReactComponent as Name } from "../../../../Static/Icons/Name.svg";
import StudentDashboardWrapper from "./Style/TestWrapper";
import Footer from "../../../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CaretForward } from "../../../../Static/Icons/caret-forward-sharp.svg";
import axios from "axios";
import Modal from "./Modal/Modal";
import { useHistory } from "react-router-dom";
import {
  setCurrentStudentAction,
  setTestAction,
  // logOutAction,
} from "../../../../redux/actions";

import { v4 as uuid4 } from "uuid";
import parse from "html-react-parser";

export default () => {
  const [option, setOption] = useState("");
  const dispatch = useDispatch();
  const [logOutModal, setLogOutModal] = useState(false);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const setStudent = useCallback((s) => dispatch(setCurrentStudentAction(s)), [
    dispatch,
  ]);
  const setQuestion = useCallback((s) => dispatch(setTestAction(s)), [
    dispatch,
  ]);
  const testWrapperRef = useRef();
  const modalRef = useRef();
  // const logOut = useCallback(() => dispatch(logOutAction()), [dispatch]);
  const questions = useSelector((state) => state.questions);
  const student = useSelector((state) => state.student.student);
  const user = useSelector((state) => state.user.USER);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [finishedTest, setFinished] = useState(false);
  const [final, setFinal] = useState(false);
  const resultRef = useRef(null);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleTo = (to) => {
    history.push(to);
  };

  const finalLogOut = () => {
    setFinal(true);
  };
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
  }, [user, setStudent]);

  const getNextQuestion = async (e) => {
    e.preventDefault();

    const { value } = e.target.option;

    try {
      if (value) {
        const { data } = await axios({
          url: `${process.env.REACT_APP_BACK_END}/api/question`,
          method: "post",
          data: {
            Pretest_result: student.Pretest_result,
            DATA: questions,
            value: value,
            Test: student.Test._id,
          },
          withCredentials: true,
        });

        if (data) {
          if (data === "end") {
            setFinished(true);
            setOpen(false);
            getCurrentStudent();
          } else {
            setQuestion(data.testFound.DATA);
            setOpen(false);
            setOption("");
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const cur = [...questions];
    setCurrentQuestion(cur.pop());
  }, [questions]);

  const handleShow = (e) => {
    setDontShow(!dontShow);
  };

  const handleCancel = () => {
    if (dontShow) {
      setDontShow(false);
    }
    setOpen(false);
  };
  console.log(student);
  useEffect(() => {
    
    if (student && student.Test.Test_Completion) {
      setFinished(true);
    }
  }, [student]);
  //first loaded
  useEffect(() => {
    if (user && user._id) {
      console.log("line 139")
      getCurrentStudent();
    }
  }, [user, setStudent, getCurrentStudent]);
  useEffect(()=>{
    console.log("yea")
  },[])
  //first mounted, get previous questions
  //if there's any
  useEffect(() => {
    const getQuestion = async () => {
      try {
        if (student.Test.DATA && student.Test.DATA[0]!==null &&student.Test.DATA.length > 0) {
          console.log("block 1")
          setQuestion(student.Test.DATA);
        } else if (student.Test.Test_Completion) {
          console.log("block 2")
          setFinished(true);
        } else {
          console.log("block 3")
          const { data } = await axios({
            url: `${process.env.REACT_APP_BACK_END}/api/question`,
            method: "post",
            data: {
              Pretest_result: student.Pretest_result,
              DATA: null,
              Test: student.Test._id,
            },
            withCredentials: true,
          });

          setQuestion(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (student) {
      //console.log("line 174")
      getQuestion();
    }
  }, [student, setQuestion]);

  if (user && student && questions) {
    return (
      <StudentDashboardWrapper open={open}>
        <div className="navContain">
          <NavBar
            id={`${user.First_name} ${user.Last_name}`}
            drop={
              <NavItem icon={<Caret />}>
                <DropDownMenu>
                  <DropDownItem>Help</DropDownItem>
                  <DropDownItem
                    text={!finishedTest ? "testLogOut" : "logout"}
                    current={finishedTest}
                    setLogOutModal={setLogOutModal}
                  >
                    Logout
                  </DropDownItem>
                </DropDownMenu>
              </NavItem>
            }
          >
            <NavItem icon={<Search />}></NavItem>
            <NavItem icon={<Name />}></NavItem>
          </NavBar>
        </div>
        {!finishedTest && !student.Test.Test_Completion && currentQuestion && (
          <StudentTestWrapper ref={testWrapperRef}>
            {logOutModal && (
              <Modal
                setLogOutModal={setLogOutModal}
                text="<p>Your progress has been saved. <br/>Are you sure you want to log out?</p>"
              />
            )}
            <div className="mainContain">
              <form onSubmit={(e) => getNextQuestion(e)}>
                {open && (
                  <section className="modal" ref={modalRef}>
                    <div className="modal-header">
                      <span className="warning">Warning</span>
                    </div>
                    <div className="modal-content">
                      <p>
                        You will not be able to come back.
                        <br />
                        Are you sure you want to proceed?
                      </p>
                      <section>
                        <input
                          type="checkbox"
                          name="show"
                          checked={dontShow}
                          onChange={(e) => handleShow(e)}
                        />
                        Don't remind me again this section
                        <br />
                        <section className="buttonSection">
                          <button type="submit" value="Submit">
                            Proceed
                          </button>
                          <button onClick={() => handleCancel()}>Cancel</button>
                        </section>
                      </section>
                    </div>
                  </section>
                )}
                <div className="questionArea">
                  <div className="questionContainer">
                    <div className="question">
                      <div className="content">
                        <h6 className="questionNum">
                          Question {questions.length-1}
                        </h6>
                        <section className="questionTitle">
                          {parse(currentQuestion.Title)}
                        </section>
                        {currentQuestion.img && (
                          <img
                            src={process.env.PUBLIC_URL + currentQuestion.img}
                            alt="question"
                          />
                        )}
                        {currentQuestion && currentQuestion.Desc.length > 0 && (
                          <section className="desc">
                            {parse(currentQuestion.Desc)}
                          </section>
                        )}
                      </div>

                      <ul>
                        {currentQuestion.Options.map((o) => {
                          return Object.entries(o).map(([key, value], i) => {
                            return (
                              <li key={uuid4()}>
                                {key !== "img" && value !== "img" && (
                                  <label>
                                    <input
                                      type="radio"
                                      value={key}
                                      name="option"
                                      checked={option === key ? true : false}
                                      onChange={(e) => handleOptionChange(e)}
                                    ></input>
                                    {key}) {parse(value)}
                                  </label>
                                )}
                                {value === "img" && (
                                  <label
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      value={key}
                                      name="option"
                                      checked={option === key ? true : false}
                                      onChange={(e) => handleOptionChange(e)}
                                    ></input>
                                    {key})
                                    <img
                                      style={{
                                        margin: "0",
                                        maxWidth: "300px",
                                        height: "100%",
                                        minHeight: "50px",
                                        objectFit: "contain",
                                        maxHeight: "80px",
                                      }}
                                      src={process.env.PUBLIC_URL + o.img}
                                      alt="question"
                                    />
                                  </label>
                                )}
                              </li>
                            );
                          });
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="buttonArea">
                  {dontShow && (
                    <button className="next" type="submit">
                      <CaretForward />
                    </button>
                  )}
                  {!dontShow && (
                    <button
                      className="next"
                      type="button"
                      onClick={() => setOpen(true)}
                    >
                      <CaretForward />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </StudentTestWrapper>
        )}
        {finishedTest && (
          <StudentTestWrapper final={final}>
            <div className="pretestResultWrapper" ref={resultRef}>
              {final && (
                <Modal
                  text={"<p>Are you sure you want to log out?</p>"}
                  setLogOutModal={setFinal}
                />
              )}
              <div className="studentDisplay">
                <div className="titleContainer">
                  <h1>Congratulations</h1>
                  <h4>You have just finished the test.</h4>
                </div>
                <div className="buttonContainer">
                  <button
                    onClick={() =>
                      handleTo(`/student/result/${student.User._id}`)
                    }
                  >
                    Check results
                  </button>
                  <br />
                  <button onClick={() => finalLogOut()}>Log Out</button>
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
