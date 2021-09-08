import React from 'react'

import UndrawCoding from '../../images/undraw_coding.svg';

function intro() {
    return (
        <div id="intro" className="grid-item">
            <div id="intro-wrapper">
                <div id="intro-content">
                    <h3>Alan Duong</h3>
                    <h5>Software Engineer</h5>
                    <a href="https://drive.google.com/file/d/1lbveuvIZYWQECwq6RF4Mu_pciNs0VpOz/view?usp=sharing" 
                        className="button"
                        target="_blank">
                        View Resume
                    </a>
                </div>
                <div id="intro-image">
                    <img src={UndrawCoding} alt="Alan Coding at a Laptop"/> 
                </div>
            </div>
        </div>
    )
}

export default intro