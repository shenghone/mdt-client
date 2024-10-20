import React, { useState, useEffect, useCallback, useRef } from "react";
import TeacherInfoTableWrapper from "./Style/TeacherInfoTableWrapper";
import EditingBox from "../../EditingBox/EditingBox";
import { Refresh, Edit } from "../../../../Static";
import { setTeachersAction } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../../../util";
import { v4 as uuid4 } from "uuid";
import axios from "axios";
import { gsap } from "gsap";
import _ from "lodash";

export default ({
  openModifyTeacherForm,
  setOpenModifyTeacherForm,
  ...rest
}) => {
  const importedTeachers = useSelector((state) => state.teachers.teachers);
  const dispatch = useDispatch();
  const setTeachers = useCallback((t) => dispatch(setTeachersAction(t)), [
    dispatch,
  ]);

  // Sorting Functionality Starts Here**********
  const [sortByFirstName, setSortByFirstName] = useState("default");
  const [sortByLastName, setSortByLastName] = useState("default");
  const [sortByTestsAssigned, setSortByTestsAssigned] = useState("default");
  const [sortByEmail, setSortByEmail] = useState("default");
  const wrapperRef = useRef();
  let teachers = importedTeachers; //array of teachers to be sorted
  const [edit, setEdit] = useState(false);

  function handleClickHeader(idx) {
    console.log(idx);

    if (idx === 0) {
      setSortByFirstName(!sortByFirstName);
      setSortByLastName("default");
      setSortByTestsAssigned("default");
      setSortByEmail("default");
    }
    if (idx === 1) {
      setSortByLastName(!sortByLastName);
      setSortByFirstName("default");
      setSortByTestsAssigned("default");
      setSortByEmail("default");
    }
    if (idx === 2) {
      setSortByEmail(!sortByEmail);
      setSortByFirstName("default");
      setSortByLastName("deafult");
      setSortByTestsAssigned("default");
    }
    if (idx === 3) {
      setSortByTestsAssigned(!sortByTestsAssigned);
      setSortByFirstName("default");
      setSortByLastName("default");
      setSortByEmail("default");
    }
    if (idx === 4) {
      setSortByTestsAssigned("default");
      setSortByFirstName("default");
      setSortByLastName("default");
      setSortByEmail("default");
    }
    console.log("firstName: " + sortByFirstName);
    console.log("LastName: " + sortByLastName);
    console.log("Tests: " + sortByTestsAssigned);
  }

  if (sortByFirstName === true) {
    teachers = _.sortBy(teachers, "first_name");
  } else if (sortByFirstName === false) {
    teachers = _.sortBy(teachers, "first_name").reverse();
  }

  if (sortByLastName === true) {
    teachers = _.sortBy(teachers, "last_name");
  } else if (sortByLastName === false) {
    teachers = _.sortBy(teachers, "last_name").reverse();
  }

  if (sortByTestsAssigned === true) {
    teachers = _.sortBy(teachers, "tests");
  } else if (sortByTestsAssigned === false) {
    teachers = _.sortBy(teachers, "tests").reverse();
  }
  if (sortByEmail === true) {
    teachers = _.sortBy(teachers, "email");
  } else if (sortByEmail === false) {
    teachers = _.sortBy(teachers, "email").reverse();
  }
  // Sorting Functionality Ends Here
  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      if (edit) {
        gsap.to(wrapperRef.current, 0.7, {
          opacity: 0.8,
        });
      } else {
        gsap.to(wrapperRef.current, 0.7, {
          opacity: 1,
        });
      }
    }
  }, [edit]);
  useEffect(() => {
    const resolveTeacher = async () => {
      try {
        const d = await getTeachers();
        setTeachers(d);
      } catch (err) {
        console.error(err);
      }
    };
    resolveTeacher();
  }, [setTeachers]);

  const deleteTeacher = async (target) => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_BACK_END}/api/teachers/${target}`,
        withCredentials: true,
      });
      if (data) {
        const d = await getTeachers();
        setTeachers(d);
      }
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const getTableData = (t) => {
    return t.map((teacher, idx, self) => {
      return (
        <RenderTableData
          key={uuid4()}
          teacher={teacher}
          idx={idx}
          self={self}
        />
      );
    });
  };
  const RenderTableData = (teacher) => {
    const [expand, setExpand] = useState(false);
    const trRef = useRef();
    const { _id, first_name, last_name, email, tests } = teacher.teacher;
    const { idx, self } = teacher;

    useEffect(() => {
      if (trRef && trRef.current) {
        if (expand) {
          gsap.set(trRef.current, {
            zIndex: 99,
          });
          gsap.to(trRef.current, 0.1, {
            scale: 1.03,
          });
        } else {
          gsap.set(trRef.current, {
            zIndex: 1,
          });
          gsap.to(trRef.current, 0.1, {
            scale: 1,
          });
        }
      }
    }, [expand]);

    return (
      <>
        <tr
          className="tableData"
          style={{
            position: "relative",
            background: expand ? "#0f4c75" : "#bbe1fa",
            color: expand ? "#0f4c75" : "#0f4c75",
          }}
          ref={trRef}
          onMouseLeave={() => setExpand(false)}
        >
          <td
            className="tableRow"
            style={{
              borderRadius: expand
                ? "15px 0 0 15px"
                : idx + 1 === self.length
                ? "0 0 0 15px"
                : "",
            }}
          >
            {first_name}
          </td>
          <td className="tableRow">{last_name}</td>
          <td className="tableRow">{email}</td>
          <td className="tableRow">{tests}</td>
          <td
            className="tableRow"
            style={{
              borderRadius: expand
                ? "0 15px 15px 0"
                : idx + 1 === self.length
                ? "0 0 15px 0"
                : "",
            }}
          >
            {!expand && (
              <span
                onClick={() => setExpand(!expand)}
                style={{
                  display: "block",
                  transform: "rotate(90deg)",
                  userSelect: "none",
                  cursor: "pointer",
                  width: "fit-content",
                }}
              >
                ...
              </span>
            )}
            {expand && <i className="fas fa-database"></i>}
          </td>
          {expand && (
            <EditingBox expand={expand}>
              <div>
                <section className="editingRow" onClick={() => setEdit(!edit)}>
                  <img src={Edit} alt="edit" />
                  <span onClick={() => setOpenModifyTeacherForm(_id)}>
                    edit
                  </span>
                </section>
                <section className="editingRow">
                  <img style={{ marginRight: "2px" }} src={Refresh} alt="" />
                  <span>reset password</span>
                </section>
                <section
                  onClick={() => deleteTeacher(_id)}
                  className="editingRow delete"
                >
                  <i className="fas fa-trash-alt"></i>
                  <span>delete</span>
                </section>
              </div>
            </EditingBox>
          )}
        </tr>
      </>
    );
  };
  const renderTableHeader = () => {
    return Array.from([1, 2, 3, 4, 5]).map((_, idx) => {
      return (
        <th
          key={uuid4()}
          className="tableHeader"
          onClick={() => handleClickHeader(idx)}
        >
          {idx === 0 ? (
            (sortByFirstName === true && (
              <div className="increasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </div>
            )) ||
            (sortByFirstName === false && (
              <div className="decreasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </div>
            ))
          ) : idx === 1 ? (
            (sortByLastName === true && (
              <div className="increasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </div>
            )) ||
            (sortByLastName === false && (
              <div className="decreasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </div>
            ))
          ) : idx === 2 ? (
            (sortByEmail === true && (
              <span className="increasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </span>
            )) ||
            (sortByEmail === false && (
              <div className="decreasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </div>
            ))
          ) : idx === 3 ? (
            (sortByTestsAssigned === true && (
              <div className="increasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </div>
            )) ||
            (sortByTestsAssigned === false && (
              <div className="decreasing">
                <section className="up">▲</section>
                <section className="down">▼</section>
              </div>
            ))
          ) : idx === 4 ? (
            (typeof sortByFirstName === "boolean" ||
              typeof sortByLastName === "boolean" ||
              typeof sortByEmail === "boolean" ||
              typeof sortByTestsAssigned === "boolean") && (
              <span className="unSort"> Default </span>
            )
          ) : (
            <></>
          )}
          {(idx === 0 && "First Name") ||
            (idx === 1 && "Last Name") ||
            (idx === 2 && "Email Address") ||
            (idx === 3 && "No. Tests Assigned")}
          {/* <div clasName="sortIndicator">
            <span className="increasing">▲</span>
            <span className="decreasing">▼</span>
          </div> */}
        </th>
      );
    });
  };

  //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
  if (teachers) {
    return (
      <TeacherInfoTableWrapper>
        <table className="tableMake">
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {getTableData(teachers)}
          </tbody>
        </table>
      </TeacherInfoTableWrapper>
    );
  }
  return null;
};
