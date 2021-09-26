import React, { Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './styles/main.scss'; 

import Nav from './components/nav.jsx';
import MobileNav from './components/mobileNav.jsx';
import Footer from './components/footer.jsx';
import Homepage from './components/homepage/homepage.jsx';
import Pdfparser from './components/Projects/pdfparser.jsx';
import Swipo from './components/Projects/swipo.jsx';
import NotJustPerfume from './components/Projects/notjustperfume.jsx';
import RiceCSClubWebsite from './components/Projects/ricecsclubwebsite.jsx';
function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <div className="nav-container">
            <Nav/>
            <MobileNav/>
          </div>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/pdfparser/" component={Pdfparser}/>
          <Route exact path="/swipo/" component={Swipo}/>
          <Route exact path="/notjustperfume/" component={NotJustPerfume}/>
          <Route exact path="/ricecsclubwebsite/" component={RiceCSClubWebsite}/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
