import React from 'react'
import Content from './home/content'
import Hotel1 from './home/hotel1'

import Navbars from './home/navbar'
import "../styles/home.css"
import AboutSection from './home/about'

const Fullscreen = () => {
    return (
        <>
            <div className='main'>
                <Navbars />
                <Content />
                <Hotel1 />
                <AboutSection/>
            </div>
        </>
    )
}

export default Fullscreen
