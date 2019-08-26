import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Nina Golodets</h1>
        <h3>Full Stack Web Developer</h3>
        <div className='contact'>
          <a href="https://linkedin.com/in/ninagolodets">LinkedIn</a>
          <a href="https://github.com/ngolodets">GitHub</a>
          {/* <a href="nina.golodets@gmail.com">Email</a> */}
        </div>
      </header>
      <div className='body'>
        <div className='right'>
          <Link className='links' to='/'>Home</Link><br />
          <Link className='links' to="/projects">Projects</Link><br />
          <Link className='links' to="/skills">Skills</Link><br />
          <a className='links' href="./Nina Golodets Resume 2019.pdf">Resume</a><br />
        </div>
        <div className='left'>
          <AboutMe />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
          {/* <Skills />
          <Projects /> */}
        </div>
      </div>

    </div>
    </Router>
  );
}

export default App;
