import React from 'react'
import ProjectCard from './projectcard.jsx';
import BigFloppa from '../../images/projects/bigfloppa.png';
import VotingBallotCardImage from '../../images/projects/pdfparser/votingballotcardimage.png';
import SwipoCardImage from '../../images/projects/swipo/SwipoPortfolioImage.png';
import NJPCardImage from '../../images/projects/NotJustPerfume/NJPPortfolioCard.png';
//1000 by 917 for any images
function portfolio() {
    return (
        <div id="portfolio" className="grid-item">
            {<div id="portfolio-wrapper">
                <h3>Portfolio</h3>
                <div id="project-grid">
                <ProjectCard 
                        linkto="/#/swipo"
                        image={SwipoCardImage} 
                        title="Swipo" 
                        description="A music discovery app that makes finding new music fast and fun, built using React.js and Spotify's API."/>
                    <ProjectCard 
                        linkto="/#/pdfparser"
                        image={VotingBallotCardImage} 
                        title="PDF Parser for Voting Ballots" 
                        description="A python PDF parser for voting ballots that retrieves the location of 
                            every word and bubble"/>
                    <ProjectCard 
                        linkto="/#/notjustperfume"
                        image={NJPCardImage} 
                        title="NotJustPerfume Theme" 
                        description="An eCommerce theme I improved using HTML, CSS, and vanilla JS."/> 
                </div>
            </div>}
        </div>
    )
}

export default portfolio
