import React, { useEffect } from "react";
import {
  NavBar,
  NavItem,
  DropDownMenu,
  DropDownItem,
} from "../../../Components/NavBar2/NavBar";
import { ReactComponent as Search } from "../../../Static/Icons/search-circle.svg";
import { ReactComponent as Caret } from "../../../Static/Icons/caret-back-sharp.svg";
import { ReactComponent as Name } from "../../../Static/Icons/Name.svg";
import StudentDashboardWrapper from "./Style/StudentDashboardWrapper";
import Footer from "../../../Components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentStudentAction, logInAction } from "../../../redux/actions";
import { handleTo } from "../../../util";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.USER);
  const location = useLocation();
  const setUser = (u) => dispatch(logInAction(u));
  const currentStudent = useSelector((state) => state.student.student);
  const setStudent = (s) => dispatch(setCurrentStudentAction(s));

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const { data } = await axios(
          `${process.env.REACT_APP_BACK_END}/api/me`,
          {
            withCredentials: true,
          }
        );
        if (data) {
          setUser(data.user);
        }
      } catch (err) {
        console.error(err.response);
      }
    };
    getCurrentUser();
  }, []);
  useEffect(() => {
    const getCurrentStudent = async () => {
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
        console.error(err.response);
      }
    };

    if (user && user.First_name) {
      getCurrentStudent();
    }
  }, [user, setStudent, location]);
  useEffect(()=>{
    console.log("Hollllly shoot")
  },[])
  if (user && currentStudent) {
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

        <div className="mainContain">
          <div className="studentDisplay">
            <div>
              <h1>Get Ready!</h1>
            </div>
            <div>
              <h4>
                Click the button bellow to procede to the{" "}
                {currentStudent.Pretest_result ? "test" : "pretest"} .
              </h4>
            </div>
            <div>
              <button
                className="startTest"
                onClick={() =>
                  !currentStudent.Pretest_result
                    ? handleTo(history, "/student/pretest")
                    : handleTo(history, "/student/test")
                }
              >
                {currentStudent.Pretest_result ? "Start Test" : "Start Pretest"}
              </button>
            </div>
          </div>
        </div>
                
        <div className="footerContain">
          <Footer />
        </div>
      </StudentDashboardWrapper>
    );
  }
  return null;
};
