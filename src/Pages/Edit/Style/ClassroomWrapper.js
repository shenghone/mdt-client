import styled from "styled-components";
import GeneralWrapper from "../../../GeneralWrapper/GeneralWrapper";

export default styled(GeneralWrapper)`
  .dropdown {
    position: absolute;
    top: 68px;
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
  .content {
    padding: 1rem;
    display: grid;
    grid-area: mainContainer;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "ButtonArea"
      "BarArea"
      "TableArea";
    .accessCodeArea {
      margin: 1rem 0 0.5rem 0;
      min-height: 300px;
      width: 95%;
      justify-self: center;
      border-radius: 12px;
      display: grid;
      place-items: center;
      grid-row: 2 / span 2;
      grid-column: 1 / span 1;
      background: rgb(188, 225, 249);
      > div {
        display: grid;
        place-items: center;
        color: #0f4c75;
        width: 100%;
        > h2 {
          font-weight: bold;
        }
      }
      button {
        color: #fff;
        width: 60%;
        padding: 0.6rem;
        background: rgb(20, 77, 116);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        outline: none;
        border: none;
        border-radius: 12px;
        font-size: 1.1rem;
        :hover {
          opacity: 0.6;
          cursor: pointer;
        }
      }
    }
    .tableArea {
      grid-area: TableArea;
      width: 100%;
      display: grid;
      justify-self: center;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
      .addButtonContain {
        padding-top: 1rem;

        display: grid;
        align-items: center;
        cursor: pointer;
        width: 95%;
        align-items: center;
        justify-self: center;
        .addButtonWrapper {
          display: flex;
          justify-self: flex-end;
          background: #0f4c75;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 0.1rem 0.7rem;
          align-items: center;
          :hover {
            opacity: 0.6;
            > i {
              transform: rotate(180deg);
            }
          }
          > i {
            transition: 1s;
            color: #fff;
          }
          > button {
            border-radius: 20px;
            background: #0f4c75;
            border: none;
            cursor: pointer;

            outline: none;
            color: #ffffff;
            font-style: normal;
            font-weight: normal;
            margin-right: 3%;
            /* font-size: 16px; */

            padding: 0.5rem 0.9rem;
          }
        }
      }
    }

    .barArea {
      grid-area: BarArea;
      grid-row: 2 / span 1;
      width: 90%;
      display: grid;
      place-items: center;
      justify-self: center;
      transition: 1s;
      transform: ${(props) => (props.step === 3 ? "translateY(1.9rem)" : "")};
      margin: 1rem;
      box-sizing: border-box;
      .barWrapper {
        position: relative;
        background: var(--lightBlue);
        width: 100%;
        height: 25px;
        border-radius: 25px;
        .innerBar {
          border-radius: 25px;
          width: 0%;
          position: absolute;
          left: 0;
          height: 100%;
          background: var(--darkBlue);
        }
      }
    }

    /*the back and next area*/
    .buttonArea {
      button {
        cursor: pointer;
        outline: none;
        border: none;
        padding: 0.6rem;
        background: var(--darkBlue);
        border-radius: 10px;
        color: #fff;
        transform: scale(0.7);
        :hover {
          opacity: 0.6;
        }
      }
      grid-area: ButtonArea;
      width: 95%;
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, auto);
      .backAndForwardRow {
        align-items: start;
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: 1fr;
        .buttonWrapper {
          max-height: 57.19px;
          max-width: 57.19px;
          svg {
            width: 38px;
            height: 38px;
            object-fit: contain;
            fill: #fff;
          }
        }
      }
      .title {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        color: var(--darkBlue);
        font-size: 1.4rem;
      }

      .toDashboard {
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr;
        place-items: end;
      }
      .fas {
        font-size: 38px;
      }
    }
  }
`;
