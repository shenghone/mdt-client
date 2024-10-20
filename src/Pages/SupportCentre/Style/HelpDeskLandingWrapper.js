import styled from "styled-components";
import Confetti from "../../../Static/Confetti.jpg";

export default styled.div`
grid-template-columns:1fr;
grid-template-rows:auto 1fr;
background-color:#F3F4F6;
.headerContainer{
    grid-template-columns:1fr;
    grid-template-rows:auto auto;
    box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
    .confetti {
      display: grid;
      width: 100%;
      height: auto; 
      background-image: url(${Confetti});
      background-size:cover;
      background-position:bottom;
      background-repeat:none;
      h2 {
        justify-self: center;
        align-self: center;
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: bold;
        padding:1rem;
        margin:0;
        text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.4);
        font-size: 2rem;
        color: #fff;
        text-align:center;
      }
    }
    .header {
        display: grid;
        height: 70px;
        background: #000;
        grid-template-columns: 220px 1fr auto;
        grid-template-rows: 1fr;
        padding: 0.4rem 0;

        > img {
            display: grid;
            justify-self: start;

        width: 100%;
        height: 100%;
        object-fit: contain;
        :hover {
            cursor: pointer;
            opacity: 0.6;
        }
    }
    .supportCentreWrapper {
      border: 3px solid #ffffff;
      box-sizing: border-box;
      border-radius: 15px;
      width: 190px;
      background:#fff;
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: bold;
      display: grid;
      padding: 0 1rem;
      grid-template-columns: auto 1fr;
      grid-template-rows: 1fr;
      place-items: center;
      margin: 1rem 1.5rem;
      grid-column: 3 / span 1;
      color: #000;

      :hover {
        cursor: default;
      }
    }
    
  }
}
.helpTopicsContainer{
    height:auto;
    width:100%;
    padding:1rem 0 0 0;
    .topRow, .bottomRow{
        height:auto;
        display:grid;
        justify-self:center;
    }
    .topRow{
        grid-template-columns:1fr 1fr 1fr;
        grid-template-rows:1fr;
        width:75%;
        @media(max-width:1024px){
            width:100%
        }
        @media(max-width:768px){
            grid-template-columns:1fr;
            grid-auto-rows:1fr;
            width:70%
        }
        @media(max-width:500px){
            grid-template-columns:1fr;
            grid-auto-rows:1fr;
            width:90%
        }
    }
    .bottomRow{
        grid-template-columns: 1fr 1fr;
        grid-template-rows:1fr;
        width:50%;
        @media(max-width:1024px){
            width:66%
        }
        @media(max-width:768px){
            grid-template-columns:1fr;
            grid-auto-rows:1fr;
            width:70%
        }
        @media(max-width:500px){
            grid-template-columns:1fr;
            grid-auto-rows:1fr;
            width:90%
        }
    }
    display:grid;
    
}
.buttonContainer{
    padding:1.5rem;
}
.topicButton{
    display:flex;
    flex-direction:column;
    padding:1.5rem;
    align-items: center;
    border:2px solid #D4E7F8;
    border-radius:10px;
    outline:none;
    background:none;
    height:100%;
    box-shadow: 0 1px 15px 0 rgb(45, 48, 46, 0.15);

    .buttonTitle{
        color:#0F4C75;
        font-weight:650;
        font-size:1.5rem;
        padding:1rem 0 0.5rem 0;
    }
    .buttonDesc{
        color:#0F4C75;
        font-size:1.2rem;
        padding:0.5rem 0 0.5rem 0;
    }
    .buttonImg{
        padding:0.5rem 0 0.5rem 0;
        svg{
            height:80px;
            width:80px;
        }
    }
    :hover{
        background:#D4E7F8;
        cursor:pointer;
        border:2px solid lightgrey;
        
    }
}

`