import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100vw;
    height: auto;
    min-height: 8vh;
    transition: .5s ease background-color;
    background: ${(props) => props.showBackground ? 'rgb(31, 30, 30);' : 'transparent'};
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1200px;
    padding: 0 10px; 
`
export const Logo = styled.div`
    width: 250px;

    padding-top: 10px;
    padding-bottom: 10px;

    > img{
        width: 100%;
    }

    @media only screen and (min-width: 1200px){
       &{
            width: 300px;                             
       } 
    }

`

export const List = styled.nav`
    >ul{
        list-style: none;
        position: absolute;
        background: rgb(31, 30, 30);
        width: 100vw;
        height: 100vh;
        left: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        overflow: hidden;
        transition: .5s ease left;
    }
    >ul.active{
        left: 0%;
    }

    >ul a{
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 2px;        
        color: #FFF;
        text-transform: uppercase;
        padding: 20px;
        display: block;
        cursor: pointer;
    }
    >ul a::after{
        content: attr(data-after);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        color: rgba(240, 248, 30255, 0.030);
        font-size: 100px;
        letter-spacing: 50px;
        z-index: -1;
        transition: .3s ease letter-spacing;
    }
    >ul li:hover a::after{
        transform: translate(-50%, -50%) scale(1);   
        letter-spacing: initial;
    }
    >ul li:hover a:hover{
        color: ${(props) => props.theme.colors.primary};
        font-weight: bold;
    }

    >ul li .active{
        color: ${(props) => props.theme.colors.primary};
        font-weight: bold;  
    }

    @media only screen and (min-width: 320px) and (max-width: 400px){
        >ul a{
            font-size: 28px;
        }
        >ul a::after{
            font-size: 65px; 
        }
    }

    @media only screen and (min-width: 1024px){
        >ul{
            position: initial;
            display: block;
            height: auto;
            width: fit-content;
            background: transparent;
        }
        >ul li{
            display: inline-block;
        }
        >ul li a{
            font-size: 18px;
        }
        >ul li:hover a:hover{
            color: ${(props) => props.theme.colors.primary};       
        }
        >ul a::after{
            display: none;
        }
    }

    @media only screen and (min-width: 1200px){
        >ul li a{
            font-size: 20px;
        }  
    }
`

export const Hamburguer = styled.div`
    width: 60px;
    height: 60px;
    display: inline-block;
    border: 3px solid #FFF;
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer;
    transform: scale(.8);
    margin-right: 20px;
    margin-left: 20px;
    @media only screen and (min-width: 1024px){
        &{
            display: none;
        }            
    }
`

export const BarHamburguer = styled.div`
    height: 2px;
    width: 30px; 
    position: relative;
    background: #FFF;
    z-index: -1;

    &::after, &::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        background: #FFF;
        transition: .3s ease;
        transition-property: top, bottom;
    }
    &::after{
        top: 8px;
    }
    &::before{
        bottom: 8px;
    }

    .hamb.active &::after{
        top: 0;
    }
    .hamb.active  &::before{
        bottom: 0;
    }    
`