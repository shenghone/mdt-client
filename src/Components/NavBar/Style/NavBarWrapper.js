import styled from "styled-components";

export default styled.div`
  width: 100vw;
  height: 80px;
  display: ${(props) =>
    props.location === "signUp" && props.role ? "none" : "grid"};

  grid-template-rows: 1fr;
  align-items: center;
  grid-template-columns: 300px 1fr auto;
  > img {
    width: 100%;
    :hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
  > ul {
    margin-right: 20px;
    grid-column: 3 / span 1;
    display: flex;
    > a {
      margin: 0px 30px;
      text-decoration: none;
      color: #fff;
      :hover {
        cursor: pointer;
        opacity: 0.6;
      }
    }
  }
  > img {
    width: 100%;
  }
`;
