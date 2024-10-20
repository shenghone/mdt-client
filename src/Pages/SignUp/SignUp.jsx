import React, { useLayoutEffect, useRef } from "react";
import SignUpWrapper from "./Style/SignUpWrapper";
import CouragePic from "../../Static/Img1.jpg";
import Logo_V2 from "../../Static/Logo_V2.png";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import { gsap } from "gsap";
import { useHistory, useParams, useLocation } from "react-router-dom";

export default () => {
  const history = useHistory();
  const wrapperRef = useRef();
  const location = useLocation();
  const params = useParams();

  const handleTo = (to) => {
    history.push(to);
  };
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
  return (
    <SignUpWrapper ref={wrapperRef} role={params.role}>
      {!params ||
        (!params.role && (
          <div>
            <div onClick={() => handleTo("/signUp/admin")}>admin</div>
            <div onClick={() => handleTo("/signUp/teacher")}>teacher</div>
          </div>
        ))}
      {params && params.role && (
        <section>
          <div>
            <img src={CouragePic} alt="boy on the cliff" />
          </div>
          <div>
            <div>
              <img
                onClick={() => handleTo("/")}
                src={Logo_V2}
                alt="deenStrong logo"
              />
            </div>
            <div>
              <SignUpForm role={params.role} />
            </div>
          </div>
        </section>
      )}
    </SignUpWrapper>
  );
};
