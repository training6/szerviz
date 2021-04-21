import styled from 'styled-components';

export const MessageContainer = styled.div`
  height: 800px;
  backgrond: 'black';
  margin-top: -25px;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center,

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center,

  @media screen and (max-width: 400px) {
    padding: 10px;
  }

`;



