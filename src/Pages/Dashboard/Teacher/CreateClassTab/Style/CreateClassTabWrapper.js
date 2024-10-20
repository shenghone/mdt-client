import styled from "styled-components";

export default styled.div`
  position: relative;
  --medBlue: #3282b8;
  --lightBlue: #bbe1fa;
  --darkBlue: rgb(18, 70, 105);
  grid-row: 2 / span 2;

  grid-template-rows: 4fr 6fr;
  grid-template-columns: 1fr;
  box-sizing: border-box;
  padding: 2.5rem 2.5rem 1.2rem;

  .iconWrapper {
    padding: 0.6rem;
    border-radius: 10px;
    border: none;
    outline: none;
    background: var(--darkBlue);
    color: #fff;
    height: 40px;
    width: 40px;
    transform: scale(0.8);
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    .fas {
      font-size: 38px;
    }

    svg {
      height: auto;
      width: 110%;
      fill: #fff;
    }
    :hover {
      opacity: 0.6;
      cursor: pointer;
    }
    /* .fas {
      transform: scale(1.4);
    } */
  }
  .contentArea {
    background: ${(props) =>
      props.step === 1 || props.step === 3 ? "var(--lightBlue)" : ""};
    border-radius: 15px;
    margin-top: 2rem;
    display: grid;
    padding: 1rem;
    align-items: end;
    grid-template-rows: 2fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "bar"
      "content";

    grid-row-gap: 15px;

    .bar {
      width: 95%;
      display: grid;
      transition: 1s;
      transform: ${(props) =>
        props.step === 1 || props.step === 3 ? "" : "translateY(-25px)"};
      justify-self: center;
      position: relative;
      border-radius: 25px;
      height: 25px;
      background: var(--medBlue);
      margin-top: 1rem;
      .innerBar {
        border-radius: 25px;
        left: 0;
        height: 100%;
        position: absolute;
        min-width: 0px;
        background: var(--darkBlue);
      }
    }
    .content {
      font-size: 2rem;
      min-height: 200px;
      display: grid;
      place-items: center;
      width: 100%;
      display: grid;
      place-items: center;
      .Grade {
        width: 50%;
        justify-self: center;
        align-self: start;
        > section {
          position: relative;
          > ul {
            position: absolute;
            > li {
              position: absolute;
            }
          }
        }
      }
      .AccessCodeWrapper {
        display: grid;
        place-items: center;
        color: #0f4c75;
        > p {
          font-weight: bold;
        }
        > button {
          width: 80%;
          padding: 0.6rem 1rem;
          background: #0f4c75;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          font-size: 1.2rem;
          color: #fff;
          border: none;
          outline: none;
          cursor: pointer;
          :hover {
            opacity: 0.6;
          }
        }
      }
      > section {
        display: grid;
        align-items: center;
        > section {
          align-items: center;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 20px;
        }
        span {
          font-size: 0.8rem;
          color: red;
        }
      }
      .ClassName {
        display: grid;
        width: 60%;
        justify-self: center;
        input {
          display: grid;
          justify-self: center;
          width: 100%;
        }
      }
      .title{
        
        width:90%;
        color: #0F4C75;
        h1{
          font-family: sans-serif;
          display:flex;
          font-weight: 700;
          align-content:center;
          justify-content:center;
          font-size:4rem;
        }
        
      }
      input {
        border-radius: 8px;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      select {
        border-radius: 8px;
        width: 100%;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
  .buttonArea {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;

    .title {
      display: grid;
      align-self: center;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .backToTeacher {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr;
    }
    .nextAndBack {
      display: grid;
      width: 100%;
      grid-template-columns: 10% 80% 10%;
      grid-template-rows: 1fr;
      grid-template-areas: "back blank forward";
      .right {
        border: none;
        outline: none;
        grid-area: forward;
        justify-self: flex-end;
      }
      .left {
        border: none;
        outline: none;
        grid-area: back;
        svg {
          transform: rotate(180deg);
        }
      }
      .right,
      .left {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;
