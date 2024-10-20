import styled from "styled-components";

export default styled.div`
  display: grid;
  position: relative;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr 3%;
  grid-template-areas:
    "navbar"
    "desc"
    "containerMain"
    "footer";
  overflow-x: hidden;
  .dropdown {
    position: absolute;
    z-index: 99;
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
  .mainContain {
    grid-area: containerMain;
    display: grid;
    margin-bottom: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    grid-template-areas:
      "infoBox"
      "buttons"
      "tableArea";
    .infoBox {
      grid-area: infoBox;
      display: grid;
      height: 100%;
      width: 95%;
      justify-items: center;
      justify-self: center;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;

      grid-column-gap: 15%;
      > div:nth-of-type(1) {
        justify-self: end;
      }
      > div:nth-of-type(2) {
        justify-self: start;
      }
    }
    .buttonContain {
      padding-top: 1rem;
      grid-area: buttons;
      display: grid;
      align-items: center;
      cursor: pointer;
      width: 95%;
      align-items: center;
      justify-self: center;
      .buttonWrapper {
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
    .tableContain {
      grid-area: tableArea;
      /* display:flex; */
      align-content: center;
      justify-content: center;
      display: flex;

      padding-top: 1rem;
      > div:nth-of-type(1) {
        height: auto;
        box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
        height: fit-content;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      > div:nth-of-type(1)::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .desc {
    grid-area: desc;
    font-size: 1.6rem;
    padding: 1rem;
    color: #0f4c75;
    font-weight: 600;
  }
  .footerContain {
    grid-area: footer;
    bottom: 0;
  }
`;
