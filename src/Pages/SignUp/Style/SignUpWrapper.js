import styled from "styled-components";

export default styled.div `
@media (max-width: 415){
  >section{
    >div::nth-of-type(2){
      >div::nth-of-type(2){

      }
    }
  }
}
 @media (max-width: 1024px){
   height:100%;
   display: grid;
      >section{
      display:grid;
      grid-template-columns: 1fr;
      width: 100%;
      height: 100vh;
      >div:nth-of-type(1){
        display:none;
      }
      > div:nth-of-type(2){
        width:100%;
        > div:nth-of-type(1){
            width: 100%;
            height:fit-content;
            text-align: center;
            /* Logo */
            img{
              height:auto;
              width:80%;
              margin-left: -7%
            }
        }
        >div:nth-of-type(2){
          width:100%;
        }
      }
    }
  } 
  width: 100vw;
  grid-row: ${(props) => (props.role ? "1 / span 2;" : "")};
  height: 100%;
  place-items: ${(props) => (!props.role ? "center" : "")};
  background: #0073a2;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  /*if there is a "role" param we use section*/

  > section {
    background: #fff;
    display: grid;
    grid-template-columns: 44% 1fr;
    @media (max-width: 1024px){
      grid-template-columns: 1fr;
    }
    /*the boy picture*/
    @media (min-width: 1025px) {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    /*the column on the right side of the screen*/
    > div:nth-of-type(2) {
      display: grid;
      place-items: center;
      grid-template-rows: auto 1fr;
      grid-template-columns: 1fr;
      /*logo*/
      >div::nth-of-type(1){
        img {
        :hover {
          cursor: pointer;
          opacity: 0.6;
        }
        transform: scale(0.8);}
      }
      /*the form wrapper*/
      > div:nth-of-type(2) {
        width: 100%;
        height: 100%;
        display: grid;
        justify-content: center;
        align-items: start;
        img{
          width:100%;
          height:auto;
        }
      }
    }
  }
  /*if there is no "role" param, we use div*/
  > div {
    width: 50%;
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