import styled from "styled-components";

export default styled.div`
  position: relative;
  --headerFont: #fff;
  --headerBack: #0f4c75;
  --cellBack: #bbe1fa;
  --cellFont: #0f4c75;
  align-self: start;
  display: grid;
  margin-top: 5px;
  justify-content: center;
  border-radius: 15px;
  width: 95%;
  max-height: 100%;
  font-weight: normal;
  justify-self: center;
  opacity: ${(props) => (props.noTestWarning ? 0.5 : 1)};
  pointer-events: ${(props) => (props.noTestWarning ? "none" : "")};
  grid-template-columns: 1fr;
  grid-template-rows:
    "auto"
    "1fr";
  .buttonDiv {
    margin-bottom: 1rem;
    background: transparent;
    grid-row: 1 / span 1;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    .buttonWrapper {
      cursor: pointer;
      display: flex;
      justify-self: flex-end;
      background: #0f4c75;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      padding: 0.1rem 0.3rem;
      align-items: center;
      :hover {
        opacity: 0.6;
        > i {
          transform: scale(0.7) rotate(180deg);
        }
      }
      > i {
        transform: scale(0.7);
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
  .tableMake {
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
    border-radius: 15px;
    border: none;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid transparent;
    border-radius: 15px;
  }
  .tableHeader {
    background-color: var(--headerBack);
    color: var(--headerFont);
    font-size: 1rem;
    font-family: "Rasa";
    padding: 0.5rem;
    :first-child {
      border-radius: 15px 0 0 0;
    }
    :last-child {
      border-radius: 0 15px 0 0;
      padding: 0;
    }
  }

  .tableData {
    transition: all 0.4s;
    font-family: Rasa;
    position: relative;

    .rotate {
      transform: rotate(90deg);
    }

    background-color: var(--headerBack);

    font-size: 1.1rem;
    font-family: Rasa;
    padding: 0.5rem;
  }

  .tableRow {
    position: relative;
    font-family: Rasa;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.5rem 0.7rem;
    border-top: 3px solid white;

    td {
      background: red;
      text-align: center;
    }
  }
`;

export const WarningWrapper = styled.div`
  display: grid;

  border-radius: 5px;
  z-index: 1;
  margin: auto;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(188, 229, 245);
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  .headerRow {
    background: #000;
    color: #fff;
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    border-top-left-radius: 5px;
    align-items: center;
    border-top-right-radius: 5px;
    > i:hover {
      opacity: 0.5;
    }
  }
  .contentRow {
    display: grid;
    place-items: center;
    padding: 2rem 4rem;
    font-weight: 400;
  }
`;
