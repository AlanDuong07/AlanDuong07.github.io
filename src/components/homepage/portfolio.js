import React from 'react'
import ProjectCard from './projectcard';
import BigFloppa from '../../images/projects/bigfloppa.png';

function portfolio() {
    return (
        <div id="portfolio" className="grid-item">
            {<div id="portfolio-wrapper">
                <h3>Portfolio</h3>
                <div id="project-grid">
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
