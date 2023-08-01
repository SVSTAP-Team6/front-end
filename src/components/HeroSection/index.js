import React, { useState } from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import "./Hero.css";
import { Button } from '../ButtonElement'




const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <div id="Home" className='flex align-center justify-center h-screen'>
            <div className='flex align-center justify-center flex-col z-10'>
                <HeroH1> Experience the guga </HeroH1>
                <HeroP>
                    Sign up for a new account today and receive
                    free access to the world's first interactive guga.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                    >
                        Get started
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </div>
        </div>
    )
}

export default HeroSection