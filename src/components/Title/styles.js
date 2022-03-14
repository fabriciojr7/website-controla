import styled from "styled-components";

export const TitleSection = styled.div`
    >h1{
        font-size: 24px; 
        font-weight: bold;
        text-transform: uppercase;
        padding-bottom: 20px;
        color: ${(props) => props.light ? '#FFF' : '#000'};

        >span{
            color: ${(props) => props.theme.colors.secondary};
        }


        @media only screen and (min-width: 1200px){
            font-size: 36px;
        }           
    } 
`