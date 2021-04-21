import styled from 'styled-components'

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e2f3f5;
  position: relative;
  z-index: 1;


  @media screen and (max-width: 1000px) {
    height: 1100px;
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px
  }
`;



export const ServicesH1 = styled.h1`
  font-size: 1.5rem;
  color: #01bf71;
  text-transform: uppercase;
  margin-top: -25px;
  margin-bottom: 44px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 65px;
  `;