import React from 'react'
import {SidebarContainer,Icon, CloseIcon, SidebarWrapper,SidebarLink,SidebarMenu,SidebtnWrap,SidebarRoute,SidebarHeading}from './SidebarElements';
const Sidebar = ({isOpen,toggle , success}) => {
    return (
      <SidebarContainer isOpen ={isOpen} >
          <Icon onClick={toggle}>
              <CloseIcon>

              </CloseIcon>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarHeading >
                      You can upload any one of these Documents </SidebarHeading>
                  
                <SidebarLink smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Aadhar Card</SidebarLink>
                  <SidebarLink smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active' >Driving License</SidebarLink>
                  <SidebarLink  smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Voter Id Card</SidebarLink>
                  <SidebarLink smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Pan Card</SidebarLink>
                
              </SidebarMenu>
              <SidebtnWrap>
                  <SidebarRoute ><input type="file" onChange={success} /></SidebarRoute>
              </SidebtnWrap>
          </SidebarWrapper>
      </SidebarContainer>
    )
}

export default Sidebar
