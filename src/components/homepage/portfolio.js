import React from 'react'
import ProjectCard from './projectcard';
import BigFloppa from '../../images/projects/bigfloppa.png';
import VotingBallotCardImage from '../../images/projects/pdfparser/votingballotcardimage.png';

function portfolio() {
    return (
        <div id="portfolio" className="grid-item">
            {<div id="portfolio-wrapper">
                <h3>Portfolio</h3>
                <div id="project-grid">
                    <ProjectCard 
                        linkto="/#/pdfparser"
                        image={VotingBallotCardImage} 
                        title="PDF Parser for Voting Ballots" 
                        description="A python PDF parser for voting ballots that retrieves the location of 
                            every word and bubble"/>
                    <ProjectCard 
                        linkto="/"
                        image={BigFloppa} 
                        title="Big Floppa Website" 
                        description="A personal website for Big Floppa, built in React.js."/>
                    <ProjectCard 
                        linkto="/"
                        image={BigFloppa} 
                        title="Big Floppa Website" 
                        description="A personal website for Big Floppa, built in React.js."/>
                    <ProjectCard 
                        linkto="/"
                        image={BigFloppa} 
                        title="Big Floppa Website" 
                        description="A personal website for Big Floppa, built in React.js."/>
                    <ProjectCard 
                        linkto="/"
                        image={BigFloppa} 
                        title="Big Floppa Website" 
                        description="A personal website for Big Floppa, built in React.js."/>
                    <ProjectCard 
                        linkto="/"
                        image={BigFloppa} 
                        title="Big Floppa Website" 
                        description="A personal website for Big Floppa, built in React.js."/>   
                </div>
            </div>}
        </div>
    )
}

export default portfolio
