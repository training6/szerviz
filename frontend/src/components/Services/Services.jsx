import React from 'react';
import { ServicesContainer, ServicesH1, BtnWrap } from './ServicesElements';
import { Button } from '../Button/ButtonElement';
import Cards from './Cards';
function Services({ buttonLabel, primary, dark, dark2 }) {
  
  
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Szolgáltatások</ServicesH1>
         <Cards /> 
        <BtnWrap>
                <Button to='message'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dar2={dark2 ? 1 : 0}
                >{buttonLabel}</Button>
              </BtnWrap>
      </ServicesContainer>
    </>
  )
}

export default Services
