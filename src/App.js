import './styles/main.scss'; 
import Nav from './components/nav';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Softwares from './components/softwares';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <div className="nav-container">
          <Nav/>
        </div>
        <div className="home-container">
          <Intro/>
          <Portfolio/>
          <Skills/>
          <Softwares/>
          <About/>
          <Contact/>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
