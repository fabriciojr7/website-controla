import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;

    @media only screen and (min-width: 1200px){
        flex-direction: row;
    }  
`

export const GalleryDescription = styled.div`
    margin: 0 30px 30px 30px;
    flex: 1;

    >p{        
        font-size: 16px;
        line-height: 25px;
    }
    >ul{
        list-style: none;
    }
    >ul span{
        color: ${(props) => props.theme.colors.primary};
        font-weight: bold;
    }
    >ul li{
        padding-top: 10px;
    }
`



export const PhotoType = styled.div`
   width: 260px;
   margin: 0 30px;
   padding-top: 30px;
   
   >img{
       width: 100%;
       box-shadow: 0px 5px 10px #333;
   }

   @media only screen and (min-width: 400px){
        width: 350px        
   }

   @media only screen and (min-width: 700px){
        width: 500px;
        margin: auto;
   }   
   
   @media only screen and (min-width: 1200px){
       &{
           width: 520px;
           padding-top: 0px;
       }
   }
`