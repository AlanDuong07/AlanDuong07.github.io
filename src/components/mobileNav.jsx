import React, {useState, useEffect} from 'react';
import HamburgerIcon from '../images/hamburger.svg';
import CloseIcon from '../images/close.svg';
function Hamburger() {
    // const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        let hamburgerMenu = document.getElementById('hamburgerMenu');
        hamburgerMenu.onclick = function () {
            let navElement = document.getElementById('nav');
            let closeIcon = document.getElementById('closeIcon');
            let hamburgerIcon = document.getElementById('hamburgerIcon');
            //toggle main nav and closeIcon. Mobile only
             if (navElement.style.display == "inline-block") {
                navElement.style.display = "none";
                closeIcon.style.display = "none";
                hamburgerIcon.style.display = "flex";
             }  else {
                 navElement.style.display = "inline-block";
                 closeIcon.style.display = "block";
                 hamburgerIcon.style.display = "none";
             }
            
        }
    });
    return (
        <button id="hamburgerMenu">
            <img id="hamburgerIcon" src={HamburgerIcon} alt="Mobile Menu"/>
            <img id="closeIcon" src={CloseIcon} alt="Close Icon"/>
        </button>
    )
}

export default Hamburger




