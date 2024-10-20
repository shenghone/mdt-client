import React, { useState, useEffect } from "react";
import NavBarWrapper from "./Style/NavBarWrapper";
import mytutorlogobigV2 from "../../Static/LogoWhiteText.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logOutAction, clearCurrentStudentAction } from "../../redux/actions";
import axios from "axios";

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!user) {
      setOpen(false);
    }
  }, [user]);
  return (
    <li className="navItem">
      <p className="iconButton" onClick={() => setOpen(!open)}>
        {props.icon}
      </p>
      {open && props.children}
    </li>
  );
}

function NavBar(props) {
  return (
    <NavBarWrapper>
      <nav className="navBar">
        <section className="logo">
          <img src={mytutorlogobigV2} alt="My Tutor by DeenStrong" />
        </section>
        <section className="role">{props.role}</section>
        <section className="id">{props.id}</section>
        <section className="dropButton">{props.drop}</section>
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </NavBarWrapper>
  );
}
function DropDownMenu(props) {
  return <div className="dropdown">{props.children}</div>;
}
function DropDownItem({ onClick, children, text, setLogOutModal, ...rest }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const student = useSelector((state) => state.student.student);
  const clearStudent = () => dispatch(clearCurrentStudentAction());

  const logOut_action = () => dispatch(logOutAction());
  const logOut = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${process.env.REACT_APP_BACK_END}/api/signOut`,
        withCredentials: true,
      });

      if (!data.user) {
        logOut_action();
        history.replace("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleClick = async (text) => {
    if (text === "logout") {
      if (student) {
        clearStudent();
      }
      logOut();
    } else if (text === "testLogOut") {
      setLogOutModal(true);
    } else {
      history.push(text);
    }
  };
  return (
    <p className="menu-item" onClick={() => handleClick(text)}>
      {children}
    </p>
  );
}
export { NavBar, NavItem, DropDownMenu, DropDownItem };
