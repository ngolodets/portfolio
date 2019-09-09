import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
//import Resume from './Resume';
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
          <div className='intro'>
            <h1 className='myinfo'>Nina Golodets</h1>
            <h3 className='myinfo'>Full Stack Web Developer</h3>
          </div>
          <div className='contact'>
            <a href="https://linkedin.com/in/ninagolodets" 
              className='link'
              target='_blank' 
              rel="noopener noreferrer">
              <img className='icons' style={{height: '40px', width: '40px'}} src="https://image.flaticon.com/icons/png/512/61/61109.png" alt=""/>
            </a>
            <a href="https://github.com/ngolodets" 
              className='link'
              target='_blank' 
              rel="noopener noreferrer">
              <img className='icons' style={{height: '40px', width: '40px'}} src="https://icon-library.net/images/github-icon-png/github-icon-png-22.jpg" alt=""/>
            </a>
            {/* <a href="./Nina Golodets Resume 2019.pdf"
                className='link'
                target='_blank' 
                rel="noopener noreferrer">
            <img className='icons' src="./selfpic.jpg" style={{width: '40px', 
                                            height: '40px',
                                            borderRadius: '5px'}}/>
            </a> */}
          </div>
        </header>
        <div className='body'>
          <div className='right'>
            <Link className='links' to='/'>ABOUT</Link><br />
            <Link className='links' to="/projects">PROJECTS</Link><br />
            <Link className='links' to="/skills">SKILLS</Link><br />
            <a className='links' 
                href="./Nina Golodets Resume 2019.pdf"
                target='_blank' 
                rel="noopener noreferrer">RESUME
            </a>
            <br />
          </div>
          <div className='left'>
            <AboutMe />
            {/* <Resume /> */}
            <Route path='/projects' component={Projects} />
            <Route path='/skills' component={Skills} />
          </div>
        </div>
        <footer style={{textAlign: 'right', 
                        marginRight: '20px'}}>©️2019 Nina Golodets
        </footer>
      </div>
    </Router>
  );
}

export default App;
