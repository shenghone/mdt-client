import styled from "styled-components";
export default styled.div`
    display:flex; 
    flex-direction:column;
    width:100%;
    align-items:center;
    background:#1B262C;
    color:#fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height:100%;
    
    .navHeader, .navMain, .userName, .extraAction{
        width:100%;
    }
    .navHeader{
        display:flex;
        align-items:center;
        place-content:center;
        margin-bottom:1rem;
        padding: 1rem 0 1rem 0;
        img{
            width:80%;
            height:auto;
        }
    }
    .userName{
        padding: 1rem 0 1rem 0;
        font-size:1.2rem;
        font-weight:700;
        display:flex;
        align-items:center;
        place-content:center;
    }
    .navMain{
        nav{
            display:flex;
            flex-direction:column;
        }
    }
    a{
        text-decoration:none;
        color:#fff;
    }
    .navItem{
        padding:1rem 0 1rem 0;
        width:100%;
        padding-left:1.5rem;
        @media(max-width:768px){
            padding-left:0;
        }
        @media(max-width:1024px){
            padding-left:1rem;
        }
        display:flex; 
        align-items:center;
        
    }
    .linkIcon{
        display:flex;
        align-items:center;
        padding:0.5rem;
        width: 40px;
        i{
            font-size:1.5rem;
        }
        svg{
            fill:#fff;
            height:30px;
            width:30px;
        }
    }
    .linkText{
        display:flex;
        align-items:center;
        /* padding: 0.5rem 1rem 0.5rem 0; */
        font-size:1.5rem;
    }
    .linkBasic{
        :hover{
            cursor:pointer;
        }
    }
    .linkActive{
        color:#BBE1FA;
        border-right: 15px solid #BBE1FA;
        svg{
            fill:#BBE1FA;
        }
    }
`