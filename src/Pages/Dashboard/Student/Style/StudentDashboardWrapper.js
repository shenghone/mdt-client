import styled from "styled-components";

export default styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    .mainContain {
      .studentDisplay {
        h1 {
          font-size: 3.5rem;
        }
        h4 {
          font-size: 2rem;
        }
        .startTest {
          font-size: 2rem;
        }
        width: 50%;
        padding: 2rem 1rem;
      }
    }
  }
  /*  */

  height: 100%;
  width: 100%;
  /* @media (max-width: 415px) {
    .studentDisplay{
        width:90%;
        h1{
            font-size:2rem;
        }
        h4{
            font-size: 1rem;
        }
        .startTest{
            font-size: 1rem;
        }
    }
  } */
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "navbar" "container" "footer";
  grid-template-columns: 1fr;
  overflow-x: hidden;
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
  .footerContain {
    grid-area: footer;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .navContain {
    grid-area: navbar;
    width: 100%;
    height: 100%;
  }
  .mainContain {
    grid-area: container;
    max-width: 100%;
    max-height: 100%;
    /* display: grid; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;

    .studentDisplay {
      /* width: auto; */
      margin: 1rem;
      padding: 1.5rem;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr auto;
      grid-template-columns: 1fr;
      grid-template-areas: "title" "message" "button" "optionalButton";
      text-align: center;
      background-color: #c1e7f6;
      box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
      h1 {
        font-size: 2.5rem;
        font-family: Roboto;
        font-weight: bold;
        color: #0F4C75;
      }
      h4 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.5rem;
        color: #0F4C75;
      }
      .startTest {
        width: 60%;
        height: auto;
        background: #0F4C75;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        font-family: Rasa;
        font-style: normal;
        font-weight: normal;
        color: white;
        outline: none;
        border: none;
        padding: 1rem 0.5rem;
        font-size: 1.5rem;
        :hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
      div:nth-of-type(1) {
        grid-area: title;
      }
      div:nth-of-type(2) {
        grid-area: message;
      }
      div:nth-of-type(3) {
        grid-area: button;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .studentDisplay{
    width:auto;
  }
`;
