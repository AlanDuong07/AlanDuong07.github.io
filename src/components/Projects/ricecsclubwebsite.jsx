import React from 'react'
import RiceCSClubCardImage from '../../images/projects/RiceCSClub/RiceCSClubCardImage.png';
function ricecsclubwebsite() {
    return (
        <div className="projectPage">
            <div className="intro grid-item">
                <div className="intro-wrapper">
                    <div className="intro-text">
                        <h3>Frontend Developer</h3>
                        <h5>Rice CS Club Website</h5>
                        <a href="https://github.com/riceucsclub/website/tree/benny" 
                            className="button"
                            target="_blank">
                            View GitHub
                        </a>
                    </div>
                    <div className="intro-image projectIntroImage">
                        <img src={RiceCSClubCardImage} alt="Rice CS Club Main Page"/> 
                    </div>
                </div>
            </div>
            <div className="projectSummary grid-item">
                <div className="projectSummaryWrapper">
                    <h3>Project Summary</h3>
                    <p> In this summer long program, I redesigned and coded Rice CS Club website, adding completely new, full responsive design for
                        mobile + tablet devices, utilizing HTML and TailwindCSS.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default ricecsclubwebsite
