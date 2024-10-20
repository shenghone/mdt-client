import styled from "styled-components";

export default styled.div`
  position: relative;
  --headerFont: #0f4c75;
  --headerBack: #bbe1fa;
  --cellBack1: #bbe1fa;
  --cellBack2: #f5f5f5;
  --cellFont: #0f4c75;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  width: 95%;
  max-height: 100%;
  font-weight: normal;
  box-shadow: 0 3px 10px 0 rgb(45, 48, 46, 0.25);
  .tableMake {
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
    position:relative;
    :first-child {
      border-radius: 15px 0 0 0;
    }
    :last-child {
      border-radius: 0 15px 0 0;
      padding: 0;
    }
    :hover{
      cursor:pointer;
      opacity:0.7;
    }
  }
  .increasing, .decreasing{
    position:absolute;
    height:100%;
    display:inline-flex;
    flex-direction:column;
    font-size:0.6rem;
    transform: translate(-14px, -2px);
  }
  .up, .down{
    display:flex;
    padding:0;
    height:fit-content;
  }
  .increasing{
    .up{
      color:#0f4c75;
    }
    .down{
      color: gray;
    }
  }
  .decreasing{
    .up{
      color: gray;
    }
    .down{
      color:#0f4c75;
    }
  }
  .tableHeader:nth-of-type(5){
    :hover{
      cursor:unset;
      opacity:1;
    }
  }
 .unSort{
   position:absolute;
   top:0;
   left:0;
   padding:9px 17px;
   :hover{
     opacity:0.7;
     cursor:pointer;
   }
 }

  .tableData {
    transition: all 0.4s;
    font-family: Rasa;
    position: relative;

    .rotate {
      transform: rotate(90deg);
    }
    
    /* background-color: var(--headerBack); */
    
      /* background-color: var(--cellBack2); */
    
    font-size: 1.1rem;
    font-family: Rasa;
    padding: 0.5rem;
  }
  .tableData:nth-of-type(odd){
    .tableRow{
      background-color: var(--cellBack1);
    }
    }
  .tableData:nth-of-type(even){
    .tableRow{
      background-color: var(--cellBack2);
    }
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
