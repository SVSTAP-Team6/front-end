import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './style/NavbarElements';

const Navbar = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        let abortController = new AbortController();
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }

        return () => {
            abortController.abort();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    // Function from react-scroll
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Gain Your Grain</NavLogo>

                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                to="about"
                                smooth spy
                                duration={300}
                                activeClass='active'
                                exact='true'
                                > About </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="discover"
                                smooth spy
                                duration={300}
                                activeClass='active'
                                exact='true'> Discover </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="services"
                                smooth spy
                                duration={300}
                                activeClass='active'
                                exact='true'> Services </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                to="signup"
                                smooth spy
                                duration={300}
                                activeClass='active'
                                exact='true'> Sign Up </NavLinks>
                            </NavItem>
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/signin"> Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;