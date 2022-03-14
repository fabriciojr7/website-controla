import styled from "styled-components";

export const Container = styled.section`
    padding: 50px 0;
    background: #f5f5f5;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    @media only screen and (min-width: 1024px){
        flex-direction: row;
    }
`

export const AboutHistory = styled.div`
    margin: 0 30px 30px 30px;
    flex: 1;

    >p{
        font-size: 16px;
        line-height: 25px;
    }

    @media only screen and (min-width: 1200px){
        flex-direction: row;
    }    
`

export const AboutBg = styled.div`      
   width: auto;
   margin: 0 30px;
   
   >img{
       width: 100%;
       box-shadow: 0px 5px 10px #333;
   }


   @media only screen and (min-width: 1024px){
       &{
            width: 450px;
           
       }
   }   

   @media only screen and (min-width: 1200px){
       &{
           width: 520px;
       }
   }
  
`





export const ContainerAboutItems = styled.div`   
    padding: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1140px;
    margin: auto; 


    @media only screen and (min-width: 1200px){
        &{
            flex-direction: row;
        }
    }  


`

export const ItemAbout = styled.div`
    flex: 1;
    text-align: center;
    padding: 15px;  
    >h2{
        margin-top: 24px;
        text-transform: uppercase;
        font-size: 18px;
    }
    >p{
        margin-top: 10px;
        font-size: 16px;        
    }

    @media only screen and (min-width: 1200px){
        &{
            border-right: 1px solid #333;
            height: 300px;
        }
        &:first-child{
            border-left: 1px solid #333;
        }
    }      
`