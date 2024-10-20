import React, { useState, useEffect, useCallback, useRef } from "react";
import TeacherInfoTableWrapper from "../../AdminDashTables/TeacherInfoTable/Style/TeacherInfoTableWrapper";
import EditingBox from "../../EditingBox/EditingBox";
import { Archive, Edit } from "../../../../Static";
import { setClassroomsAction } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
import axios from "axios";
import { gsap } from "gsap";

export default () => {
  const history = useHistory();
  const classrooms = useSelector((state) => state.classrooms.classrooms);
  const dispatch = useDispatch();
  const setClassrooms = useCallback((c) => dispatch(setClassroomsAction(c)), [
    dispatch,
  ]);

  useEffect(() => {}, []);

  useEffect(() => {
    const getCurrentTeacher = async () => {
      try {
        const { data } = await axios(
          `${process.env.REACT_APP_BACK_END}/api/classrooms`,
          {
            withCredentials: true,
          }
        );

        if (data) {
          if (data.Classrooms) {
            const { Classrooms } = data;
            const filteredClassrooms = Classrooms.filter((c) => !c.isArchived);
            setClassrooms({
              ...data,
              Classrooms: filteredClassrooms,
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentTeacher();
  }, [setClassrooms]);

  const handleDelete = async (id) => {
    try {
      const { data } = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_BACK_END}/api/classrooms/${id}`,
        withCredentials: true,
      });

      if (data) {
        const { data: UpdatedClassrooms } = await axios(
          `${process.env.REACT_APP_BACK_END}/api/classrooms`,
          {
            withCredentials: true,
          }
        );

        if (UpdatedClassrooms) {
          setClassrooms(UpdatedClassrooms);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getRow = (c) => {
    return c.Classrooms.map((classroom, idx, self) => {
      return (
        <RenderTableData
          key={uuid4()}
          classroom={classroom}
          idx={idx}
          self={self}
        />
      );
    });
  };
  const RenderTableData = ({ classroom, idx, self }) => {
    const [expand, setExpand] = useState(false);
    const trRef = useRef();
    const { _id, AccessCode, ClassName, Students, createdAt } = classroom;
    const handleArchive = async (_id) => {
      try {
        const { data } = await axios({
          method: "put",
          withCredentials: true,
          url: `${process.env.REACT_APP_BACK_END}/api/classrooms/${_id}`,
          data: {
            action: "archive",
          },
        });
        console.log(data);
      } catch (err) {
        console.error(err.response);
      }
    };
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
            {ClassName}
          </td>
          <td className="tableRow">{Students.length}</td>
          <td className="tableRow">{AccessCode}</td>
          <td className="tableRow">{dayjs(createdAt).format("YYYY-MM-DD")}</td>
          <td
            className="tableRow"
            style={{
              borderRadius: expand
                ? "0 15px 15px 0"
                : idx + 1 === self.length
                ? "0 0 15px 0"
                : "",
            }}
            onClick={() => setExpand(!expand)}
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
                  onClick={() => {
                    history.push({
                      pathname: `/classroom/${_id}`,
                      state: {
                        Mode: "Edit",
                      },
                    });
                  }}
                >
                  <img src={Edit} alt="edit" />
                  <span>Edit</span>
                </section>
                <section
                  className="editingRow"
                  onClick={() => handleArchive(_id)}
                >
                  <img src={Archive} alt="Archive" />
                  <span>Archive</span>
                </section>
                <section
                  className="editingRow delete"
                  onClick={() => handleDelete(_id)}
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
  const renderTableHeader = () => {
    return Array.from([1, 2, 3, 4, 5]).map((_, idx) => {
      return (
        <th key={uuid4()} className="tableHeader">
          {(idx === 0 && "Classroom") ||
            (idx === 1 && "No. Students") ||
            (idx === 2 && "Access Code") ||
            (idx === 3 && "Date added")}
        </th>
      );
    });
  };

  //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.

  if (classrooms && classrooms.Classrooms) {
    return (
      <TeacherInfoTableWrapper>
        <table className="tableMake">
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {getRow(classrooms)}
          </tbody>
        </table>
      </TeacherInfoTableWrapper>
    );
  }
  return null;
};
