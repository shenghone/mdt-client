import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "nav"
    "content"
    "footer";
  .missingSkillTable {
    width: 100%;
    .headerRow {
      th:nth-of-type(1) {
        border-top-left-radius: 15px;
      }
      th:nth-of-type(2) {
        border-top-right-radius: 15px;
      }
    }
    .cell {
      background-color: #bbe1fa;
      color: #052f4a;
      padding: 1rem;
      font-size: 1.4rem;
      text-align: left;
      line-height: 1.8rem;
    }
    .tableCell,
    .tableHeader {
      background-color: #bbe1fa;
      color: #052f4a;
      padding: 1rem;
      font-size: 1.4rem;
      text-align: center;
      line-height: 1.8rem;
    }
    .categoryRow {
      background-color: #bbe1fa;
      color: #052f4a;
      padding: 1rem 0.3rem 1rem 0.3rem;
      font-size: 1.4rem;
      text-align: center;
    }
  }
  .contentWrapper {
    grid-area: content;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 180px auto auto auto auto auto auto;
    h3 {
      color: #0a3856;
      font-size: 2rem;
      font-weight: 700;
    }
    .summary {
      font-size: 1.5rem;
      padding: 1rem 0 1rem 1rem;
      color: #052f4a;
      line-height: 125%;
    }
    .chartContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .pretestTableContainer {
      display: flex;
      place-content: center;
    }
    .pretestTable {
      width: 100%;
      font-size: 1.5rem;
      .tableCell {
        text-align: center;
      }
      .tableRow:nth-last-of-type(1) {
        td:nth-of-type(1) {
          border-bottom-left-radius: 15px;
        }
        td:nth-of-type(3) {
          border-bottom-right-radius: 15px;
        }
      }
      .tableRow:nth-of-type(1) {
        th:nth-of-type(1) {
          border-top-left-radius: 15px;
        }
        th:nth-of-type(2) {
          border-top-right-radius: 15px;
        }
      }
    }
    .tableHeader,
    .tableCell {
      background-color: #bbe1fa;
      color: #052f4a;
      padding: 1rem 0.3rem 1rem 0.3rem;
      font-size: 1.4rem;
    }

    .resultTableContainer {
      display: flex;
      flex-direction: column;
    }
    .overviewTable {
      margin-bottom: 2.5rem;
      .tableCell {
        text-align: center;
      }
      .tableRow:nth-last-of-type(1) {
        td:nth-of-type(1) {
          border-bottom-left-radius: 15px;
        }
        td:nth-of-type(8) {
          border-bottom-right-radius: 15px;
        }
      }
      .tableRow:nth-of-type(1) {
        th:nth-of-type(1) {
          border-top-left-radius: 15px;
        }
        th:nth-of-type(5) {
          border-top-right-radius: 15px;
        }
      }
    }
    .resultTable {
      .tableHeader {
        padding: 1.5rem;
      }
      .tableRow:nth-last-of-type(1) {
        td:nth-of-type(1) {
          border-bottom-left-radius: 15px;
        }
        td:nth-of-type(2) {
          border-bottom-right-radius: 15px;
        }
      }
      .tableRow:nth-of-type(1) {
        th:nth-of-type(1) {
          border-top-left-radius: 15px;
        }
        th:nth-of-type(2) {
          border-top-right-radius: 15px;
        }
      }
    }
    .chartWrapper {
      > div {
        /* position: absolute; */
        width: 100%;
        height: 100%;
      }
      position: relative;
      width: 50%;
      @media (max-width: 1024px) {
        width: 80%;
      }
      @media (max-width: 500px) {
        width: 90%;
      }
      display: flex;
      flex-direction: column;
      justify-self: center;
      height: 700px;
    }
    .chartTitle {
      padding: 1.5rem 0 0.5rem 0;
      font-size: 3rem;
      font-weight: 600;
      color: #838383;
      display: flex;
      align-content: center;
      font-family: Source Sans Pro;
    }
    .reportDesc {
      grid-row: 2 / span 1;
      width: 50%;
      @media (max-width: 1024px) {
        width: 80%;
      }
      @media (max-width: 500px) {
        width: 90%;
      }
      justify-self: center;
      line-height: 1.25rem;
      font-family: "Source Sans Pro";
    }
    .buttonContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3.5rem 0 2.5rem 0;
    }
    .continueReading {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: #0f4c75;
      outline: none;
      color: white;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 20px;
      padding: 0.5rem 1rem 0.5rem 1rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      svg {
        fill: white;
        margin-left: 0.5rem;
        height: 40px;
        width: 40px;
      }
      :hover {
        cursor: pointer;
        background: black;
      }
    }
    .confetti {
      position: relative;
      display: grid;
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
      width: 100%;
      height: 100%;
      h2 {
        position: absolute;
        display: grid;
        justify-self: center;
        align-self: center;
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: bold;
        text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
        font-size: 40px;
        color: #fff;
      }
      > img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .chartLegend {
    font-family: Source Sans Pro;
    width: 50%;
    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      margin: 0;
    }
    .tableHeading {
      font-weight: 550;
      color: #0f4c75;
    }
    svg {
      height: 20px;
      width: 20px;
    }
    table {
      width: 95%;
    }
    td {
      text-align: center;
    }
  }
  .studentInfo {
    display: flex;
    place-content: space-evenly;
    width: 100%;
    background-color: #d9f7fe;
    color: #0a3856;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    font-size: 1.2rem;
    margin: 2rem 0 2rem 0;
    h3 {
      font-weight: 600;
      font-size: 1.5rem;
    }
    .infoColumn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .header {
    display: grid;
    grid-area: nav;
    height: 80px;
    background: #000;
    grid-template-columns: 220px 1fr auto auto;
    grid-template-rows: 1fr;
    padding: 0.4rem 0;
    > .backToClassroom {
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 15px;
      place-items: center;
      margin: 1rem 1.5rem;
      font-weight: bold;
      color: #fff;
      grid-column: 3 / span 1;
      display: grid;
      place-items: center;
      padding: 0 1rem;
      :hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
    > img {
      display: grid;
      justify-self: start;
      padding: 0 0.5rem;
      width: 100%;
      height: 100%;
      object-fit: contain;
      :hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
    .supportCentreWrapper {
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 15px;
      place-items: center;
      margin: 1rem 1.5rem;
      font-weight: bold;
      color: #fff;
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: bold;
      width: 190px;
      font-family: "Source Sans Pro";
      font-style: normal;

      display: grid;
      padding: 0 1rem;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr;
      place-items: center;
      margin: 1rem 1.5rem;
      color: #fff;
      grid-column: 4 / span 1;

      :hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
  }
`;
