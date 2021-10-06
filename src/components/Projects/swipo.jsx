import React from 'react'
import SwipoCardImage from '../../images/projects/swipo/SwipoPortfolioImage.png';

function swipo() {
    return (
        <div className="projectPage">
            <div className="intro grid-item">
                <div className="intro-wrapper">
                    <div className="intro-text">
                        <h3>Lead Developer and Designer</h3>
                        <h5>Swipo, a music discovery app.</h5>
                        <a href="https://github.com/AlanDuong07/swipo" 
                            className="button"
                            target="_blank">
                            View GitHub
                        </a>
                    </div>
                    <div className="intro-image projectIntroImage">
                        <img src={SwipoCardImage} alt="Swipo Mobile View"/> 
                    </div>
                </div>
            </div>
            <div className="projectSummary grid-item">
                <div className="projectSummaryWrapper">
                    <h3>Project Summary</h3>
                    <p> Swipo is a web app that uses Spotify's API to get songs that you potentially can "match" with. 
                        The app will first ask you to log in with your Spotify account to add songs to a new playlist. 
                        It then will ask you to search for a general genre that you're feeling. It will find 
                        a playlist corresponding to that genre and go through that playlist for you to swipe left or right on. 
                        Even more importantly, the app let's you listen to the most exciting part of the song so you can decide more quickly whether you like it! 
                        All the songs you swipe right on will be added to a new, custom Swipo playlist custom to your search, leaving you with a playlist that 
                        has a ton of songs you've chosen yourself for the genre you want!</p>
                    <br></br>
                    <p>
                    Swipo is a front end heavy app built in React and uses several React libraries, namely the "spotify-web-api-js" library 
                    that helps the app make calls to Spotify's API. My team and I did design work in 
                    Figma and created flow diagrams to think about code structure and user experience design.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default swipo
