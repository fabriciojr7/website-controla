import styled from "styled-components";

export const Container = styled.footer`
    background: rgb(31, 30, 30);
    min-height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
`

export const AreaLinks = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 0 50px;
    margin:0 auto;   
    display: flex;
    flex-direction: column;    
    color: #FFF;

    margin-bottom: 20px;
    >ul{
        list-style: none;

    }
    >ul li{
        padding-bottom: 10px;
    }
    >ul li a{
        color: #FFF;   
        font-size: 16px;
        
    }
    >ul li a:hover {
        color: ${(props) => props.theme.colors.primary};
    }


    @media only screen and (min-width: 750px){
        flex-direction: row;
        justify-content: space-around;
    }    
`

export const Description = styled.div`
    margin-bottom: 12px; 

    >h4{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 5px; 
    }
`
export const Bar = styled.div`
    width: 150px;
    height: 3px;
    background: ${(props) => props.theme.colors.primary};
`

export const Copyright = styled.div`
    width: 100%;
    background: black;

    text-align: center;
    color: #FFF;
    >h2{
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;        
    }
    >h3{
        font-size: 12px;
        font-weight: 500;
    }
    >p{
        font-size: 12px;
        color: #ccc;
    }
`
