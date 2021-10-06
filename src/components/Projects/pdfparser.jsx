import React from 'react'
import VotingBallotCardImage from '../../images/projects/pdfparser/votingballotcardimage.png';
function pdfparser() {
    return (
        <div className="projectPage">
            <div className="intro grid-item">
                <div className="intro-wrapper">
                    <div className="intro-text">
                        <h3>Python Programmer</h3>
                        <h5>A Python PDF parser, built for a research lab.</h5>
                        <a href="https://github.com/arixwang/PDFMiner-CHIL" 
                            className="button"
                            target="_blank">
                            View GitHub
                        </a>
                    </div>
                    <div className="intro-image projectIntroImage">
                        <img src={VotingBallotCardImage} alt="Voting Ballot Card Image"/> 
                    </div>
                </div>
            </div>
            <div className="projectSummary grid-item">
                <div className="projectSummaryWrapper">
                    <h3>Project Summary</h3>
                    <p> In this project, I built a PDF parsing Python program, using PDFMiner and PDFPlumber APIs, that parses
                        through voting ballots and retrieves the location of each individual word and voting bubble on
                        the ballot. It will be used in tandem with a larger research project to automate the process of
                        getting location information from ballots.
                        I developed effective skills in reading API documentation, API usage, Python programming, and
                        time management as a result of working in a deadline-oriented setting!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default pdfparser
