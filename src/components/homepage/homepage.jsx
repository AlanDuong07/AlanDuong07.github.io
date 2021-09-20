import React from 'react'

import Intro from './intro';
import Portfolio from './portfolio';
import Skills from './skills';
import Softwares from './softwares';
import About from './about';
import Contact from './contact';

function homepage() {
    return (
        <div className="homepage-container">
            <Intro/>
            <Portfolio/>
            <Skills/>
            <Softwares/>
            <About/>
            <Contact/>
        </div>
    )
}

export default homepage
