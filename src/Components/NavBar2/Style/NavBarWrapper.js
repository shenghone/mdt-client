import styled from "styled-components";

export default styled.div`
  z-index: 99;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  --bg: #1b262c;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
  .button {
    outline: none;
    background-color: var(--bg);
  }
  --speed: 500ms;
  height: 100%;
  box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
  .navBar {
    background-color: var(--bg);
    padding: 0 0.5rem 0 1rem;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 30% auto max-content max-content 3%;
    grid-template-areas: "logo role items id dropdown";
    .logo {
      position: relative;
      padding: 0.5rem;
      grid-area: logo;
      display: flex;
      align-items: center;
      > img {
        @media (max-width: 1024px) {
          /* left: 37%; */
          transform: scale(0.76);
        }
        position: absolute;
        /* left: 50%;
        transform: translateX(-50%); */
        transform: scale(0.76);
        max-width: 100%;
        max-height: 100%;
        :hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
    }
    .id {
      grid-area: id;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      /* font-family: sans-serif; */
    }
    .dropButton {
      grid-area: dropdown;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        fill: #ffffff;
        height: 30px;
        width: 15px;
        transform: rotate(-90deg);
        margin-top: 20%;
        :hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
    }
    .role {
      grid-area: role;
      font-size: 2rem;
      > img {
        width: 100;
        max-height: 100%;
      }
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .navbar-nav {
    grid-area: items;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    .navItem {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .iconButton {
      display: flex;
      align-items: center;
      justify-content: center;
      > svg {
        fill: #ffffff;
        height: 35px;
        width: 35px;
        padding-right: 10px;
        :hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
    }
  }
  .dropdown {
    position: absolute;
    /* top:12%; */
    transform: translateX(38px);
    background-color: var(--bg);
    padding-top: 0;
    overflow: hidden;
    width: fit-content;
    align-items: center;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
  }
  .menu-item {
    height: auto;
    margin: 0;
    min-width: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* font-family: sans-serif; */
    font-size: 1.3rem;
    font-weight: 500;
    padding: 1rem 2.45rem;
    :hover {
      cursor: pointer;
      /* opacity: 0.6; */
      background-color: #283b45;
    }
  }
  .menu-tem:hover {
    background-color: #0083a2;
  }

  width: 100%;
`;
