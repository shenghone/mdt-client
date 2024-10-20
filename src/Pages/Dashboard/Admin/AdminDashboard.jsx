import React, { useState, useRef, useEffect } from "react";
import {
  NavBar,
  NavItem,
  DropDownMenu,
  DropDownItem,
} from "../../../Components/NavBar2/NavBar";
import { ReactComponent as Name } from "../../../Static/Icons/Name.svg";
import { ReactComponent as Search } from "../../../Static/Icons/search-circle.svg";
import { ReactComponent as Caret } from "../../../Static/Icons/caret-back-sharp.svg";
import AdminDashboardWrapper from "./Style/AdminDashboardWrapper";
import Footer from "../../../Components/Footer/Footer";
import Table from "../../../Components/Tables/AdminDashTables/TeacherInfoTable/TeacherInfoTable";
import { useSelector } from "react-redux";
// import AddTeacherForm from "../../../Components/AddTeacherForm/AddTeacherForm";
// import EditTeacherForm from "../../../Components/EditTeacherForm/EditTeacherForm";

import TeacherForm from "../../../Components/AddTeacherForm/AddTeacherForm";
import { gsap } from "gsap";
import {
  NumberCard,
  PercentageCard,
} from "../../../Components/InfoCards/InfoCard";
import { getDaysUntilSubEnds } from "../../../util";
import axios from "axios";

export default () => {
  const user = useSelector((state) => state.user.USER);
  const teachers = useSelector((state) => state.teachers.teachers);

  const [subscriptionEndDate] = useState("2021-09-21");
  const wrapperRef = useRef();
  const [openAddTeacherForm, setOpenAddTeacherForm] = useState(false);
  const [openModifyTeacherForm, setOpenModifyTeacherForm] = useState(false);

  const [admin, setAdmin] = useState(null);
  const getNumberOfTestsLeft = (admin) => {
    return admin.Teachers.reduce((result, t) => {
      return (result -= t.Available_tests);
    }, admin.Tests_Owned);
  };
  const getPercentage = (adminData) => {
    const { Tests_Owned } = adminData;
    const t = adminData.Teachers.reduce((total, teacher) => {
      return (total += teacher.Available_tests);
    }, 0);
    return (t / Tests_Owned).toFixed(2) * 100;
  };

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      if (openAddTeacherForm || openModifyTeacherForm) {
        gsap.to(wrapperRef.current, 0.7, {
          opacity: 0.8,
        });
      } else {
        if (!openAddTeacherForm && !openModifyTeacherForm) {
          gsap.to(wrapperRef.current, 0.7, {
            opacity: 1,
          });
        }
      }
    }
  }, [openAddTeacherForm, openModifyTeacherForm]);
  useEffect(() => {
    if (user) {
      const getCurrentAdmin = async () => {
        try {
          const { _id } = user;
          const { data } = await axios(
            `${process.env.REACT_APP_BACK_END}/api/admin/${_id}`,
            {
              withCredentials: true,
            }
          );
          if (data) {
            console.log(data);
            setAdmin(data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getCurrentAdmin();
    }
  }, [user, teachers]);

  if (user) {
    return (
      <>
        {openAddTeacherForm && (
          <TeacherForm
            title={"Add a teacher"}
            open={openAddTeacherForm}
            setOpen={setOpenAddTeacherForm}
          />
        )}
        {openModifyTeacherForm && (
          <TeacherForm
            title={"Edit Teacher info"}
            open={openModifyTeacherForm}
            setOpen={setOpenModifyTeacherForm}
          />
        )}
        <AdminDashboardWrapper ref={wrapperRef}>
          <div className="navContain">
            <NavBar
              id={`${user.First_name} ${user.Last_name}`}
              drop={
                <NavItem icon={<Caret />}>
                  <DropDownMenu>
                    <DropDownItem>Buy a Test</DropDownItem>
                    <DropDownItem>History</DropDownItem>
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
          <div className="desc">Admin Dashboard</div>
          <div className="mainContain">
            <div className="infoBox">
              <NumberCard
                title="No. of Days Remaining"
                value={getDaysUntilSubEnds()}
                mainCap="Days until"
                caption={subscriptionEndDate}
                className="card1"
              />
              <PercentageCard
                title="Percentage of tests used"
                percentage={
                  admin && admin.admin ? getPercentage(admin.admin) : 10
                }
                className="card2"
              />
              <NumberCard
                title="No. of Tests Remaining"
                value={
                  admin && admin.admin ? getNumberOfTestsLeft(admin.admin) : 0
                }
                mainCap="Days until"
                caption={subscriptionEndDate}
                className="card3"
              />
            </div>
            <div className="buttonContain">
              <div
                className="buttonWrapper"
                onClick={() => setOpenAddTeacherForm(!openAddTeacherForm)}
              >
                <i className="fas fa-plus-circle"></i>
                <button>Add</button>
              </div>
            </div>

            <div className="tableContain">
              <Table
                setOpenModifyTeacherForm={setOpenModifyTeacherForm}
                openModifyTeacherForm={openModifyTeacherForm}
              />
            </div>
          </div>

          <div className="footerContain">
            <Footer />
          </div>
        </AdminDashboardWrapper>
      </>
    );
  }
  return null;
};
