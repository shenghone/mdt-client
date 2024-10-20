import styled from "styled-components";

export default styled.div`
  position: absolute;

  left: 50%;
  top: 50%;
  z-index: 99;
  box-sizing: border-box;
  transform: translate(-50%, -50%);

  width: 40%;

  height: auto;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 99;
  background: #bbe1fa;
  --headerBack: #1b262c;
  --cellBack: #bbe1fa;
  border-radius: 12px;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "description"
    "content";
  place-items: center;
  @media (max-width: 1024px) {
    width: 60%;
  }
  .header {
    border-radius: 12px 12px 0 0;
  }
  > section {
    /* border-radius: 4px 4px 0 0; */

    position: relative;
    box-sizing: border-box;
    grid-area: description;
    background: #000;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding: 1.2rem 1rem;
    background-color: var(--headerBack);
    > div {
      color: #fff;
      box-sizing: border-box;
    }
    > div:nth-of-type(1) {
      flex: 6;
    }
    > div:nth-of-type(2) {
      position: absolute;
      right: 0;
      padding: 0 0.8rem;
      cursor: pointer;
      :hover {
        opacity: 0.6;
      }
    }
  }
  > div {
    /* border-radius: 4px; */
    grid-area: content;
    width: 100%;
    h6 {
      top: 72%;
      left: 10%;
      padding: 0;
      color: red;
      position: absolute;
    }

    form {
      padding: 2rem 5rem 8rem 5rem;
      box-sizing: border-box;
      > button {
        margin: 1rem 0;
        background: #0f4c75;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        border: none;
        outline: none;
        color: #fff;
        width: 84%;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        cursor: pointer;
        :hover {
          opacity: 0.6;
        }
      }
      display: grid;
      place-items: center;
      grid-row-gap: 2%;
      width: 100%;
      > section {
        padding: 0 1.5rem;
        display: grid;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 0.7rem;
        justify-items: center;
        position: relative;
        > label {
          justify-self: start;
          color: #0f4c75;
          font-size: 1.2rem;
        }

        input {
          border: none;
          padding: 0.5rem;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

          outline: none;
          font-size: 1rem;
          width: 90%;
          border-radius: 12px;
        }
        select {
          border: none;
          padding: 0.5rem;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 12px;
          outline: none;
          font-size: 1rem;
          width: 94%;
        }
      }
    }
  }
`;
