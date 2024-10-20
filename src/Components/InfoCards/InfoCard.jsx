import React from "react";
import InfoCardWrapper from "./Style/InfoCardWrapper";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function NumberCard(props) {
  return (
    <InfoCardWrapper>
      <div className="numberCardContainer">
        <div className="cardHeader">{props.title}</div>
        <div className="mainEntry">{props.value}</div>
        <div className="cardCaption">
          {props.mainCap} {props.caption}
        </div>
      </div>
    </InfoCardWrapper>
  );
}

function PercentageCard(props) {
  return (
    <InfoCardWrapper>
      <div className="percentageCardContainer">
        <div className="cardHeader">{props.title}</div>
        <div className="percentage">
          <CircularProgressbar
            value={Math.round(props.percentage)}
            text={`${Math.round(props.percentage)}%`}
          />
          {/* Docs for Component: https://www.npmjs.com/package/react-circular-progressbar */}
        </div>
      </div>
    </InfoCardWrapper>
  );
}
export { NumberCard, PercentageCard };
