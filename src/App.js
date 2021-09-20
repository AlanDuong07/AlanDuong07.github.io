import React, { Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './styles/main.scss'; 



import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Homepage from './components/homepage/homepage.js';
import Pdfparser from "./components/Projects/pdfparser/pdfparser.js";


function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <div className="nav-container">
            <Nav/>
          </div>
          <Route exact path="/" component={Homepage}/>
          <Route path="/pdfparser" component={Pdfparser}/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
