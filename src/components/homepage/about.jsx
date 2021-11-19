import React from 'react'
import AlanPic from '../../images/AlanProfilePic.jpg';
function about() {
    return (
        <div id="about" className="grid-item">
            <div id="about-wrapper">
                <div id="about-content">
                    <h3>About</h3>
                    <p>
                    My journey with software engineering began my freshman year of college, in the midst of the 
                    wide reaching, devastating Covid-19 pandemic. During this time, the immense impact that software applications had
                    in allowing me to still pursue a college education inspired me to join and contribute to the
                    wonderful, collaborative community of developers. Since then, I've worked on a diverse range of projects, including
                    coding a python PDF text and curve parser for voting ballots,
                    redesigning and adding responsive design to the Rice Computer Science club website, 
                    and
                    developing an accessible, eye-catching Big Commerce-based eCommerce website for a top designer fragrance distributer.
                    <br></br>
                    <br></br>
                    A favorite quote of mine: 
                    <br></br>
                    <br></br>
                    "I hope the field of computer science never loses its sense of fun. 
                    Above all, I hope we don't become missionaries. 
                    Don't feel as if you're Bible salesmen. 
                    The world has too many of those already. 
                    What you know about computing other people will learn. 
                    Don't feel as if the key to successful computing is only in your hands. 
                    What's in your hands, I think and hope, is intelligence: the ability to see the machine as more than when you were first led up to it, that you can make it more.''
                    <br></br>
                    -Alan J. Perlis (April 1, 1922-February 7, 1990)
                    </p>
                    <a href="https://drive.google.com/file/d/1M4a0rsMQoVDEON5uP1omoccXb_oCkfNc/view?usp=sharing" 
                        className="button"
                        target="_blank">
                        View Resume
                    </a>
                </div>
                <div id="about-image">
                    <img src={AlanPic} alt="Picture of Alan"/>
                </div>
            </div>
        </div>
    )
}

export default about
