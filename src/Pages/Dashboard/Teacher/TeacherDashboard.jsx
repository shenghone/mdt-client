import React, { useEffect, useState } from "react";
import {
  NavBar,
  NavItem,
  DropDownMenu,
  DropDownItem,
} from "../../../Components/NavBar2/NavBar";
import { ReactComponent as Name } from "../../../Static/Icons/Name.svg";
import TeacherDashboardWrapper from "./Style/TeacherDashboardWrapper";
import Footer from "../../../Components/Footer/Footer";
import { ReactComponent as Search } from "../../../Static/Icons/search-circle.svg";
import { ReactComponent as Caret } from "../../../Static/Icons/caret-back-sharp.svg";
import { useSelector } from "react-redux";
import Table from "../../../Components/Tables/TeacherDashTables/StudentInfoTable/StudentInfoTable";
import CreateClassTab from "./CreateClassTab/CreateClassTab";
import {
  NumberCard,
  PercentageCard,
} from "../../../Components/InfoCards/InfoCard";
import axios from "axios";
import { handleTo } from "../../../util";
// import { handleTo } from "../../../util";
// import { gsap } from "gsap";

export default () => {
  const user = useSelector((state) => state.user.USER);
  const subscriptionEndDate = "2021-09-21";
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [newTab, setNewTab] = useState(false);
  const getTotalStudent = (teacher) => {
    return teacher.Classrooms.reduce((total, c) => {
      return (total += c.Students.length);
    }, 0);
  };
  const getPercentage = (currentTeacher) => {
    const studentNumber = getTotalStudent(currentTeacher);
    return ((studentNumber * 100) / currentTeacher.Available_tests).toFixed(2);
  };
  const getTestsAvailable = (currentTeacher) => {
    return currentTeacher.Available_tests - getTotalStudent(currentTeacher);
  };
  useEffect(() => {
    const getTeacher = async () => {
      const { data } = await axios(
        `${process.env.REACT_APP_BACK_END}/api/teachers/${user._id}`,
        {
          withCredentials: true,
        }
      );
      if (data) {
        const { Classrooms } = data;

        setCurrentTeacher({
          ...data,
          Classrooms: Classrooms.filter((c) => !c.isArchived),
        });
      }
    };
    if (user) {
      getTeacher();
    }
  }, [user]);

  if (user && currentTeacher) {
    return (
      <>
        <TeacherDashboardWrapper>
          <div className="navContain">
            <NavBar
              id={`${user.First_name} ${user.Last_name}`}
              drop={
                <NavItem icon={<Caret />}>
                  <DropDownMenu>
                    <DropDownItem text={"/teacher/archivedClassroom"}>
                      Archive
                    </DropDownItem>
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
          {!newTab ? (
            <>
              <div className="desc">Teacher Dashboard</div>
              <div className="mainContain">
                <>
                  <div className="infoBox">
                    <PercentageCard
                      title="Percentage of tests used"
                      percentage={
                        currentTeacher ? getPercentage(currentTeacher) : 10
                      }
                      className="card1"
                    />
                    <NumberCard
                      title="No. of Tests Remaining"
                      value={getTestsAvailable(currentTeacher)}
                      mainCap="Until"
                      caption={subscriptionEndDate}
                      className="card2"
                    />
                  </div>
                  <div className="buttonContain">
                    <div
                      className="buttonWrapper"
                      onClick={() => setNewTab(!newTab)}
                    >
                      <i className="fas fa-plus-circle"></i>
                      <button>Add</button>
                    </div>
                  </div>
                  <div className="tableContain">
                    <Table />
                  </div>
                </>
              </div>
            </>
          ) : (
            <div className="mainContain">
              <CreateClassTab setNewTab={setNewTab}></CreateClassTab>
            </div>
          )}

          <div className="footerContain">
            <Footer />
          </div>
        </TeacherDashboardWrapper>
      </>
    );
  } else {
    return null;
  }
};
