import styled from "styled-components";

export default styled.td`
  position: absolute;
  background: #0f4c75;
  display: grid;
  font-size: 0.9rem;
  right: 0.5px;
  bottom: 100%;
  color:#fff;
  > div {
    display: grid;
    justify-content: center;
    align-items: center;
    .delete {
      color: #fa1616;
    }
    .editingRow {
      cursor: pointer;
      display: grid;
      place-items: center;
      grid-template-columns: 22px 1fr;
      grid-template-rows: 1fr;
      padding: 0.4rem;
      > img {
        stroke: #fff;
        width: 100%;
        object-fit: contain;
      }

      > i {
        width: 100%;
        object-fit: contain;
        margin-left: 7px;
      }

      > span {
        padding: 0 0.4rem;
      }
      :hover {
        opacity: 0.6;
      }
    }
  }
`;
