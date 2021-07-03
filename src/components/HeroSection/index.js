import React, { useState }from 'react'
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElements"
import {HeroContainer,HeroBg,VideoBg,ArrowForward,ArrowRight,HeroH1,HeroP,HeroContent,HeroBtnWrapper} from './HeroElements'
const HeroSection = ({toggle}) => {
    const[hover,setHover]= useState(false)
    const onHover =()=>{
        setHover(!hover)
    }
    return (
       <HeroContainer id = "home ">
<HeroBg>
    <VideoBg autoPlay loop muted src ={Video} type='video/mp4'/>
</HeroBg>
<HeroContent>
    <HeroH1>Virtual KYC Made Easy</HeroH1>
    <HeroP>
        Highly Automated online identity verification services from InterWeb simplify compliance and KYC for everyone. Gain Trust and transparency , so you always know your customers </HeroP>
        <HeroBtnWrapper>
            <Button to ="home" onClick={toggle} onMouseEnter={onHover} onMouseLeave={onHover}
            
            primary="true"
            dark="true">Get Started{hover ? <ArrowForward />: <ArrowRight />} </Button></HeroBtnWrapper>
</HeroContent>
       </HeroContainer>
    )
}

export default HeroSection
