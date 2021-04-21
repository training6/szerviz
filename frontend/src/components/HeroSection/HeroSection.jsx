import React, { useState } from 'react';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroWrapper, HeroH1, HeroP, HeroP1, HeroBtn, ArrowForward, ArrowRight } from './HeroElements';
import Img from '../../images/LED_TVs.png';
//import Video from '../../videos/video.mp4';
import { Button } from '../Button/ButtonElement';


function HeroSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  } 

  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={Img} />
        {/*<VideoBg autoPlay loop muted src={Video} type='video/mp4'/>*/}
      </HeroBg>
      <HeroContent>
        <HeroWrapper>
        {/*<HeroH1>Szervizcentrum</HeroH1>*/}
        <HeroH1>TV Szerviz</HeroH1>
        <HeroP1>1115 Budapest, Bartók Béla u.124.</HeroP1>
        <HeroP href='tel:+3612062553'>Telefon: +36-1-206-2553</HeroP>
        <HeroP href='tel: +36309410658'>Mobil: +36-30-941-0658</HeroP>
        </HeroWrapper>
      <HeroBtn>
          <Button to="message" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Hibabejelentés {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          </HeroBtn>
          </HeroContent>
          
    </HeroContainer>
  )
}

export default HeroSection
