import styled from "styled-components";

export default styled.div`
  --darkBlue: rgb(20, 77, 116);
  --lightBlue: rgba(55, 131, 182);
  display: grid;
  display: relative;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "nav"
    "mainContainer"
    "footer";
`;
