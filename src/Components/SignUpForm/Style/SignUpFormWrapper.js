import styled from "styled-components";

export default styled.div`
@media (max-width: 415px){
     >form{
       >section::nth-of-type(1){
         
         
       }
     }
  }
@media (max-width: 1024px){

}
  background: rgba(0, 115, 162, 0.3);
  display: grid;
  margin: 0 2rem;
  place-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  width: 475px;
   input { 
    background: #efefef;
    outline: none;
    border: none;
    border-radius: 3px;
  }
   > h2 {
    font-size: 1.5rem;
    margin: 1rem 0 0 0;
    padding: 0 1rem;
    color: rgba(0, 115, 162, 0.9);
  }

  width: auto;
  height: auto;
  border-radius: 5px;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  grid-template-areas: title formAndDesc;
  input {
    padding: 0.5rem 1rem;
    box-sizing: border-box;
  }
  > img {
    object-fit: contain;
  }

  > form {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr auto auto;
    color: rgb(120, 125, 128);
    grid-template-areas:
      "name"
      "email"
      "password"
      "confirmPassword"
      "terms"
      "register";
    padding: 1rem;
    h6 {
      max-width: 370px;
      font-size: 0.8rem;
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
    > section:nth-of-type(1) {
      grid-area: name;
      display: grid;
      grid-template-columns: 30px 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: "img firstName lastName";
    }

    > section:nth-of-type(2),
    > section:nth-of-type(3),
    > section:nth-of-type(4) {
      display: grid;
      grid-template-columns: 30px 1fr;
      grid-template-rows: 1fr;
      > section {
        width: 100%;
        justify-self: stretch;
        > input {
          width: 100%;
        }
      }
    }
    > section:nth-of-type(2) {
      grid-area: email;
    }
    > section:nth-of-type(3) {
      grid-area: password;
    }
    > section:nth-of-type(4) {
      grid-area: confirmPassword;
    }
    > section:nth-of-type(5) {
      display: grid;
      grid-template-columns: 40px 1fr;
      grid-template-rows: 1fr auto;
      > h6 {
        grid-column: 2 / span 1;
        margin-top: -30px;
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
          text-decoration: underline;
        }
      }
    }
  } 
`;
