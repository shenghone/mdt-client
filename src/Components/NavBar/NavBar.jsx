import React from "react";
import NavBarWrapper from "./Style/NavBarWrapper";
import { Link, useHistory, useLocation } from "react-router-dom";

import mytutorlogobigV2 from "../../MDTnewLogo.png";

export default () => {
  const history = useHistory();
  const location = useLocation();
  const handleTo = (to) => {
    history.push(to);
  };
  const getLocation = (l) => {
    return l.pathname.split("/");
  };

  return (
    <NavBarWrapper
      location={getLocation(location)[1]}
      role={getLocation(location)[2]}
    >
      <img
        onClick={() => handleTo("/")}
        src={mytutorlogobigV2}
        alt="deenstrong logo"
      />
      <ul>
        <Link to="/schools">schools</Link>
        <Link to="/resources">resources</Link>
        <Link to="/contactUs">contact us</Link>
        <Link to="/signUp">sign up</Link>
        <Link to="/logIn">log in</Link>
      </ul>
    </NavBarWrapper>
  );
};
