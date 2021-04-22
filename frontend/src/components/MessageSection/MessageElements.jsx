import styled from 'styled-components';

export const MessageContainer = styled.div`
  height: 800px;
  background: #e2f3f5;
  /*position: relative;*/
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 100%;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }

`;



