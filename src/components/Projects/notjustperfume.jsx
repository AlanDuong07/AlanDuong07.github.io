import React from 'react'
import NJPCardImage from '../../images/projects/NotJustPerfume/NJPPortfolioCard.png';
function notjustperfume() {
    return (
        <div className="projectPage">
            <div className="intro grid-item">
                <div className="intro-wrapper">
                    <div className="intro-text">
                        <h3>Frontend Developer</h3>
                        <h5>BrooklynK, a fashionable, accessible eCommerce theme.</h5>
                        <a href="https://github.com/AlanDuong07/NJPBrooklynKTheme" 
                            className="button"
                            target="_blank">
                            View GitHub
                        </a>
                    </div>
                    <div className="intro-image projectIntroImage">
                        <img src={NJPCardImage} alt="NotJustPerfume Main Page"/> 
                    </div>
                </div>
            </div>
            <div className="projectSummary grid-item">
                <div className="projectSummaryWrapper">
                    <h3>Project Summary</h3>
                    <p> In this internship project, I used HTML, CSS, and Javascript to fix 40+ issues in my company's eCommerce website theme.
                        Important fixes included adding more prominent category hierarchy, adding more responsive design to all
                        pages, making advanced search more accessible, and adding product carousels.</p>
    
                </div>
            </div>
        </div>
    )
}

export default notjustperfume
