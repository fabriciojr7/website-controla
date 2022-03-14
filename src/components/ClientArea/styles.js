import styled from "styled-components";

export const Container = styled.section`
    margin : 0px;
    padding: 0px;
    background: #000;
`

export const Banner = styled.div`
    background-image: url('/images/client.jpg');
    background-size: cover;
    background-position: bottom, center;
    position: relative;
    z-index: 0;
    
    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: #000;
        opacity: .83;
        z-index: -1;
    }
`


export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 70vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerClient = styled.div`
    display: flex;  
    flex-direction: column;  
`


export const InfosClient = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const FormClient = styled.form`
    width: 100%;
    max-width: 270px;
    height: 200px; 
    margin-top: 30px;
`

export const SingleInput = styled.div`
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};

    >input {        
        border: none;
        outline: none;
        background: none;
        color: #FFF;
        font-size: 18px;
        width: 80%;       
    }
`

export const InputBtn = styled.input`
    width: 100%;
    background: none;
    border: 2px solid ${(props) => props.theme.colors.primary}; 
    color: #FFF;
    padding: 5px;
    cursor: pointer;
    margin: 12px 0;
    text-transform: uppercase;
    font-weight: bold;
    transition: .5s ease;
    transition-property: background-color, color;   

    &:hover{
        background: ${(props) => props.theme.colors.primary};
        border: 2px solid ${(props) => props.theme.colors.primary};
        opacity: .8;
    }
`

export const Description = styled.div`
    text-align: center;
    color: #FFF;
    font-size: 20px;
    font-weight: 500px;
    padding: 0 30px;

    @media only screen and (min-width: 1200px){
        font-size: 24px;
    }    
`


