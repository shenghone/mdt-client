import React, { useState, useEffect } from "react";
import Logo from "../../../Static/LogoWhiteText.png";
import ResultCategoryWrapper from "./ResultCategoryWrapper";
import Footer from "../../../Components/Footer/Footer";
import Confetti from "../../../Static/Confetti.jpg";
import axios from "axios";
import { getOrganizedData } from "../../../util";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { CategoryTable, FixedTable } from "./TableMaker/TableMaker";
import { ReactComponent as CaretIcon } from "../../../Static/Icons/caret-forward-sharp.svg";

import {
  BarWithMarker,
  BarWithoutMarker,
} from "../ResultBarChart/ResultBarChart";

import { ReactComponent as NALevel1 } from "../../../Static/ResultGraphLegend/level1NA.svg";
import { ReactComponent as NALevel3 } from "../../../Static/ResultGraphLegend/level3NA.svg";
import { ReactComponent as CorrectLevel3 } from "../../../Static/ResultGraphLegend/level3Correct.svg";
import { ReactComponent as WorksheetLevel2 } from "../../../Static/ResultGraphLegend/level2worksheet.svg";

import { Level1Info, Level2Info, Level3Info } from "./CategoryInfo/Data";

export default ({ location }) => {
  const params = useParams();
  const history = useHistory();

  const handleTo = (to) => {
    history.push({
      pathname: to,
      state: location.state,
    });
  };

  const [currentStudent, setCurrentStudent] = useState(null);
  const [organizedData, setOrganizedData] = useState(null);

  const getGrade = () => {
    const { Grade } = currentStudent;
    return Grade;
  };

  const user = useSelector((state) => state.user.USER);
  //use current user id to query student's data
  const student = useSelector((state) => state.student.student);

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

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (currentStudent && user && currentStudent.DATA) {
      const { DATA } = currentStudent.Test;
      const { Grade, Pretest_result } = currentStudent;
      const getData = async () => {
        try {
          const { data: gradeLookup } = await axios({
            method: "post",
            url: `${process.env.REACT_APP_BACK_END}/api/grade`,
            data: {
              Grade_name: Grade,
            },
            withCredentials: true,
            cancelToken: source.token,
          });

          const d = getOrganizedData(Grade, DATA, Pretest_result, gradeLookup);
          setOrganizedData(d);
        } catch (err) {
          console.error(err);
        }
      };
      getData();
    }
  }, [currentStudent, user]);

  var grade = 0;
  var DATA = [];
  if (currentStudent) {
    var grade = getGrade();
    var DATA = currentStudent.Test.DATA;
  }
  var Level1 = [];
  var Level2 = [];
  var Level3 = [];
  var [openLevel1, setOpenLevel1] = useState(false);
  var [openLevel2, setOpenLevel2] = useState(false);
  var [openLevel3, setOpenLevel3] = useState(false);

  function populateLevel(item) {
    if (item.Section_name.includes("PD") && item.Answer === item.userAnswer) {
      var section = item.Section_name;
      var difficulty = item.Difficulty_name;
      var idx = parseInt(section.substring(2));
      if (item.Under_level === "Level1") {
        if (Level1[idx - 1] != null) {
          Level1[idx - 1].Difficulty.push(difficulty);
        } else {
          Level1[idx - 1] = { Section: section, Difficulty: [difficulty] };
        }
      }
      if (item.Under_level === "Level2") {
        if (Level2[idx - 1] != null) {
          Level2[idx - 1].Difficulty.push(difficulty);
        } else {
          Level2[idx - 1] = { Section: section, Difficulty: [difficulty] };
        }
      }
      if (item.Under_level === "Level3") {
        if (Level3[idx - 1] != null) {
          Level3[idx - 1].Difficulty.push(difficulty);
        } else {
          Level3[idx - 1] = { Section: section, Difficulty: [difficulty] };
        }
      }
    }
  }
  DATA.forEach(populateLevel);

  const level1Graph = () => {
    var obj = new Object();
    var i = 0;
    obj.sections = Level1Info.length;
    obj.expected = Level1Info.length;
    for (i; i < Level1Info.length; i++) {
      if (grade < Level1Info[i].Grade) {
        obj.expected = i;
        break;
      }
    }
    if (
      (Level1.length === 0 &&
        (Level2.length === 0 || Level2.length > 0) &&
        Level3.length !== 0) ||
      (Level1.length === 0 && Level2.length > 0)
    ) {
      obj.NAdown = Level1Info.length;
      obj.NAup = 0;
      obj.worksheetsNeeded = 0;
      obj.completed = 0;
    }
    if (Level1.length > 0) {
      obj.NAdown = 0;
      obj.NAup = Level1Info.length - obj.expected;
      var j = 0;
      obj.completed = 0;
      for (j; j < Level1.length; j += 1) {
        if (
          Level1[j].Difficulty.includes("Easy") &&
          Level1[j].Difficulty.includes("Medium") &&
          Level1[j].Difficulty.includes("Hard")
        ) {
          obj.completed = obj.completed + 1;
        }
      }
      obj.worksheetsNeeded = obj.expected - obj.completed;
      if (obj.completed > obj.expected) {
        obj.NAup = Level1Info.length - obj.completed;
        obj.worksheetsNeeded = 0;
      }
    }
    if (Level1.length === 0 && Level2.length === 0 && Level3.length === 0) {
      obj.NAup = Level1Info.length - obj.expected;
      obj.NAdown = 0;
      obj.completed = 0;
      obj.worksheetsNeeded = obj.expected;
    }
    obj.Category = "PD";
    return [obj];
  };
  const level2Graph = () => {
    var obj = new Object();
    var i = 0;
    obj.sections = Level2Info.length;
    obj.expected = Level2Info.length;
    for (i; i < Level2Info.length; i++) {
      if (grade < Level2Info[i].Grade) {
        obj.expected = i;
        break;
      }
    }
    if (Level2.length === 0 && Level3.length !== 0) {
      obj.NAdown = Level2Info.length;
      obj.NAup = 0;
      obj.worksheetsNeeded = 0;
      obj.completed = 0;
    }
    if (Level2.length > 0 || (Level2.length === 0 && Level1.length > 0)) {
      obj.NAdown = 0;
      obj.NAup = Level2Info.length - obj.expected;
      var j = 0;
      obj.completed = 0;
      for (j; j < Level2.length; j += 1) {
        if (
          Level2[j].Difficulty.includes("Easy") &&
          Level2[j].Difficulty.includes("Medium") &&
          Level2[j].Difficulty.includes("Hard")
        ) {
          obj.completed = obj.completed + 1;
        }
      }
      obj.worksheetsNeeded = obj.expected - obj.completed;
      if (obj.completed > obj.expected) {
        obj.NAup = Level2Info.length - obj.completed;
        obj.worksheetsNeeded = 0;
      }
    }
    if (Level1.length === 0 && Level2.length === 0 && Level3.length === 0) {
      obj.NAup = Level2Info.length - obj.expected;
      obj.NAdown = 0;
      obj.completed = 0;
      obj.worksheetsNeeded = obj.expected;
    }
    obj.Category = "PD";
    return [obj];
  };
  const level3Graph = () => {
    var obj = new Object();
    var i = 0;
    obj.NAdown = 0;
    obj.sections = Level3Info.length;
    obj.expected = Level3Info.length;
    for (i; i < Level3Info.length; i++) {
      if (grade < Level3Info[i].Grade) {
        obj.expected = i;
        break;
      }
    }
    obj.NAup = Level3Info.length - obj.expected;
    var j = 0;
    obj.completed = 0;
    for (j; j < Level3.length; j++) {
      if (
        Level3[j].Difficulty.includes("Easy") &&
        Level3[j].Difficulty.includes("Medium") &&
        Level3[j].Difficulty.includes("Hard")
      ) {
        obj.completed = obj.completed + 1;
      }
    }
    obj.worksheetsNeeded = obj.expected - obj.completed;
    if (obj.completed > obj.expected) {
      obj.NAup = Level3Info.length - obj.completed;
      obj.worksheetsNeeded = 0;
    }
    obj.Category = "PD";
    // obj.completed=3;
    return [obj];
  };
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
      {currentStudent ? (
        <>
          <div className="header">
            <img src={Logo} alt="deenstrong" onClick={() => handleTo("/")} />
            <div
              className="backToOverview"
              onClick={() => handleBackToOverview()}
            >
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
            <div
              className="supportCentreWrapper"
              onClick={() => handleTo("/help")}
            >
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
                      handleTo(
                        `/categorybreakdown/data/${currentStudent.User._id}`
                      )
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
                <div className="categoryTitle">
                  Statistics and Probability: Data Analysis (PD)
                </div>
                <div className="categoryGraphs">
                  <h1>Overview:</h1>
                  <div className="graphContainer">
                    <div className="graph">
                      <div className="title">Level 1</div>
                      <div className="barChart">
                        {level2Graph()[0].expected > 0 ? (
                          <BarWithoutMarker data={level1Graph()} />
                        ) : (
                          <BarWithMarker data={level1Graph()} />
                        )}
                      </div>
                    </div>
                    <div className="graph">
                      <div className="title">Level 2</div>
                      <div className="barChart">
                        {level3Graph()[0].expected === 0 &&
                        level2Graph()[0].expected > 0 ? (
                          <BarWithMarker data={level2Graph()} />
                        ) : (
                          <BarWithoutMarker data={level2Graph()} />
                        )}
                      </div>
                    </div>
                    <div className="graph">
                      <div className="title">Level 3</div>
                      <div className="barChart">
                        {level3Graph()[0].expected > 0 ? (
                          <BarWithMarker data={level3Graph()} />
                        ) : (
                          <BarWithoutMarker data={level3Graph()} />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="graphLegend">
                    <table className="legendTable">
                      <tbody>
                        <tr>
                          <th>Cleared in Pretest</th>
                          <th>Answered Correctly</th>
                          <th>Worksheets Needed</th>
                          <th>N/A for Grade</th>
                        </tr>
                        <tr>
                          <td>
                            <NALevel1 />
                          </td>
                          <td>
                            <CorrectLevel3 />
                          </td>
                          <td>
                            <WorksheetLevel2 />
                          </td>
                          <td>
                            <NALevel3 />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="categoryInfo">
                  <div className="level">
                    <h1>Level 1</h1>
                    <h3>
                      Level Guide
                      {openLevel1 ? (
                        <button
                          className="helpButton up"
                          onClick={() => setOpenLevel1(!openLevel1)}
                        >
                          <CaretIcon />
                        </button>
                      ) : (
                        <button
                          className="helpButton down"
                          onClick={() => setOpenLevel1(!openLevel1)}
                        >
                          <CaretIcon />
                        </button>
                      )}
                    </h3>
                    {openLevel1 && (
                      <FixedTable data={Level1Info} results={Level1} />
                    )}

                    <h3>Result:</h3>
                    {Level1.length !== 0 ? (
                      <CategoryTable data={Level1} max={3} category={"PD."} />
                    ) : Level2.length !== 0 ? (
                      <div className="resultText">Cleared in Pretest</div>
                    ) : Level3.length != 0 ? (
                      <div className="resultText">Cleared in Pretest</div>
                    ) : (
                      <div className="resultText">Level Not Achieved</div>
                    )}
                  </div>
                  <div className="level">
                    <h1>Level 2</h1>
                    <h3>
                      Level Guide
                      {openLevel2 ? (
                        <button
                          className="helpButton up"
                          onClick={() => setOpenLevel2(!openLevel2)}
                        >
                          <CaretIcon />
                        </button>
                      ) : (
                        <button
                          className="helpButton down"
                          onClick={() => setOpenLevel2(!openLevel2)}
                        >
                          <CaretIcon />
                        </button>
                      )}
                    </h3>
                    {openLevel2 && (
                      <FixedTable data={Level2Info} results={Level2} />
                    )}

                    <h3>Result:</h3>

                    {Level2.length !== 0 ? (
                      <CategoryTable data={Level2} max={3} category={"PD."} />
                    ) : Level1.length !== 0 ? (
                      <div className="resultText">Level Not Achieved</div>
                    ) : Level3.length !== 0 ? (
                      <div className="resultText">Cleared in Pretest</div>
                    ) : (
                      <div className="resultText">Level Not Achieved</div>
                    )}
                  </div>
                  <div className="level">
                    <h1>Level 3</h1>
                    <h3>
                      Level Guide
                      {openLevel3 ? (
                        <button
                          className="helpButton up"
                          onClick={() => setOpenLevel3(!openLevel3)}
                        >
                          <CaretIcon />
                        </button>
                      ) : (
                        <button
                          className="helpButton down"
                          onClick={() => setOpenLevel3(!openLevel3)}
                        >
                          <CaretIcon />
                        </button>
                      )}
                    </h3>
                    {openLevel3 && (
                      <FixedTable data={Level3Info} results={Level3} />
                    )}

                    <h3>Result:</h3>
                    {Level3.length !== 0 ? (
                      <CategoryTable data={Level3} max={1} category={"PD."} />
                    ) : (
                      <div className="resultText">Level Not Achieved</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </>
      ) : null}
    </ResultCategoryWrapper>
  );
};
