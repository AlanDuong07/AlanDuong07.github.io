import React from 'react'
//<span id="right-arrow">&rarr;</span> add back in when projects are implemented, as well as the actual links!
function projectcard(props) {
    return (
        <div className="project-card">
            <a>
                <img src={props.image} alt="Project Card Image" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
        </div>
    )
}

export default projectcard
