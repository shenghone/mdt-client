import styled from "styled-components";

export default styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  background: #efefef;
  font-family: "Rasa";
  grid-template-areas:
    "h"
    "b"
    "f";
  .dropdown {
    z-index: 99;
    position: absolute;
    top: 66px;
    transform: translateX(-137.5px);
    @media (max-width: 1024px) {
      transform: translateX(-148px);
    }
    @media (max-width: 768px) {
      transform: translateX(-152px);
    }
    @media (max-width: 1366px) {
      transform: translateX(-142.7px);
    }
  }
  .mainContain {
    position: relative;
    height: 100%;
    grid-area: b;
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    background: #efefef;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "formArea"
      "buttons";
    > form {
      padding: 1rem 1rem 0;
      border-radius: 12px;
      display: grid;
      grid-area: formArea;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr;
      grid-template-areas:
        "testQuestion"
        "buttons";
      .buttonArea {
        margin: 1rem 0;
        grid-area: buttons;
        display: flex;
        justify-content: center;
        align-content: center;
        place-content: space-evenly;
        width: 30%;
        justify-self: center;

        button {
          height: auto;
          width: 60px;
          height: 60px;
          background: #0f4c75;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          font-family: Rasa;
          font-style: normal;
          font-weight: normal;
          color: white;
          outline: none;
          border: none;
          padding: 0.5rem 0.5rem;
          font-size: 1.5rem;
          svg {
            width: 100%;
            height: auto;
            fill: #fff;
          }
          :hover {
            cursor: pointer;
            opacity: 0.6;
          }
        }
        .back {
          svg {
            transform: rotate(180deg);
          }
        }
      }
      .questionArea {
        grid-area: testQuestion;
        width: 100%;
        height: -webkit-fill-available;
        height: -moz-available;
        min-height: 450px;
        display: grid;

        align-content: center;
        justify-content: center;
        height: 100%;

        .questionContainer {
          position: relative;
          border-radius: 12px;
          background: #fff;
          justify-self: center;
          padding: 1rem 2rem;
          width: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          place-items: center;
          align-content: center;
          @media (max-width: 1024px) {
            width: 80%;
          }
          min-height: 400px;
          min-width: 600px;
          height: auto;
          box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
          .doesntExist {
            position: absolute;
            left: 1rem;
            top: 0.5rem;
          }
          > span {
            padding: 1rem 0;
          }
          .question {
            grid-template-rows: auto auto;
            display: grid;
            justify-content: center;
            width: 100%;
            height: 100%;
            min-height: 350px;
            .content {
              display: grid;
              align-items: center;
            }
            img {
              margin: 1rem 0;
              /* max-width: 500px; */
              max-width: 500px;
              height: 100%;
              min-height: 250px;
              object-fit: contain;
              max-height: 290px;
              justify-self: center;
            }
            ul {
              display: grid;
              padding: 0;
              justify-content: start;
              list-style: none;

              li {
                padding: 0.2rem;
              }
            }
          }
          .questionTitle {
            display: grid;
            text-align: center;
            > * {
              margin: 0;
              padding: 1rem 0 0 0;
            }

            justify-self: center;
            place-items: center;
          }
          .desc {
            > * {
              margin: 0;
              padding: 0;
            }
            display: grid;
            text-align: center;
            justify-self: center;
          }
          /* display:grid;
        grid-template-rows: 20% 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "progressBar" "question"; */
        }
      }
    }
  }
  .pretestResultWrapper {
    position: relative;
    grid-area: b;
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
    display: grid;
    place-items: center;
    .studentDisplay {
      background: #bbe1fa;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      display: grid;
      place-items: center;
      width: 80%;
      max-width: 640px;
      box-sizing: border-box;
      height: auto;
      padding: 2rem 0;
      .buttonContainer {
        font-family: "Rasa";
        margin-bottom: 1rem;
        width: 100%;
        display: grid;
        place-items: center;
        > button {
          font-size: 22px;
          cursor: pointer;
          :hover {
            opacity: 0.6;
          }
          background: #0f4c75;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 15px;
          color: #fff;
          padding: 1rem;
          width: 50%;
          max-width: 350px;
          border: none;
          outline: none;
        }
      }
      .titleContainer {
        display: grid;
        place-items: center;
        color: #0f4c75;
        font-weight: normal;
        > h1 {
          font-size: 48px;
          font-weight: bold;
        }
        > h4 {
          display: grid;
          align-self: start;
          font-size: 28px;
          margin: 0px 0px 2.5rem 0px;
          font-weight: normal;
        }
      }
    }
  }

  .bar {
    grid-area: progressBar;
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    div:nth-of-type(1) {
      width: 90%;
      height: 50%;
      align-items: center;
      /* border-radius:20px; */
      > svg {
        height: 100%;
        width: 100%;
      }
    }
  }
`;
