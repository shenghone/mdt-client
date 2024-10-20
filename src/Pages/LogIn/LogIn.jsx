import React, { useLayoutEffect, useRef, useEffect } from "react";
import LogInWrapper from "./Style/LogInWrapper";
import CouragePic from "../../Static/Img1.jpg";
import { ReactComponent as HomeLogo } from "../../Static/Icons/home-outline.svg";
import LogInForm from "../../Components/LogInForm/LogInForm";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { NavBar, NavItem } from "../../Components/NavBar2/NavBar";

export default () => {
  // const history = useHistory();
  const wrapperRef = useRef();
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const user = useSelector((state) => state.user.USER);

  // const handleTo = (to) => {
  //   history.push(to);
  // };

  useLayoutEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      gsap.set(wrapperRef.current, {
        opacity: 0,
      });
      gsap.to(wrapperRef.current, 1, {
        opacity: 1,
      });
    }
  }, [location]);
  useEffect(() => {
    if (user && user.Role === "student") {
      history.push("/student");
    } else if (user && user.Role === "admin") {
      history.push("/admin");
    } else if (user && user.Role === "teacher") {
      history.push("/teacher");
    }
  }, [location, params, user, history]);
  return (
    <LogInWrapper ref={wrapperRef} role={params.role}>
      {params && params.role && (
        <section>
          <div>
            <img src={CouragePic} alt="boy on the cliff" />
          </div>
          <div className="container">
            <div className="navContain">
              <NavBar>
                <a href="/">
                  <NavItem icon={<HomeLogo />} />
                </a>
              </NavBar>
            </div>
            <div className="formContain">
              <LogInForm role={params.role} />
            </div>
          </div>
        </section>
      )}
    </LogInWrapper>
  );
};
