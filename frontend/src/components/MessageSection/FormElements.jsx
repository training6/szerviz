import styled from 'styled-components';



export const MessageForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  flex-direction: column;
`;

export const RowM = styled.div`
  position: relative;
  width: 18rem;
  height: 2.8rem;
  margin: 20px;
`;

export const RowMT = styled.div`
  position: relative;
  width: 18rem;
  height: 9rem;
  margin: 20px;
`;

export const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #0e153a;
  border-radius: 5px;
  outline: none;
  padding: 1.25rem;
  background: none;
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    width: 18rem;
  }
`;


export const FormLabel = styled.label`
  position: absolute;
  left: 1rem;
  bottom: 2.3rem;
  padding: 0 0.5rem;
  color: black;
  cursor: text;
  background-color: #e2f3f5;
  font-size: 12px;
`;



export const RowB = styled.div`
  position: relative;
  height: 2.5rem;
  margin: 20px;
`;

export const FormButton = styled.input`
position: relative;
width: 18rem;
height: 2.5rem;
/*margin: 20px;*/
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 12px 30px; 
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out; 
  background: #fff;
}
`;

