import styled from "styled-components";

export const Container = styled.section`
    padding: 50px 0;
    background: #eee;
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

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    @media only screen and (min-width: 1024px){
        flex-direction: row;
    }
`
export const ProductBg = styled.div`
   width: auto;
   margin: 0 30px;
   padding-bottom: 30px;
   
   >img{
       width: 100%;
       box-shadow: 0px 5px 10px #333;
   }

   @media only screen and (min-width: 1024px){            
           width: 400px;
    
   }   

   @media only screen and (min-width: 1200px){
       &{
           width: 520px;
       }
   }
`

export const ProductDescriptionSection = styled.div`
    margin: 0 30px 30px 30px;
    flex: 1;
    >p{
        font-size: 16px;
        line-height: 25px;
    }
    >h4{
        padding: 20px 0;
        font-size: 20px;
        font-weight: 500;
        
    }
    .bottom{
        width: 260px;
        margin: auto;
        text-align: center;
    
    }


    @media only screen and (min-width: 750px) and (max-width: 1200px){
        flex-direction: row;

        >h4{
            text-align: center;
        }
    }    
`

export const ProdListFeaures = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;

    >ul{
        list-style: none;
        font-weight: 400;
        font-size: 16px;
        >li{
            padding: 8px 0;
        }
        >li span{
            margin-right: 16px;
            color: ${(props) => props.theme.colors.primary};
        }
    }  

    @media only screen and (min-width: 750px){
        flex-direction: row;
        justify-content: space-around;

        >ul:first-child{
            padding-right: 40px;
        }
    }         
`
