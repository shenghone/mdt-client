import styled from "styled-components";

export default styled.div`
  all: none;
  width: 100vw;
  height: 100%;
  display: grid;
  background-color: rgb(185, 227, 243);
  place-items: center;
  font-family: "Georama", sans-serif;
  overflow-x: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: 150px auto 31px;
  grid-template-areas:
    "nav"
    "content"
    "footer";
  .admin-login .teacher-login .student-login {
    border: 4px solid transparent !important;
  }
  .form-outter-wrapper {
    background: #fff;
    width: 30%;
    min-width: 280px;
    min-height: 450px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    padding: 2.5rem;
    > form {
      grid-column: 1 / span 1;
      grid-row: 3 / span 1;
      display: grid;
      button {
        padding: 0.5rem 1rem;
        margin: 0 auto;
        justify-self: center;
        background: rgb(17, 155, 158);
        color: #fff;
        font-size: 18px;
        border-radius: 15px;
        min-width: 150px;
        cursor: pointer;
        margin-top: 1rem;
        :hover {
          background: #fff;
          color: rgb(17, 155, 158);
        }
      }

      .name {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem 0.5rem;
        grid-template-rows: 1fr;

        label {
          font-weight: 500;
        }
        input {
          width: 100%;
          margin: 0.5rem 0;
          margin-bottom: 0;
          border-radius: 10px;
          padding: 0.65rem;
          box-sizing: border-box;
          outline: none;
        }
      }
      .email,
      .password,
      .accessCode {
        margin: 1rem 0;
        label {
          font-weight: 500;
        }
        input {
          width: 100%;
          margin: 0.5rem 0;
          margin-bottom: 0;
          border-radius: 10px;
          padding: 0.65rem;
          box-sizing: border-box;
          outline: none;
        }
      }
    }
    .role-section {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
      width: 100%;
      display: flex;
      gap: 1rem;
      > div {
        :hover {
          background: #ddd;
          cursor: pointer;
          opacity: 0.75;
          > h4 {
            color: #fff;
          }
        }
        transition: 0.3s;
        position: relative;
        min-height: 100px;
        flex: 1;
        border: 1px solid #ddd;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2.5rem;
        place-items: center;
        padding: 1rem 1rem 0 1rem;
        > h4 {
          margin: 1rem 0;
        }
        > img {
          width: 100px;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    > h4 {
      width: 100%;
      margin: 1rem auto;
      text-align: center;
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
      font-weight: 700;
      font-size: 2rem;
    }
  }
  .current {
    border: 4px solid rgb(17, 155, 158) !important;
  }
  h6 {
    margin: 0;
    color: red;
    font-size: 14.5px;
    padding-top: 0.5rem;
  }
  .error {
    height: 18px;
  }
  .logoRow {
    width: 90%;
    min-width: 350px;
    padding: 2rem;
    margin-top: 2rem;
    box-sizing: border-box;
    justify-content: start;

    grid-area: nav;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    position: relative;
    > img {
      height: 100px;
      object-fit: contain;
      :hover {
        opacity: 0.65;
        cursor: pointer;
      }
    }
  }
`;
