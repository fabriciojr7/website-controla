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

    
 
    
`

export const Tab = styled.div`
    flex: 1;
    padding: 8px;
    text-align: center;
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
        border-radius: 10px 10px 0 0;  
        background: #e0e0e0;          
    }    

    
`

export const TabProdBody = styled.div`
    
    position: relative;
    background: #e0e0e0;
    padding-bottom: 16px;

    

    @media only screen and (min-width: 575px){
        border-radius: 10px;  
        padding: 24px;
        margin: 0 30px 10px 30px;
    }    
`

export const TabContent = styled.div`
    display: none;

    &.active{
        display: block;
    }
`