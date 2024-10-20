import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClassroomAction,
  setCurrentStudentAction,
} from "../../../redux/actions";
import AddStudentForm from "../../AddStudentForm/AddStudentForm";
import ClassroomTableWrapper, {
  WarningWrapper,
} from "./Style/ClassroomTableWrapper";
import { v4 as uuid4 } from "uuid";
import { useLocation, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Edit } from "../../../Static";
import EditingBox from "../EditingBox/EditingBox";
import { getClassroomInfo } from "../../../util";
import { gsap } from "gsap";
import dayjs from "dayjs";

export default () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [openModifyStudentForm, setOpenModifyStudentForm] = useState(false);
  const currentClassroom = useSelector((state) => state.classroom);
  const setStudent = useCallback((s) => dispatch(setCurrentStudentAction(s)), [
    dispatch,
  ]);
  const params = useParams();

  const [noTestWarning, setNoTestWarning] = useState(false);
  const setClassroom = useCallback((c) => dispatch(setClassroomAction(c)), [
    dispatch,
  ]);
  const { classroomID } = params;
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    const getClass = async (classroomID) => {
      const data = await getClassroomInfo(classroomID);

      if (data) {
        setClassroom(data);
      }
    };
    if (classroomID) {
      getClass(classroomID);
    }
  }, [classroomID, setClassroom]);

  const handleGetStudentInfo = async (student) => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BACK_END}/api/students/${student.User._id}`,
        {
          withCredentials: true,
        }
      );
      if (data) {
        if (!data.Test || (data.Test && !data.Test.Test_Completion)) {
          setNoTestWarning(true);
        } else if (data.Test && data.Test && data.Test.Test_Completion) {
          history.push({
            pathname: `/student/result/${data.User._id}`,
            state: {
              Role: "teacher",
              Classroom: classroomID,
            },
          });
          window.location.reload(false);
        }
      }
    } catch (err) {
      console.error(err);
    }
    /*
    const getUser = async () => {
      const { data } = await axios(`${process.env.REACT_APP_BACK_END}/api/me`, {
        withCredentials: true,
      });
      if (data) {
        logIn(data.user);
      }
    };
    */
  };
  const renderTableHeader = () => {
    if (state && state.Mode === "Edit") {
      return Array.from([1, 2, 3, 4, 5]).map((_, idx) => {
        return (
          <th key={uuid4()} className="tableHeader">
            {(idx === 0 && "First name") ||
              (idx === 1 && "Last name") ||
              (idx === 2 && "Email") ||
              (idx === 3 && "Date added") ||
              (idx === 4 && (
                <span style={{ userSelect: "none", color: "transparent" }}>
                  x
                </span>
              ))}
          </th>
        );
      });
    } else {
      return Array.from([1, 2, 3, 4]).map((_, idx) => {
        return (
          <th key={uuid4()} className="tableHeader">
            {(idx === 0 && "First name") ||
              (idx === 1 && "Last name") ||
              (idx === 2 && "Email") ||
              (idx === 3 && (
                <span style={{ userSelect: "none", color: "transparent" }}>
                  x
                </span>
              ))}
          </th>
        );
      });
    }
  };

  const getRow = (c) => {
    const { Students } = c.classroomInfo;
    if (Students) {
      return c.classroomInfo.Students.map((s, idx, self) => {
        return (
          <RenderTableData key={uuid4()} student={s} idx={idx} self={self} />
        );
      });
    }
  };

  const handleDelete = async (id, classroomID) => {
    try {
      const { data } = await axios({
        method: "delete",
        data: {
          classroomID,
        },
        url: `${process.env.REACT_APP_BACK_END}/api/students/${id}`,
        withCredentials: true,
      });

      if (data) {
        const d = await getClassroomInfo(classroomID);

        setClassroom(d);
      }
    } catch (err) {
      console.error(err.response);
    }
  };
  const RenderTableData = ({ student, idx, self }) => {
    const [expand, setExpand] = useState(false);
    const trRef = useRef();

    const { First_name, Last_name, Email, createdAt, _id } = student.User;

    useEffect(() => {
      if (trRef && trRef.current) {
        if (expand) {
          gsap.to(trRef.current, 0.1, {
            scale: 1.03,
          });
        } else {
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
            color: expand ? "#fff" : "#0f4c75",
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
            {First_name}
          </td>
          <td className="tableRow">{Last_name}</td>
          <td className="tableRow">{Email}</td>
          {state && state.Mode === "Edit" && (
            <td className="tableRow">
              {dayjs(createdAt).format("YYYY-MM-DD")}
            </td>
          )}
          <td
            onClick={() => setExpand(true)}
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
                <section
                  className="editingRow"
                  onClick={() => setOpenModifyStudentForm(_id)}
                >
                  <img src={Edit} alt="edit" />
                  <span>Edit</span>
                </section>
                <section
                  className="editingRow"
                  onClick={() => handleGetStudentInfo(student)}
                >
                  <i className="fas fa-poll-h"></i>
                  <span>Check result</span>
                </section>
                {/*<section className="editingRow">
                  <i className="fas fa-paper-plane"></i>
                  <span>Send result</span>
                </section>*/}
                <section
                  className="editingRow delete"
                  onClick={() => handleDelete(_id, classroomID)}
                >
                  <i
                    style={{ marginLeft: "10px" }}
                    className="fas fa-trash-alt"
                  ></i>
                  <span>Delete</span>
                </section>
              </div>
            </EditingBox>
          )}
        </tr>
      </>
    );
  };
  if (currentClassroom) {
    return (
      <>
        {open && (
          <AddStudentForm
            open={open}
            setOpen={setOpen}
            title="Student Profile"
            Grade={currentClassroom.classroomInfo.Grade}
            currentClassroom={currentClassroom}
          />
        )}
        {noTestWarning && (
          <WarningWrapper>
            <section className="headerRow">
              <div>Warning</div>
              <i
                onClick={() => setNoTestWarning(false)}
                className="fas fa-times"
                style={{ cursor: "pointer" }}
              ></i>
            </section>
            <section className="contentRow">
              Student has not yet taken the exam.
            </section>
          </WarningWrapper>
        )}
        {openModifyStudentForm && (
          <AddStudentForm
            open={openModifyStudentForm}
            setOpen={setOpenModifyStudentForm}
            title="Edit Profile"
            Grade={currentClassroom.classroomInfo.Grade}
            currentClassroom={currentClassroom}
          />
        )}
        <ClassroomTableWrapper noTestWarning={noTestWarning}>
          <div className="buttonDiv">
            <div className="buttonWrapper" onClick={() => setOpen(!open)}>
              <i className="fas fa-plus-circle"></i>
              <button type="button">Add</button>
            </div>
          </div>

          <table className="tableMake">
            <tbody>
              <tr>{renderTableHeader()}</tr>
              {getRow(currentClassroom)}
            </tbody>
          </table>
        </ClassroomTableWrapper>
      </>
    );
  }
  return null;
};
