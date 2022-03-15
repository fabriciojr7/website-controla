import styled from "styled-components";

export const Container = styled.section`
    padding: 50px 0;
    background: #f5f5f5;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;    
    margin-left: 30px;
    margin-right: 30px;
`

export const Description = styled.div` 
    text-align: center;
    >h4{
        font-size: 18px;
        font-weight: 500;
        >span{
            color: ${(props) => props.theme.colors.primary};
        }
    }
    >p{
        padding-top: 18px;
        >span{
            color: ${(props) => props.theme.colors.primary};
        }
    }    
`

export const Items = styled.div`
    color: #424242;
    display: flex;
    flex-direction: column;  
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
`

export const Item = styled.div`
    width: 300px;
    height:210px;
    margin-top: 25px;
    padding: 16px;
    background: #e0e0e0;
   

    border-radius: 12px;
    box-shadow: 0px 5px 10px #333;
    transition: .5s ease;
    transition-property: background-color, color; 
    
    cursor: pointer;
    
    &.email{
        background: ${(props) => props.theme.colors.primary};
        .icon{
            color: #FFF;
        } 
        & h5{
            color: #FFF;
        }                        
    }

    &:hover{
        background: #3292d1;

        .icon{
            color: #FFF;
        } 
        & h5{
            color: #FFF;
        }   
    }

    &.email:hover{
        background: #e0e0e0;

        .icon{
            color: #263238;
        }
        & h5{
            color: ${(props) => props.theme.colors.primary};
        }  
    }
 
    @media only screen and (min-width: 750px) {
        margin-right: 20px;
    }
`

export const Icon = styled.div`
    padding-bottom: 10px;
    color: #263238;
`

export const Text = styled.div`
    padding-bottom: 10px;
    >h5{
        color: ${(props) => props.theme.colors.primary};
        font-size: 16px;   
        text-transform: uppercase;     
    }
`

export const SubText = styled.div`
    padding-bottom: 10px;
    font-weight: bold;
    color: #263238;
`

export const Info = styled.div`
    >p{
        color: black;
        font-weight: bold;
        font-size: 16px;
    }
`