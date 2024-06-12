// import React from 'react'

import NavBar from "../Components/Nav/NavBar"
import Header from "../Components/Header/Header"
import LandingMain from "../Components/Main/LandingMain"
import OtherLanding from "../Components/Other/OtherLanding"

const LandingPage = () => {
    return (
        <div className=" text-blue-gray-800">
            <NavBar/>
            <Header/>
            <LandingMain/>
            <OtherLanding/>
        </div>
    )
}

export default LandingPage
