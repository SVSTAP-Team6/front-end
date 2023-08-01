// import React, { useState } from "react";
// import { Sidebar, Navbar } from "../components";
// import { BasePage } from ".";
import React, { useState } from 'react'
import { Navbar } from '../components'
import { Home } from "./";
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import HeroSection from '../components/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        let abortController = new AbortController();
        setIsOpen(!isOpen);
        return () => {
            abortController.abort();
        }
    }

    return (
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="bg-main-bg min-h-screen w-full flex flex-col">
                <Navbar />
                <Home />
            </div>

        </div>
    );
}

export default Layout;