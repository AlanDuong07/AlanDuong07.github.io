import React from 'react'

import UndrawCoding from '../../images/undraw_coding.svg';

function intro() {
    return (
        <div className="intro grid-item">
            <div className="intro-wrapper">
                <div className="intro-text">
                    <h3>Alan Duong</h3>
                    <h5>Software Engineer</h5>
                    <a href="https://drive.google.com/file/d/1M4a0rsMQoVDEON5uP1omoccXb_oCkfNc/view?usp=sharing" 
                        className="button"
                        target="_blank">
                        View Resume
                    </a>
                </div>
                <div className="intro-image">
                    <img src={UndrawCoding} alt="Alan Coding at a Laptop"/> 
                </div>
            </div>
        </div>
    )
}

export default intro
