import styled from "styled-components";

export default styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  font-family: Source Sans Pro;

  .contentWrapper {
    display: grid;
    grid-template-rows: 100px 1fr;
  }
  .mainContainer {
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
  }
  .navContainer {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .categoryContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 1.5rem 0;
  }
  .categoryGraphs {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 1rem 3%;
    align-items: flex-start;
    @media (max-width: 1024px) {
      align-items: center;
    }
    width: 97%;
    h1 {
      margin: 0;
      width: 100%;
      padding: 1rem 0 1rem 0;
      text-align: left;
      color: #0f4c75;
    }
  }
  .graphContainer {
    display: flex;
    place-content: space-between;
    padding: 0.5rem 0 0.5rem 1rem;
    width: 80%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .graphLegend {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0 1rem 0;
  }
  .legendTable {
    width: 60%;
    @media (max-width: 1024px) {
      width: 80%;
    }
    th {
      color: #0f4c75;
    }
    td {
      text-align: center;
    }
    td {
      svg {
        height: 20px;
        width: 20px;
      }
    }
  }
  .graph {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    align-items: center;

    .title {
      font-size: 1.2rem;
      color: #0f4c75;
      padding: 1rem;
      font-weight: 600;
      text-align: left;
      width: 100%;
    }
    .barChart {
      width: 300px;
      height: 370px;
      display: flex;
      justify-content: center;
      h1 {
        height: fit-content;
        align-self: center;
        padding: 0;
        width: fit-content;
      }
      @media (max-width: 1024px) {
        width: 200px;
        height: 270px;
      }
      @media (max-width: 768px) {
        width: 300px;
        height: 350px;
      }
    }
  }
  .helpButton {
    background: none;
    outline: none;
    border: none;
    height: 100%;
    margin-top: 5px;
    transform: translateY(7px);
    :hover {
      cursor: pointer;
    }
    svg {
      fill: #0f4c75;
      height: 30px;
      width: 25px;
    }
  }
  .up {
    svg {
      transform: rotate(270deg);
    }
  }
  .down {
    svg {
      transform: rotate(90deg);
    }
  }
  .categoryTitle {
    width: 97%;
    padding: 2rem 0 1rem 3%;
    font-size: 2.3rem;
    font-weight: 850;
    color: #0f4c75;
  }
  .level {
    width: 97%;
    padding: 2rem 0 1rem 3%;
    font-size: 1.2rem;
    /* font-weight:650; */
    color: #0f4c75;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h1 {
      margin-bottom: 0;
    }
  }
  .categoryInfo {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    width: 100%;
  }
  .categoryText {
    color: #0f4c75;
    font-size: 1.5rem;
    font-weight: 300;
    overflow-wrap: break-word;
    padding: 2rem 0 1rem 3%;
    width: 70%;
  }
  .categorySectionInfo {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
  .categoryName {
    background-color: #cceafd;
    font-weight: 750;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
  }
  .categoryDescription {
    background-color: #cceafd;
    padding: 20px 10px 20px 10px;
    height: inherit;
    display: flex;
    text-align: center;
    justify-content: center;
    border: 3px solid white;
  }
  .categoryHelpInfo {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    @media (min-width: 1025px) {
      .categorySectionInfo:nth-of-type(4n) {
        .categoryName {
          border-top-right-radius: 15px;
        }
        .categoryDescription {
          border-bottom-right-radius: 15px;
        }
      }
      .categorySectionInfo:nth-of-type(4n + 1) {
        .categoryName {
          border-top-left-radius: 15px;
        }
        .categoryDescription {
          border-bottom-left-radius: 15px;
        }
      }
    }
    .categorySectionInfo:nth-last-child(1) {
      .categoryName {
        border-top-right-radius: 15px;
      }
      .categoryDescription {
        border-bottom-right-radius: 15px;
      }
    }
    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      .categorySectionInfo:nth-of-type(3n) {
        .categoryName {
          border-top-right-radius: 15px;
        }
        .categoryDescription {
          border-bottom-right-radius: 15px;
        }
      }
      .categorySectionInfo:nth-of-type(3n + 1) {
        .categoryName {
          border-top-left-radius: 15px;
        }
        .categoryDescription {
          border-bottom-left-radius: 15px;
        }
      }
    }
    @media (max-width: 768px) {
      width: 95%;
      grid-template-columns: repeat(2, 1fr);
      .categorySectionInfo:nth-of-type(even) {
        .categoryName {
          border-top-right-radius: 15px;
        }
        .categoryDescription {
          border-bottom-right-radius: 15px;
        }
      }
      .categorySectionInfo:nth-of-type(odd) {
        .categoryName {
          border-top-left-radius: 15px;
        }
        .categoryDescription {
          border-bottom-left-radius: 15px;
        }
      }
    }
    grid-auto-rows: auto;
  }

  .tableCell {
    background-color: #cceafd;
    text-align: center;
    padding: 0.5rem 0 0.5rem 0;
    font-weight: 600;
    border: 2px solid white;
  }
  .tableHeader {
    border: 2px solid white;
    background-color: #cceafd;
  }
  .breakdownTable {
    width: 80%;
    border-collapse: collapse;
    @media (max-width: 768px) {
      width: 95%;
    }
    tr:nth-of-type(1) {
      th:nth-of-type(1) {
        border-top-left-radius: 15px;
      }
      th:nth-last-child(1) {
        border-top-right-radius: 15px;
      }
    }
    tr:nth-last-child(1) {
      td:nth-of-type(1) {
        border-bottom-left-radius: 15px;
      }
      td:nth-last-child(1) {
        border-bottom-right-radius: 15px;
      }
    }
  }
  .levelDesc {
    width: 100%;
  }
  .tableContainer {
    width: 100%;
    display: flex;
  }
  .confetti {
    position: relative;
    display: grid;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
    height: 100%;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);

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
  .header {
    display: grid;
    height: 70px;
    background: #000;
    grid-template-columns: 220px 1fr auto auto auto;
    grid-template-rows: 1fr;
    padding: 0.4rem 0;
    > .backToOverview {
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 15px;
      place-items: center;
      margin: 1rem;
      display: grid;

      padding: 0 1rem;
      font-weight: bold;
      color: #fff;
      grid-column: 3 / span 1;

      :hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
    > .backToClassroom {
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 15px;

      margin: 1rem;
      display: grid;
      place-items: center;
      padding: 0 1rem;
      font-weight: bold;
      color: #fff;
      grid-column: 4 / span 1;

      :hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
    > img {
      display: grid;
      justify-self: start;
      margin-left: 1rem;
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
      width: 190px;
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: bold;
      display: grid;
      padding: 0 1rem;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr;
      place-items: center;
      margin: 1rem;
      grid-column: 5 / span 1;
      color: #fff;

      :hover {
        opacity: 0.6;
        cursor: pointer;
      }
    }
  }
  .navLinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      text-align: left;
      width: 70%;
      padding: 1rem 0 1rem 0;
    }
    .navLink {
      font-size: 1.3rem;
      color: #0f4c75;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .activeLink {
      color: #00d3d3;
      text-decoration: underline;
      :hover {
        cursor: default;
      }
    }
  }
  .navTitle {
    font-size: 2rem;
    font-weight: 600;
    color: #0f4c75;
    width: 100%;
    padding: 1rem 0 0 1rem;
  }
`;
