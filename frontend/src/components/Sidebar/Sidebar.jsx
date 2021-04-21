import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarLinkBtn } from './SidebarElements';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Magunkról</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Szolgáltatások</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Elérhetőség</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarLinkBtn to="message" onClick={toggle}>Hibabejelentés</SidebarLinkBtn>
        </SideBtnWrap>
      </SidebarWrapper>
      
    </SidebarContainer>
  )
}

export default Sidebar
