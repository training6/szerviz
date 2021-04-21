import React from 'react'
import { Button } from '../Button/ButtonElement';
import {InfoContainer, InfoWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

function InfoSection({ lightBg, id, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
              <TopLine>{topLine}</TopLine>
              <InfoWrapper>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
              </InfoWrapper>
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
            
      </InfoContainer>
    </>
  )
}

export default InfoSection
