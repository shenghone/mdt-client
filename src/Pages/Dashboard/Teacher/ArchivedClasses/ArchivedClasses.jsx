import React, { useEffect, useState } from "react";
import {
  NavBar,
  NavItem,
  DropDownMenu,
  DropDownItem,
} from "../../../../Components/NavBar2/NavBar";
import { ReactComponent as Name } from "../../../../Static/Icons/Name.svg";
import TeacherDashboardWrapper from "../Style/TeacherDashboardWrapper";
import Footer from "../../../../Components/Footer/Footer";
import { ReactComponent as Search } from "../../../../Static/Icons/search-circle.svg";
import { ReactComponent as Caret } from "../../../../Static/Icons/caret-back-sharp.svg";
import { useSelector } from "react-redux";
import Table from "../../../../Components/Tables/TeacherDashTables/StudentInfoTable/ArchivedClassesTable";
import axios from "axios";
// import { gsap } from "gsap";

export default () => {
  const user = useSelector((state) => state.user.USER);
  const [currentTeacher, setCurrentTeacher] = useState(null);

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
          Classrooms: Classrooms.filter((c) => c.isArchived),
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
                    <DropDownItem text={"/teacher"}>Dashboard</DropDownItem>
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
          <div className="desc">Archived Classes</div>
          <div className="mainContain">
            <div className="tableContain">
              <Table />
            </div>
          </div>
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
