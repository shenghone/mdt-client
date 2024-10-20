import React from "react";
import FooterWrapper from "./Style/FooterWrapper";
import dayjs from "dayjs";
export default () => {
  return (
    <FooterWrapper>
      <footer className="footerCommon">
        <div> &copy; Math Diagnostic Test {dayjs(new Date()).get("year")} </div>
      </footer>
    </FooterWrapper>
  );
};
