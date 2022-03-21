import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};

    position: fixed;
    bottom: 20px;
    right: 20px;

    display: ${(props) => props.visible ? 'flex;' : 'none'};
    align-items: center;
    justify-content: center;
    transition: .5s ease;
    transition-property: background-color, color;    

    cursor: pointer;

    .icon{
        color: #FFF;      
    }
    &:hover{
        background: #3292d1;
    }

`