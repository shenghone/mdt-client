import styled from "styled-components";

export default styled.div`
  grid-row: ${(props) => (props.role ? "1 / span 2;" : "")};
  height: 100%;
  place-items: ${(props) => (!props.role ? "center" : "")};
  background: #0073a2;
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow-x: hidden;

  @media (max-width: 415px) {
    > section {
      > div:nth-of-type(2) {
        > div:nth-of-type(2) {
          /* margin-top:5%; */
        }
      }
    }
  }
  @media (max-width: 1024px) {
    height: 100%;
    display: grid;
    > section {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      height: 100%;

      > div:nth-of-type(1) {
        display: none;
      }
      > div:nth-of-type(2) {
        width: 100%;
        > div:nth-of-type(1) {
          width: 100%;
          height: 10%;
          /* text-align: center; */
          /* Logo */
          /* img {
            height: auto;
            width: 60%;
          } */
          .logo img {
            /* display: none; */
            margin-left: 125%;
          }
        }
        > div:nth-of-type(2) {
          width: 100%;
          /* height: max-content; */
          height: 80%;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    overflow-y: hidden;
    > div {
      width: 45%;
    }
  }
  @media (max-width: 420px) {
    > section {
      > div:nth-of-type(2) {
        > div:nth-of-type(1) {
          .logo img {
            margin-left: 108%;
          }
        }
      }
    }
  }
  /*if there is a "role" param we use section*/
  > section {
    background: #fff;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;
    grid-template-areas: "photo container";
    max-height: 100vh;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
    max-height: 100%;
    /* the boy picture*/
    /* @media (min-width: 1025px) {
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    } */
    > div:nth-of-type(1) {
      grid-area: photo;
      height: 100%;
      width: 100%;
      > img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        /* box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25); */
      }
    }
    /*the column on the right side of the screen*/
    > .contain {
      grid-area: container;
      width: 100%;
      height: 100%;
      display: grid;
      align-items: center;
      place-items: center;
      grid-template-rows: 3fr 7fr;
      grid-template-columns: 1fr;
      grid-template-areas: "navBar formContain";
    }
    /*logo*/
    .navContain {
      grid-area: navBar;
      width: 100%;
      height: 20%;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      grid-template-areas: "navBar";
      /* img {
          :hover {
            cursor: pointer;
            opacity: 0.6;
          }
          transform: scale(0.8);
        } */
      .logo img {
        /* display: none; */
        margin-left: 115%;
        :hover {
          cursor: unset;
          opacity: 1;
        }
      }
      .role img {
        margin-left: -35%;
      }
      > .navBar {
        grid-area: navbar;
      }
    }

    .navBar a {
      display: flex;
    }
    /*the form wrapper*/
    .formContain {
      grid-area: formContain;
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 1.5rem 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  /*if there is no "role" param, we use div*/
  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    > div {
      width: 120px;
      height: 120px;
      display: grid;
      cursor: pointer;
      color: #000;
      place-items: center;
      border-radius: 50%;
      margin: 1rem;
      transition: all 0.6s;
      :hover {
        opacity: 0.6;
        transform: scale(1.1);
      }
      &:nth-of-type(1) {
        background: #f6cd61;
      }
      &:nth-of-type(2) {
        background: #3da4ab;
      }
      &:nth-of-type(3) {
        background: #fe8a71;
      }
    }
  }
`;
