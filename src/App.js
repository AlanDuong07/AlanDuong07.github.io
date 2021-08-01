import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/main.scss'; 



import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Homepage from './components/homepage/homepage.js';


function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-container">
          <div className="nav-container">
            <Nav/>
          </div>
          <Route exact path="/" component={Homepage}/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
