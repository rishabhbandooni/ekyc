import React,{ useState,useEffect} from 'react';
import {FaFileUpload} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {Nav , NavbarContainer, NavLogo,MobileIcon,NavMenu,NavItem ,NavLinks, NavBtn ,NavBtnLink}from './NavbarElements';
const Navbar = ({toggle}) => {
    
//     const {scrollNav,setScrollNav}=useState(false)

// const changeNav= ()=>{
//     if(window.scrolly >=80){
//         setScrollNav(true);
//     }
//     else{
//         setScrollNav(false)
//     }
//     useEffect(()=>{
//         window.addEventListener('scroll',changeNav);

//     },[]);
// }
    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
    <>
    <Nav>
<NavbarContainer>
    <NavLogo to = '/' onClick={toggleHome}>
        InterWeb
    </NavLogo>
    <MobileIcon onClick={toggle}>
        <FaFileUpload  />
         Upload Widget
    </MobileIcon>
    <NavMenu>
        <NavItem>
            <NavLinks to = 'about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>About Us</NavLinks>

        </NavItem>
        <NavItem>
            <NavLinks to = 'services'smooth={true} duration={500} spy={true} exact='true' offset={-80}>How It Works</NavLinks>
        </NavItem>
        <NavItem>
            <NavLinks to = 'discover'smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
        </NavItem>
       

    </NavMenu>
</NavbarContainer>
    </Nav>
    </>

        
    )
}

export default Navbar




