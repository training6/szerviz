import styled from 'styled-components';

export const MessageContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e2f3f5;

  @media screen and (max-width? 480px) {
    height: 800px
  }
`;

export const MessageH1 = styled.h1`
  font-size: 1.5rem;
  color: #01bf71;
  text-transform: uppercase;
  margin-top: -25px;
  margin-bottom: 44px;
  }
`;



export const BtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  `;