import styled from "styled-components";

export const BottomLink = styled.div`
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    transition: .5s ease;
    transition-property: background-color, color;
    cursor: pointer;

    &:hover{
        color: #fff;
        background: ${(props) => props.theme.colors.primary};
    }

    @media only screen and (min-width: 750px) {
        font-size: 14px;
    } 
`