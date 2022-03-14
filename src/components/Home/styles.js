import styled from "styled-components";

export const ContainerHome = styled.section`
    margin : 0px;
    padding: 0px;
    background: #000;
`

export const Banner = styled.div`
    
    background-image: url('/images/bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;

    &::after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: #000;
        opacity: .8;
        z-index: -1;
    }
`

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BannerContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 50px;
    
    color: #FFF; 
    
    & .botao{
        width: 200px;
        margin: auto;
        text-align: center;
    }
  
    > h1{
        text-transform: uppercase;
        font-weight: bold;
        font-size: 22px;        
        padding-bottom: 20px
    }
    > p{
        font-weight: 500;
        font-size: 16px; 
        line-height: 25px;
        padding-bottom: 40px
    }


    @media only screen and (min-width: 750px){
        text-align: center;

        > h1{
            font-size: 26px;   
        }
        > p{
            font-size: 18px;
        }
    }  

    @media only screen and (min-width: 1024px){
        text-align: center;

        > h1{
            font-size: 32px;   
        }
        > p{
            font-size: 20px;
        }
    }     


`

export const Skills = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    color: #FFF;
    background: #000;
`

export const ContainerSkill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1140px;
    margin: auto; 

    @media only screen and (min-width: 700px) and (max-width: 1000px){
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media only screen and (min-width: 1200px){
        &{
            flex-direction: row;
        }
    }
`

export const SkillItem = styled.div`
    flex: 1;
    text-align: center;
    padding: 15px;  
    >img{
        padding-bottom: 8px;
        transition: .5s ease transform;
    }
    >h4{       
        text-transform: uppercase;
        font-size: 18px;
        transition: .5s ease color;
    }
    >p{
        margin-top: 10px;
        font-size: 13px;
        color: #999;
    }
    
    &:hover{
        >img{
            transform: scale(1.1);
        }
        >h4{
            color: ${(props) => props.theme.colors.primary};
        }
    }

    @media only screen and (min-width: 700px) and (max-width: 1000px){
        min-width: 50%;
        margin-bottom: 20px;


        &{
            border-right: 1px solid #333;
            height: 250px;
        }
    

    }    

    @media only screen and (min-width: 1200px){
        &{
            border-right: 1px solid #333;
            height: 250px;
        }
        &:first-child{
            border-left: 1px solid #333;
        }
    }    
`