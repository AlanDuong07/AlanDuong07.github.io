import React from 'react'
import AlanProfilePic from '../images/AlanProfilePic.jpg';
import GithubIcon from '../images/GitHub-white-logo-sm.png';
import LinkedInIcon from '../images/linked-in-icon-white.png';
function nav() {
    return (
        <div id="nav">
            <div id="nav-wrapper">
                <img src={AlanProfilePic} alt="Alan Profile Pic"/>
                <p>Alan Duong</p>
                <a href="https://cs.rice.edu/" target="_blank">CS at Rice University </a>
                <div id="social-links-container">
                    <a href="https://www.linkedin.com/in/alan-duong-547095199/" target="_blank">
                        <img src={LinkedInIcon} alt="Link to my Linked In Page"/>
                    </a>
                    <a href="https://github.com/AlanDuong07" target="_blank">
                        <img src={GithubIcon} alt="Link to my Github" id="github-icon"/>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default nav
