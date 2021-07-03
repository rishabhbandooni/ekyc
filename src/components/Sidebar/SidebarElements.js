import styled from 'styled-components' ;
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import {FaTimes} from 'react-icons/fa';
export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#0d0d0d;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3 ease-in-out;

 opacity: ${({isOpen})=> (isOpen ? '100%' : '0')};
 top:${({isOpen })=>(isOpen ? '0': ' -100%')};

`
export const CloseIcon = styled(FaTimes)`
color:#fff
`

export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;

`
export const SidebarWrapper = styled.div`
color:#fff;

`
export const addclass = styled.div`
color:#FF0000

`

export const AddclassLink = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
color:#fff;
cursor:pointer;
flex: 1 1 auto;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
 text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;

  &:hover{
    background-position: right center; 
    color : black;
  
    
    transition:0.2 ease-in-out;
}
 
 `
export const SidebarLink = styled(LinkS)`
display:flex;
justify-content:center;
align-items:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;

color:#fff;
cursor:pointer;
flex: 1 1 auto;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
 text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
 &.active{
   border: 3px solid red;
 }
&:hover{
    /* background-position: right center; 
    color : black;
  
    transform: scale(1.07);
    transition: all 0.2 ease-in-out;
    cursor:pointer;
    */
    color: #01bf71 !important;
	font-weight: 700 !important;
	letter-spacing: 3px;
	background: none;
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.3s ease 0s;
}
`
export const SidebtnWrap = styled.div`
display:flex;
justify-content:center;

`
export const SidebarRoute = styled.div`
background:#01bf71;
border-radius:50px;
white-space:nowrap;
padding: 16px 64px;
color:#010606;
font-size:16px;
outline: none;
border: none;
cursor: pointer;
transition:all 0.2 ease-in-out;
text-decoration: none;
&:hover {
    transition:all 0.2 ease-in-out;
    background:#fff;
color:#010606;
}
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width :480px)
{
    grid-template-rows:repeat(6,80px) ;
}
`
export const SidebarHeading = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:2.0rem;
text-decoration:none;
list-style:none;
margin-top: -200px;
/* margin-left:24px; */
font-weight:bold;
transition :0.2 ease-in-out;
color:#fff;
cursor:pointer;
&:hover{
    color : #01bf71;
    transition:0.2 ease-in-out;
}
`