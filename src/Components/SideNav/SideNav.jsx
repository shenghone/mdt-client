import React, { useState, useEffect } from "react";
import SideNavWrapper from "./Style/SideNavWrapper";

import mytutorlogobigV2 from "../../Static/mytutorlogobigV2.png";
import { ReactComponent as LogoutIcon } from "../../Static/Icons/log-out3.svg";

// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

// import { logOutAction, clearCurrentStudentAction } from "../../redux/actions";
// import axios from "axios";

function NavItem(props) {
  return (
    <NavLink
      to={props.linkTo}
      exact={true}
      activeClassName="linkActive"
      className="linkBasic"
    >
      <div className="navItem">
        <section className="linkIcon">{props.icon}</section>
        <section className="linkText">{props.title}</section>
      </div>
    </NavLink>
  );
}

function SideNav(props) {
  return (
    <SideNavWrapper>
      <div className="navHeader">
        <img src={mytutorlogobigV2} alt="My Tutor by DeenStrong" />
      </div>
      <div className="userName">Hello {props.userName}!</div>
      <div className="navMain">
        <nav>
          {props.children}
          <div className="navItem">
            <section className="linkIcon">
              <i className="fas fa-question-circle"></i>
            </section>
            <section className="linkText">Help Center</section>
          </div>
          <div className="navItem">
            <section className="linkIcon">
              <LogoutIcon />
            </section>
            <section className="linkText">Logout</section>
          </div>
        </nav>
      </div>
    </SideNavWrapper>
  );
}
export { NavItem, SideNav };
