import styled from "styled-components";

export const Container = styled.div`
    background: #e0e0e0;
    width: 100%;
    min-height: 100vh;    
`
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;

    @media only screen and (min-width: 700px){
        flex-direction: row;        
    }    
`

export const Logo = styled.div`
    width: 220px;

    padding-top: 10px;
    padding-bottom: 10px;

    > img{
        width: 100%;
    }

    @media only screen and (min-width: 1200px){
       &{
            width: 260px;                             
       } 
    }    
`

export const Title = styled.div`
    border-bottom: 5px solid ${(props) => props.theme.colors.primary};
    padding: 5px 16px;

    >h1 span{
        color: ${(props) => props.theme.colors.secondary};
    }

    >h1{
        font-size: 32px;
        text-transform: uppercase;
        font-weight: bold;
    }
`
export const Apresentacao = styled.div`
    margin-bottom: 24px;
    margin: 0 30px 50px 30px; 

    >h2{
        font-size: 18px;
        padding-bottom: 10px;
    }
    
`

export const AreaCard = styled.div`
    width: 100%;
    max-width: 650px;
    
`

export const Area = styled.div`
    margin-bottom: 50px;
    margin: 0 30px 50px 30px; 

    >h3{
        text-align: center;
        padding-bottom: 20px;
    }
`

export const Card = styled.div`
    width: 100%;
    background: #FFF;
    box-shadow: 0px 0px 10px #333;
    border-radius: 8px;

    margin-bottom: 10px;
    padding: 16px;

    transition: .5s ease;
    transition-property: background-color, color;    
    
    >a{
        color: #000;
    }   
    &.boleto:hover{
        cursor: pointer;
        background: ${(props) => props.theme.colors.primary};
        >a{
            color: #FFF;
        }  
    } 
`

export const HeaderCard = styled.div`
    margin-bottom: 8px;
`

export const Line = styled.div`
    display: flex;
    justify-content: space-between;

    flex-direction: column;
    >h6{
        font-size: 14px;
        font-weight: 500;
    }

    @media only screen and (min-width: 400px){
        flex-direction: row;
    }    
`

export const Unauthenticated = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding-left: 30px;
    padding-right: 30px;

    justify-content: center;
    align-items: center;

    > img{
        width: 100%;
    }

    @media only screen and (min-width: 700px){
        &{
            width: 500px;                             
        } 
    }  
`



