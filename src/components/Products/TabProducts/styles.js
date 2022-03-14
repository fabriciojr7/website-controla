import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    align-items: center;
`

export const TabProdHead = styled.div`
    display: flex;
    width: 100%;
    max-width: 500px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
 
`

export const Tab = styled.div`
    >h4{
        font-size: 24px;
    }

    cursor: pointer;
    transition: .5s;
    &:hover{
        color: ${(props) => props.theme.colors.primary};
    }
    &.active {
        color: ${(props) => props.theme.colors.primary};
    }
`

export const TabProdBody = styled.div`
    margin: 0 30px 10px 30px;
    position: relative;
`

export const TabContent = styled.div`
    display: none;

    &.active{
        display: block;
    }
`