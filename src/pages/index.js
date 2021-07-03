import React,{useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo } from '../components/InfoSection/Data';

const Home = () => {

    const [isOpen,setIsOpen]=useState(false);
    const success=()=> {
        alert("You have Successfully Uploaded Your Document");
      }
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
  
    return (
     <>
     <Sidebar isOpen={isOpen}toggle ={toggle} success ={success} />
     <Navbar toggle={toggle} />
     <HeroSection  toggle={toggle} />
     <InfoSection {...homeObjTwo} toggle={toggle}/>
     <Services />
     <InfoSection {...homeObjOne} toggle={toggle} />
   
     </>
    )
}

export default Home
