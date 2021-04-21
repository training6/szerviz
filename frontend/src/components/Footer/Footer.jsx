import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import {FaFacebook} from 'react-icons/fa';
import {FiPhone} from 'react-icons/fi';
import {GiSmartphone} from 'react-icons/gi';
import {AiOutlineMail} from 'react-icons/ai';


import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'; 
function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (

    <FooterContainer>
      <FooterWrap>
        {/*<FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>

                <FooterLink to='/signin'>Vmi</FooterLink>
                <FooterLink to='/signin'>About us</FooterLink>
                <FooterLink to='/signin'>About us</FooterLink>
                <FooterLink to='/signin'>Terms of Service</FooterLink>

            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        */}
        <SocialMedia>
        <SocialMediaWrap>
        <SocialLogo to='/' onClick={toggleHome}>Szervizcentrum</SocialLogo>
        <WebsiteRights>
        Szervizcentrum © {new Date().getFullYear()} All rights reserved.
        </WebsiteRights>
        <SocialIcons>
          {/*//www.facebook.com/vmi*/}
        <SocialIconLink href='//www.facebook.com/Szervizcentrum-937793799701601' target='_blank' aria-label='Facebook'>
        <FaFacebook />
        </SocialIconLink >
        <SocialIconLink href='tel:+3612062553'  aria-label='phone'>
        <FiPhone />
        </SocialIconLink >
        <SocialIconLink href='tel: +36309410658'  aria-label='mobil'>
        <GiSmartphone />
        </SocialIconLink >
        <SocialIconLink href='mailto:szerviz@szervizcentrum.hu'  aria-label='email'>
        <AiOutlineMail/>
        </SocialIconLink >
        </SocialIcons>
       
        </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      
    </FooterContainer>
  )
}
  
export default Footer
  