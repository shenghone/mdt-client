import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 100%;
  background: #e4f9ff;
  display: grid;
  place-items: center;
  form {
    align-content: center;
    display: grid;
    justify-content: center;
  }
  img {
    display: grid;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    object-fit: contain;
    justify-self: center;
  }
  .contentWrapper {
    display: grid;
    align-content: center;
  }
  .selectionArea {
    display: flex;
    justify-self: center;
    justify-content: center;
    button {
      margin: 0 1rem;
      padding: 0.6rem;

      outline: none;
      border: none;
      outline: none;
      background: transparent;
      font-size: 1.4rem;
      > .fas {
        :hover {
          opacity: 0.6;
          cursor: pointer;
        }
      }
    }
  }

  ul {
    display: grid;
    padding: 0;
    justify-content: start;

    list-style: none;
  }
`;
