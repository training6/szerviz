import React from 'react'
import { Button } from '../Button/ButtonElement';
import { ContactContainer, ContactH1, ContactDiv, ContactWrapper, ContactSection1, ContactP, Contact2P,
        Contact3P, Contact1P, Contact1A, Contact2A, Iframe, MapA, BtnWrap } from './ContactElements';

function ContactSection({ buttonLabel, primary, dark, dark2 }) {
  
  
  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>Elérhetőség</ContactH1>
        <ContactWrapper>
        <ContactSection1>
         
         <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.964393294294!2d19.028134515126567!3d47.47112330532084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddc7ea41abe1%3A0x56dcdc52eeddefb6!2zQmFydMOzayBCw6lsYSDDunQgMTI0LCBCdWRhcGVzdCwgMTExNSBNYWd5YXJvcnN6w6Fn!5e0!3m2!1shu!2sus!4v1445876045576" allowfullscreen></Iframe>

         <MapA href="https://www.google.com/maps/place/Bart%C3%B3k+B%C3%A9la+%C3%BAt+124,+Budapest,+1115+Magyarorsz%C3%A1g/@47.4711197,19.0281345,17z/data=!3m1!4b1!4m2!3m1!1s0x4741ddc7ea41abe1:0x56dcdc52eeddefb6?hl=hu"></MapA>
         </ContactSection1>
          <ContactSection1>
          <ContactDiv>
            <ContactP>Szervizcentrum</ContactP>
            <Contact3P>H-P: 10:00-16:00</Contact3P>
            <Contact2P>1115 Budapest, Bartók Béla u. 124.</Contact2P>
            <Contact1P href='tel:+3612062553'>Tel: +36-1-206-2553</Contact1P>
            <Contact2A href='tel:+36309410658'>Mobil: +36-30-941-0658</Contact2A>
            <Contact1A href='mailto:szerviz@szervizcentrum.hu'>E-mail: szerviz@szervizcentrum.hu</Contact1A>
            </ContactDiv>
          </ContactSection1>
          </ContactWrapper>

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
      </ContactContainer>
    </>
  )
}

export default ContactSection
