import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#0e153a')};
  height: 780px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;


  @media screen and (max-width: 768px) {
    /*padding: 100px 0;*/

  }
`;

export const InfoWrapper = styled.div`
  z-index: 1;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  padding: 0 10px;


`;



export const TopLine = styled.p`
margin-top: -25px;
margin-bottom: 44px;
  color: #01bf71;
  font-size: 1.5rem;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

`;



export const Heading =styled.h1`
  font-size: 34px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
  text-align: center;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 1.3;
    font-weight: 200;


  }
  `;

  export const Subtitle = styled.p`
    max-width: 740px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  
    

  `;

  export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  `;

  export const ImgWrap = styled.div`
    height:100%;
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  
    @media screen and (max-width: 768px) {
      width: 200px;
    }

  `;

  export const Img = styled.img`
    margin: 0 0 35px 0px;
    padding-right: 0; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  

    @media screen and (max-width: 768px) {
      width: 400px;

    }

    @media screen and (max-width: 480px) {
      width: 300px;

    }
  `


