import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
  background: #e2f3f5;
  display: flex;
  justify-content: center;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //sötétítés
    /*background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);*/
    z-index: 2;
  }

`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  /*position: relative;*/



  @media screen and (max-width: 1000px) {
    top: 200px;
  }

  @media screen and (max-width: 768px) {
    top: 300px;
  }
`

export const ImgBg = styled.img`
  width: 100%;
  margin-top: 10%;
  object-fit: cover;
  //background: #232a34;
  opacity: 0.9;
  animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }
  
    to {
      width: 100%;
      margin-top: 10%;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 500px;
    margin-top: 15%;

    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 300%;
      }
    
      to {
        width: 100%;
        margin-top: 15%;
      }
    }

    }

  @media screen and (max-width: 868px) {
    margin-top: 20%;

    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 300%;
      }
    
      to {
        width: 100%;
        margin-top: 20%;
      }
    }

  }

  @media screen and (max-width: 648px) {
    margin-top: 25%;

    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 300%;
      }
    
      to {
        width: 100%;
        margin-top: 25%;
      }
    }

  }

  @media screen and (max-width: 570px) {
    margin-top: 30%;

    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 300%;
      }
    
      to {
        width: 100%;
        margin-top: 30%;
      }
    }

  }

  @media screen and (max-width: 400px) {
    margin-top: 35%;

    @keyframes slidein {
      from {
        margin-left: 100%;
        width: 300%;
      }
    
      to {
        width: 100%;
        margin-top: 35%;
      }
    }

  }
` ;


/*export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  top: 0;
  left:0;
  //background: #232a34;
` ;*/

export const HeroContent = styled.div`
  z-index: 3;
  width: 400px;
  height: 800px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  /*bottom: 150px;*/

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    width: 300px;

  }
`;

export const HeroWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-top: 80px;
height: 40%;
animation-duration: 3s;
animation-name: slidein3;

@keyframes slidein3 {
  from {
    margin-top: -10%;
  }

  to {
    margin-top: 80px;
  }
`

export const HeroH1 = styled.h1`
color: #0e153a;
//-webkit-text-stroke-width: 0.4px;
//-webkit-text-stroke-color: white;
  font-size: 40px;
  margin-top: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px
  }
`;


export const HeroP = styled.a`
  margin-top: 5px;
  margin-bottom: 0px;
  color: #0e153a;
  /*-webkit-text-stroke-width: 0.4px;
-webkit-text-stroke-color: white;*/
  font-size: 16px;
  /*text-align: center;*/
  max-width: 500px;
  font-weight: 700;
  text-decoration: none;
 
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroP1 = styled.a`
  margin-top: -5px;
  margin-bottom: 20px;
  color: #0e153a;
  /*-webkit-text-stroke-width: 0.4px;
-webkit-text-stroke-color: white;*/
  font-size: 16px;
  /*text-align: center;*/
  max-width: 500px;
  font-weight: 700;
  text-decoration: none;
 
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtn = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 60%;
animation-duration: 3s;
animation-name: slidein2;
margin-bottom: 2px;


@keyframes slidein2 {
  from {
    margin-bottom: 0%;
  }

  to {
    margin-bottom: %;
  }
}
`


export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;



