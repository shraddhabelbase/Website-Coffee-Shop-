import React, {useState} from 'react'
import { HeroContainer, HeroItems, HeroH1, HeroBtn, HeroContent } from './HeroElements'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'


const Hero = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen)
        };
    
    return (
        <>
        <HeroContainer>
        <Navbar toogle={toogle}/>
        <Sidebar isOpen={isOpen} toogle={toogle}/>
        <HeroContent>
        <HeroItems>
        <HeroH1>Greatest Smoothie</HeroH1>
        <HeroBtn>Start</HeroBtn>
        </HeroItems></HeroContent></HeroContainer>
        
        </>
    );
};

export default Hero;