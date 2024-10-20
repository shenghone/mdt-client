import React, { useEffect, useState } from "react";
import Logo from "../../Static/LogoWhiteText.png";
import StudentResultWrapper from "./Style/StudentResultWrapper";
import Footer from "../../Components/Footer/Footer";
import Confetti from "../../Static/Confetti.jpg";
import { useParams, useHistory } from "react-router-dom";
import dayjs from "dayjs";
// import Food from "./ResultBarChart/data";
import { ReactComponent as RightArrow } from "../../Static/Icons/ArrowRight.svg";
import { getOrganizedData } from "../../util";

import {
  PretestTable,
  OverviewTable,
} from "./ResultCategoryBreakdown/TableMaker/TableMaker";
import MissingSkillTable from "./ResultCategoryBreakdown/MissingSkillTable/MissingSkillTable";
import { ChanceInfo } from "./ResultCategoryBreakdown/CategoryInfo/Chance";
import { DataInfo } from "./ResultCategoryBreakdown/CategoryInfo/Data";
import { EquationInfo } from "./ResultCategoryBreakdown/CategoryInfo/Equation";
import { MeasurementInfo } from "./ResultCategoryBreakdown/CategoryInfo/Measurement";
import { NumberInfo } from "./ResultCategoryBreakdown/CategoryInfo/Number";
import { OperationInfo } from "./ResultCategoryBreakdown/CategoryInfo/Operation";
import { PatternInfo } from "./ResultCategoryBreakdown/CategoryInfo/Pattern";
import { ShapeInfo } from "./ResultCategoryBreakdown/CategoryInfo/Shape";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCurrentStudentAction,
  setCurrentStudentAction,
} from "../../redux/actions";
import axios from "axios";

export default (props) => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { location } = props;
  const [finalData, setFinalData] = useState(null);
  const s = useSelector((state) => state.student.student);
  const setStudent = (s) => dispatch(setCurrentStudentAction(s));
  const clearStudent = () => dispatch(clearCurrentStudentAction());

  const getFullName = () => {
    const { User } = s;
    return `${User.First_name} ${User.Last_name}`;
  };

  const getTestDate = () => {
    const { Test } = s;
    return dayjs(Test.createdAt).format("MMMM DD, YYYY");
  };

  //random
  const handleTo = (to) => {
    history.push({
      pathname: to,
      state: location.state,
    });
  };

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    if (s && s.Test && s.Test.DATA) {
      if (s.Grade && s.Pretest_result) {
        const { DATA } = s.Test;
        const { Grade, Pretest_result } = s;
        const getGrade = async (g) => {
          try {
            const { data: gradeLookup } = await axios({
              method: "post",
              url: `${process.env.REACT_APP_BACK_END}/api/grade`,
              data: {
                Grade_name: g,
              },
              withCredentials: true,
              cancelToken: source.token,
            });

            const d = getOrganizedData(
              Grade,
              DATA,
              Pretest_result,
              gradeLookup
            );

            const L1Data = getLevelData(1, d);

            const L2Data = getLevelData(2, d);

            const L3Data = getLevelData(3, d);

            const f = resultOverviewData(L1Data, L2Data, L3Data, s);

            setFinalData(f);
          } catch (err) {}
        };
        getGrade(Grade);
      }
    }
    return () => {
      source.cancel();
    };
  }, [JSON.stringify(s)]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const getCurrentStudent = async (studentID) => {
      try {
        const { data: st } = await axios(
          `${process.env.REACT_APP_BACK_END}/api/students/${studentID}`,
          {
            withCredentials: true,
            cancelToken: source.token,
          }
        );
        if (st) {
          setStudent(st);
        }
      } catch (err) {}
    };
    if (params && params.studentID) {
      getCurrentStudent(params.studentID);
    }

    return () => source.cancel();
  }, [params.studentID]);

  const getLevelData = (level, data) => {
    const values = Object.entries(data[level]);
    values.forEach(([key, val]) => {
      val.Category = key;
      if (!val["Worksheets needed"] && !val.Completed) {
        val.NA = val.sections;
        val.Completed = 0;
        val["Worksheets needed"] = 0;
      } else if (!val.Completed) {
        val.Completed = 0;
      } else if (val.Completed || val["Worksheets needed"]) {
        val.NA = 0;
      } else if (val.NA === val["Worksheets needed"]) {
        val.NA = 0;
      }
    });
    return Object.values(data[level]);
  };

  //g is the Grade of the student
  console.log(finalData);
  const resultOverviewData = (level1, level2, level3, current) => {
    let resultData = [];
    let grade = current.Grade;
    for (let i = 0; i < level3.length; i = i + 1) {
      let obj = {};
      obj.Category = level3[i].Category;
      let tempCategory = level3[i].Category;
      obj.pretestActual = current.Pretest_result[tempCategory];
      let tempArray = [];
      switch (tempCategory) {
        case "NN":
          tempArray = NumberInfo.slice(0);
          break;
        case "NO":
          tempArray = tempArray.concat(OperationInfo);
          break;
        case "RP":
          tempArray = tempArray.concat(PatternInfo);
          break;
        case "SM":
          tempArray = tempArray.concat(MeasurementInfo);
          break;
        case "RE":
          tempArray = tempArray.concat(EquationInfo);
          break;
        case "SS":
          tempArray = tempArray.concat(ShapeInfo);
          break;
        case "PD":
          tempArray = tempArray.concat(DataInfo);
          break;
        case "PC":
          tempArray = tempArray.concat(ChanceInfo);
          break;
      }
      obj.Level1Expected = tempArray[0].length;
      for (let j = 0; j < tempArray[0].length; j++) {
        if (grade < tempArray[0][j].Grade) {
          obj.Level1Expected = j;
          break;
        }
      }

      obj.Level2Expected = tempArray[1].length;

      for (let k = 0; k < tempArray[1].length; k++) {
        if (grade < tempArray[1][k].Grade) {
          obj.Level2Expected = k;
          break;
        }
      }
      obj.Level3Expected = tempArray[2].length;
      for (let l = 0; l < tempArray[2].length; l++) {
        if (grade < tempArray[2][l].Grade) {
          obj.Level3Expected = l;
          break;
        }
      }
      obj.expectedFinal =
        obj.Level3Expected > 0
          ? {
              level: 3,
              section: obj.Level3Expected,
            }
          : obj.Level2Expected > 0
          ? {
              level: 2,
              section: obj.Level2Expected,
            }
          : obj.Level1Expected > 0
          ? {
              level: 1,
              section: obj.Level1Expected,
            }
          : {
              level: 1,
              section: "None",
            };

      if (
        level3[i].Completed > 0 &&
        level2[i].Completed === 0 &&
        level1[i].Completed === 0
      ) {
        obj.Level1Actual = level1[i].sections;
        obj.Level2Actual = level2[i].sections;
        obj.Level3Actual = level3[i].Completed;
      }
      if (level2[i].Completed > 0 && level1[i].Completed === 0) {
        obj.Level1Actual = level1[i].sections;
        obj.Level2Actual = level2[i].Completed;
        obj.Level3Actual = 0;
      }
      if (level1[i].Completed > 0) {
        obj.Level1Actual = level1[i].Completed;
        obj.Level2Actual = 0;
        obj.Level3Actual = 0;
      }
      if (
        level1[i].Completed === 0 &&
        level2[i].Completed === 0 &&
        level3[i].Completed === 0
      ) {
        obj.Level1Actual = 0;
        obj.Level2Actual = 0;
        obj.Level3Actual = 0;
      }
      obj.actualFinal =
        obj.Level3Actual > 0
          ? {
              level: 3,
              section: obj.Level3Actual,
            }
          : obj.Level2Actual > 0
          ? {
              level: 2,
              section: obj.Level2Actual,
            }
          : obj.Level1Actual > 0
          ? {
              level: 1,
              section: obj.Level1Actual,
            }
          : {
              level: 1,
              section: "None",
            };
      obj.pretestExpected = obj.expectedFinal.level;

      resultData.push(obj);
    }
    return resultData;
  };

  const handleBackToClassroom = () => {
    const { state } = props.location;
    clearStudent();
    history.push({
      pathname: `/classroom/${state.Classroom}`,
      state: {
        Mode: "Edit",
      },
    });
  };
  return (
    <StudentResultWrapper>
      {s &&s.User && s.Test && s.Test.DATA && finalData ? (
        <>
          <div className="header">
            <img src={Logo} alt="deenstrong" onClick={() => handleTo("/")} />
            {props.location.state && props.location.state.Role === "teacher" && (
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
              <h2>Core Skills Math Test Diagnostic Report</h2>
            </div>
            <div className="reportDesc">
              <div className="studentInfo">
                <div className="infoColumn">
                  <h3>Name</h3>
                  <p>{getFullName()}</p>
                </div>
                <div className="infoColumn">
                  <h3>Grade</h3>
                  <p>{s.Grade}</p>
                </div>
                <div className="infoColumn">
                  <h3>Date</h3>
                  <p>{getTestDate()}</p>
                </div>
              </div>
              <h3>Summary</h3>
              <section className="summary">
                The Core Skills Math Test is a diagnostic tool that can measure
                fundamental mathematic skills that a student lacks but is
                unaware of lacking. The tool can pinpoint whether a student
                responds at, or below their grade level, and assists teachers
                and students with determining where extra help is required.
                <br />
                <br />
                The Core Skills Math Test was developed and standardized to be
                administered to students from Grade 1 to Grade 9.
                <br />
                <br />
                The test is divided into eight categories: Numbers: Number Sense
                (NN), Numbers: Operations (NO), Relations: Patterns (RP),
                Relations: Equations (RE), Shapes and Space: Measurement (SM),
                Shapes and Space: Shapes/Objects (SS), Statistics and
                Probability: Data Analysis (PD), and Statistics and Probability:
                Chance and Uncertainty (PC).
                <br />
                <br />
                Each category is comprised of a set of core skills,
                differentiated into three levels.
                <ul>
                  <li>Level 1 for Grades 1 to 3</li>
                  <li>Level 2 for Grades 4 to 6</li>
                  <li>Level 3 for Grades 7 to 9</li>
                </ul>
                The Alberta Education system is adhered to for conducting this
                test. A pretest was completed prior to accessing the Core Skills
                Math Test to determine a suitable test for the student, based on
                their knowledge of teh core skills. For example, if a student
                answered correctly for a question under Level 1 for a category,
                the student is not tested on Level 1 for that category.
              </section>
              <h3>Pretest Result:</h3>

              {<PretestTable data={finalData} />}
              <h3>Test Result Overview:</h3>
              {<OverviewTable data={finalData} />}
              <h3>Gap Analysis Overview:</h3>
              {<MissingSkillTable data={finalData} />}
            </div>

            <div className="buttonContainer">
              <button
                className="continueReading"
                onClick={() =>
                  handleTo(`/categorybreakdown/intro/${s.User._id}`)
                }
              >
                Continue Reading
                <RightArrow />
              </button>
            </div>
          </div>
          <div className="footerContain">
            <Footer />
          </div>
        </>
      ) : null}
    </StudentResultWrapper>
  );
};
