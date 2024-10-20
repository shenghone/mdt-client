import styled from "styled-components";

export default styled.div`
    display:grid;
    width:100%;
    height:100%;
    grid-template-rows:1fr;
    grid-template-columns:auto 1fr;
    background: #F3F4F6;
    font-family: Source Sans Pro;
    .sideNavContainer{
        width:280px;
        @media(max-width:768px){
            width:200px;
        }
        height:100%;
    }
    .mainContianer{
        width:100%;
        height:100%;
        display:flex;
        /* grid-template-columns:1fr; */
        /* grid-template-rows:0.1fr 0.8fr 0.1fr; */
        flex-direction:column;
    }
    .titleContainer{
        width:inherit;
        height:10%;
        padding-left: 3%;
        color:#0F4C75;
        font-size:2rem;
        font-weight:700;
        display:flex;
        align-items:center;
    }
    .contentContainer{
        width:100%;
        height:87%;
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:0.5fr 0.5fr;
    }
    .infoContainer, .tableContainer{
        width:100%;
        height: 100%;
        
    }
    .footerContainer{
            height:3%;
            width:100%;
    }
`