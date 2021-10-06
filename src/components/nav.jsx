import React from 'react'
import { HashLink } from 'react-router-hash-link';
import AlanProfilePic from '../images/AlanProfilePic.jpg';
import GithubIcon from '../images/GitHub-white-logo-sm.png';
import LinkedInIcon from '../images/linked-in-icon-white.png';
function nav() {
    return (
        <div id="nav">
            <div id="nav-wrapper">
                <img src={AlanProfilePic} alt="Alan Profile Pic"/>
                <p>Alan Duong</p>
                <a href="https://cs.rice.edu/" target="_blank" id="college">CS at Rice University </a>
                <div id="social-links-container">
                    <a href="https://www.linkedin.com/in/alan-duong-547095199/" target="_blank">
                        <img src={LinkedInIcon} alt="Link to my Linked In Page"/>
                    </a>
                    <a href="https://github.com/AlanDuong07" target="_blank">
                        <img src={GithubIcon} alt="Link to my Github" id="github-icon"/>
                    </a>
                </div>
                <div id="nav-links-wrapper">
                    <div className="nav-link">
                        <HashLink to="/#intro">Home</HashLink>
                    </div>
                    <div className="nav-link">
                        <HashLink to="/#portfolio">Portfolio</HashLink>
                    </div>
                    <div className="nav-link">
                        <HashLink to="/#skills">Skills</HashLink>
                    </div>
                    <div className="nav-link">
                        <HashLink to="/#softwares">Languages</HashLink>
                    </div>
                    <div className="nav-link">
                        <HashLink to="/#about">About</HashLink>
                    </div>
                    {/* <div className="nav-link">
                        <HashLink to="/#contact">Contact Me</HashLink>
                    </div> */}
                    <div className="nav-link">
                        <a href="https://drive.google.com/file/d/1S7h3uDedXRm-xvv05Va6XGdhdSY4M4e-/view?usp=sharing" target="_blank">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nav
