import styled from "styled-components";

export default styled.div`
  @media (max-width: 415px) {
    > form {
      > section:nth-of-type(1) {
      }
      h6 {
        max-width: 200px;
      }
      .switcher {
        grid-template-columns: 1fr;
      }
    }
  }
  @media (max-width: 1024px) {
    form {
      h6 {
        max-width: 290px;
      }
    }
  }
  @media (min-width: 1024px) {
    width: 50%;
  }

  background: #c1e7f6;
  box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.1);
  display: grid;

  place-items: center;
  padding: 1rem 2rem;

  max-width: 80%;
  input {
    background: #efefef;
    outline: none;
    border: none;
    border-radius: 3px;
  }
  align-self: center;

  border-radius: 5px;
  display: grid;
  grid-template-rows: 10% 15% 75%;
  grid-template-columns: 1fr;
  grid-template-areas: "switcher" "title" "formAndDesc";
  > h2 {
    grid-area: title;
    font-size: 1.5rem;
    margin: 1rem 0 0 0;
    padding: 0 1rem;
    color: #0073a2;
  }

  input {
    padding: 0.5rem 1rem;
    box-sizing: border-box;
  }
  > img {
    object-fit: contain;
  }

  > form {
    grid-area: formAndDesc;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr;
    color: rgb(120, 125, 128);
    grid-template-areas:
      "field1"
      "field2";
    padding: 1rem;

    h6 {
      max-width: 260px;
      font-size: auto;
      margin: 0;
      padding: 0;
      color: red;
      font-weight: 400;
    }
    > button {
      background: #0073a2;
      outline: none;
      border: none;
      padding: 0.5rem 1rem;
      font-size: 1.3rem;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
      margin: 1.5rem 1rem;
      box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.15);

      justify-self: center;
      :hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
    > section {
      margin-top: 0.5rem;
      display: grid;
      grid-gap: 15px;
      place-items: center;
      > img {
        object-fit: cover;
      }
    }
    > .name {
      grid-area: field1;
      display: grid;
      grid-template-columns: 30px 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "img firstName lastName";
      > section {
        width: 100%;
        > input {
          width: 100%;
        }
      }
    }

    > .email,
    > section:nth-of-type(2) {
      display: grid;
      grid-template-columns: 30px 1fr;
      grid-template-rows: 1fr;
      > section {
        width: 100%;
        > input {
          width: 100%;
        }
      }
    }
    > .email {
      grid-area: field1;
    }
    > section:nth-of-type(2) {
      grid-area: field2;
    }
    > div {
      text-align: justify;
      color: #000;
      justify-self: stretch;
      margin: 0.5rem 0 1rem 0;
      font-size: 1.2rem;
      > span {
        :hover {
          color: #1b6ca8;
          cursor: pointer;
        }
      }
    }
  }
  .switcher {
    grid-area: switcher;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100%;
    /* > h6 {
        grid-column: 2 / span 1;
        margin-top: -30px;
      } */
    /* >div{
        .switcherButton:nth-of-type(1){
          border-right:none;
        } */
  }
  .switcherButton1:nth-of-type(1) {
    /* background: #C4C4C4; */
    background: #0073a2;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.15);
    outline: none;
    border: 1px solid #0073a2;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    /* color: #0073a2; */
    color: #fff;
    width: 50%;
    margin: 1.5rem 0 1rem 0;

    justify-self: center;
    /* :hover {
        cursor: pointer;
        opacity: 0.6;
      } */
  }
  .switcherButton1:nth-of-type(2) {
    background: #c4c4c4;
    /* background: #0073a2; */
    outline: none;
    border: 1px solid #0073a2;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.15);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #0073a2;
    /* color: #fff; */
    width: 50%;
    margin: 1.5rem 0 1rem 0;

    justify-self: center;
    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
  .switcherButton2:nth-of-type(2) {
    /* background: #C4C4C4; */
    background: #0073a2;
    outline: none;
    border: 1px solid #0073a2;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.15);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    /* color: #0073a2; */
    color: #fff;
    width: 50%;
    margin: 1.5rem 0 1rem 0;

    justify-self: center;
    /* :hover {
        cursor: pointer;
        opacity: 0.6;
      } */
  }
  .switcherButton2:nth-of-type(1) {
    background: #c4c4c4;
    /* background: #0073a2; */
    outline: none;
    border: 1px solid #0073a2;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.15);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #0073a2;
    /* color: #fff; */
    width: 50%;
    margin: 1.5rem 0 1rem 0;

    justify-self: center;
    :hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
  .forgotPass {
    display: flex;
    align-items: center;
    justify-content: center;
    h5 {
      color: #303a3e;
      margin: 0;
    }
  }
`;
