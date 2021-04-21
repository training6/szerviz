import styled from 'styled-components';

export const ContactContainer = styled.div`
  height: 760px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0e153a;


  @media screen and (max-width: 1000px) {
    height: 1100px;
  }

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

`;

export const ContactH1 = styled.h1`
  font-size: 1.5rem;
  color: #01bf71;
  text-transform: uppercase;
  margin-top: -25px;
  margin-bottom: 44px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

`;

export const ContactSection1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 380px;
  height: 320px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    padding: 10px;
    height: 300px;

  }
`;

export const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  float: left;
  margin-top: 10px;

`



export const ContactP = styled.h1`
color: #fff;
padding: 0;
margin-bottom: 35px;
width: 300px;
float: left;
`;

export const Contact1A = styled.a`
color: #fff;
font-size: 1rem;
padding: 0;
margin: 0;
width: 300px;
float: left;
line-height: 2rem;
`;

export const Contact2A = styled.a`
color: #fff;
font-size: 1rem;
padding: 0;
margin: 0;
width: 300px;
float: left;
line-height: 2rem;
text-decoration: none;
`;

export const Contact2P = styled.p`
color: #fff;
font-size: 1rem;
padding: 0;
margin: 0 0 25px 0;
width: 300px;
float: left;
text-decoration: none;

`;


export const Contact1P = styled.a`
color: #fff;
font-size: 1rem;
padding: 0;
margin: 0;
width: 300px;
float: left;
text-decoration: none;

`;




export const Contact3P = styled.p`
color: #fff;
font-size: 1rem;
padding: 0;
margin: 0 0 10px 0;
width: 300px;
float: left;
text-decoration: none;

`;

export const ImgMap = styled.img`
  height: 360px;
  width: 360px;
  margin-bottom: 10px;
`;

export const MapA = styled.a`
color: #0000FF;
text-align: left;
`
export const Iframe = styled.iframe`
width: 525px;
height: 350px; 
frameborder: 0; 
border-style: none;

@media screen and (max-width: 768px) {
  max-width: 350px;

  @media screen and (max-width: 480px) {
    max-width: 300px;
  }

}

`

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  `;
  