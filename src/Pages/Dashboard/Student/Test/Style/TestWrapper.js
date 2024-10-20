import styled from "styled-components";
import StudentTestWrapper from "../../Pretest/StudentTestWrapper";

export default styled(StudentTestWrapper)`
  .mainContain {
    transition: 0.6s;
    background: ${(props) => (props.open ? "rgba(0, 0, 0, 0.6)" : "")};
  }
  .questionArea {
    opacity: ${(props) => (props.open ? 0.6 : 1)};
  }

  .pretestResultWrapper {
    transition: 0.4s;
    background: ${(props) => (props.final ? "rgba(0, 0, 0, 0.6)" : "")};
  }
  .studentDisplay {
    transition: 0.4s;
    opacity: ${(props) => (props.final ? 0.6 : 1)};
  }
  .modal {
    z-index: 999;
    position: absolute;
    width: auto;
    min-width: 350px;
    min-height: 180px;
    height: auto;
    background: #bbe1fa;
    box-shadow: 5px 10px 6px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    display: grid;

    font-family: "Source Sans Pro", sans-serif;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    justify-self: center;
    align-self: center;
    z-index: 99;
    .modal-content {
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.5rem;
      input {
        color: #0f4c75;
      }
      .buttonSection {
        margin: 0.7rem 0;

        > button {
          border-radius: 6px;
          margin: 0 1rem;
          width: 110px;
          padding: 0.4rem 0.6rem;
          outline: none;
          border: none;
          :hover {
            opacity: 0.6;
            cursor: pointer;
          }
        }
        > button:first-child {
          font-weight: bold;
          background: #0f4c75;
          color: #fff;
          border: 2px solid #0f4c75;
        }
        > button:nth-of-type(2) {
          border: 2px solid #0f4c75;
        }
      }
    }
    > .modal-header {
      display: grid;
      border-radius: 7px 7px 0 0;
      background: #000;
      position: relative;
      width: 100%;
      grid-template-columns: 1fr auto;
      grid-template-rows: 1fr;
      color: #fff;
      font-size: 1.1rem;
      font-weight: 400;
      box-sizing: border-box;
      padding: 0 0.3rem;

      > span {
        padding: 0.5rem;
      }
      .x {
        display: grid;
        grid-column: 2 / span 1;
        transition: 0.6s;
        :hover {
          opacity: 0.6;
          cursor: pointer;
        }
      }
    }
  }
  .questionNum {
    box-sizing: border-box;
    margin: 1rem;
    padding: 0;
    text-align: center;
    font-size: 1.7rem;
  }
  .questionTitle > * {
    padding: 1rem 0;
    margin: 0;
    font-size: 1.4rem;
  }

  li {
    * {
      display: inline;
    }
  }
`;
