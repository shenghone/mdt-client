import React, { useState, useEffect } from "react";
import Logo from "../../../Static/LogoWhiteText.png";
import ResultCategoryWrapper from "./ResultCategoryWrapper";
import Footer from "../../../Components/Footer/Footer";
import Confetti from "../../../Static/Confetti.jpg";

import { getOrganizedData } from "../../../util";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default ({ location }) => {
  const params = useParams();
  const history = useHistory();

  const [currentStudent, setCurrentStudent] = useState(null);
  const [organizedData, setOrganizedData] = useState(null);

  const user = useSelector((state) => state.user.USER);
  const student = useSelector((state) => state.student.student);
  const t = useSelector((state) => state.student);

  //use current user id to query student's data
  useEffect(() => {
    const getStudent = async (studentID) => {
      try {
        const { data } = await axios(
          `${process.env.REACT_APP_BACK_END}/api/students/${studentID}`,
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

    if (params && params.studentID) {
      getStudent(params.studentID);
    }
  }, [params]);

  const handleTo = (path) => {
    history.push({
      pathname: path,
      state: location.state,
    });
  };

  useEffect(() => {
    if (currentStudent && user && currentStudent.DATA) {
      const { DATA } = currentStudent.Test;
      const { Grade, Pretest_result } = currentStudent;
      const getData = async () => {
        try {
          const d = await getOrganizedData(Grade, DATA, Pretest_result);
          setOrganizedData(d);
        } catch (err) {
          console.error(err);
        }
      };
      getData();
    }
  }, [currentStudent, user]);
  const handleBackToClassroom = () => {
    const { state } = location;

    history.push({
      pathname: `/classroom/${state.Classroom}`,
      state: {
        Mode: "Edit",
      },
    });
  };

  const handleBackToOverview = () => {
    const { state } = location;
    //params.studentID
    history.push({
      pathname: `/student/result/${params.studentID}`,
      state,
    });
  };

  return (
    <ResultCategoryWrapper>
      <div className="header">
        <img src={Logo} alt="deenstrong" onClick={() => handleTo("/")} />
        <div className="backToOverview" onClick={() => handleBackToOverview()}>
          Back to overview
        </div>
        {location.state && location.state.Role === "teacher" && (
          <div
            className="backToClassroom"
            onClick={() => handleBackToClassroom()}
          >
            Back to classroom
          </div>
        )}
        <div className="supportCentreWrapper" onClick={() => handleTo("/help")}>
          <i className="fas fa-question-circle"></i>
          <div className="supportCentre">Support Centre</div>
        </div>
      </div>
      <div className="contentWrapper">
        <div className="confetti">
          <img src={Confetti} alt="Confetti" />
          <h2>Category Breakdown</h2>
        </div>
        <div className="mainContainer">
          <div className="navContainer">
            <div className="navTitle">Content</div>
            <div className="navLinks">
              <div
                className="navLink activeLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/intro/${currentStudent.User._id}`
                  )
                }
              >
                Introduction
              </div>
              <div
                className="navLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/number/${currentStudent.User._id}`
                  )
                }
              >
                Number Sense
              </div>
              <div
                className="navLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/operation/${currentStudent.User._id}`
                  )
                }
              >
                Operations
              </div>
              <div
                className="navLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/pattern/${currentStudent.User._id}`
                  )
                }
              >
                Patterns
              </div>
              <div
                className="navLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/equation/${currentStudent.User._id}`
                  )
                }
              >
                Equations
              </div>
              <div
                className="navLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/shape/${currentStudent.User._id}`
                  )
                }
              >
                2D Shapes & 3D Objects
              </div>
              <div
                className="navLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/measurement/${currentStudent.User._id}`
                  )
                }
              >
                Measurements
              </div>
              <div
                className="navLink"
                onClick={() =>
                  handleTo(`/categorybreakdown/data/${currentStudent.User._id}`)
                }
              >
                Data Analysis
              </div>

              <div
                className="navLink"
                onClick={() =>
                  handleTo(
                    `/categorybreakdown/chance/${currentStudent.User._id}`
                  )
                }
              >
                Chance & Uncertainty
              </div>
            </div>
          </div>
          <div className="categoryContainer">
            <div className="categoryTitle">Introduction</div>
            <div className="categoryInfo">
              <section className="categoryText">
                The following tables deliver a breakdown of each skill Student 1
                is required to have the knowledge to complete, as well as the
                questions the student attempted to answer. The corresponding
                result of each question is indicated with either a “checkmark”
                for a correct response, or a “X” for an incorrect or incomplete
                response. This information can be used to show the extent to
                which the student struggles in each skill set.
              </section>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </ResultCategoryWrapper>
  );
};
