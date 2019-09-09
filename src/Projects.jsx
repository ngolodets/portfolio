import React from 'react';

function Projects() {

  function displayDescription(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  return (
    <>
    <h3 style={{textAlign: 'left', 
                fontFamily: "'Anton', sans-serif", 
                letterSpacing: '1.4px'}}>Recent Projects:
    </h3>
    <div className='projects'>
      <div className='projectinfo'>
        <h5 className='flip' onMouseOver={() => displayDescription('description1')}>The Book App</h5>
        <div id='description1'>
          <p className='p4'>The Book Application allows the user to browse through a selection of various literary works and decide about what to read next.</p>
          <p className='p4tech'>It is a full-stack MERN application that utilizes an external API.  This app was lovingly put together using React, JWT authentication, MongoDB, Mongoose, and RESTful Routing via Express.</p>
        </div>
        <img className='pics' src="./BookApp.png" alt="Application Screenshot"/><br />
        <div className='projectlinksection'>
          <a className='projectlink' 
            href="https://github.com/ngolodets/project4"
            target='_blank' 
            rel="noopener noreferrer">Github
          </a>
          <a className='projectlink' 
            href="https://lit-reef-15866.herokuapp.com/"
            target='_blank' 
            rel="noopener noreferrer">Live Demo
          </a>
        </div>
      </div>
      <div className='projectinfo'>
        <h5 className='flip' onMouseOver={() => displayDescription('description2')}>The Cocktail App</h5>
        <div id='description2'>
          <p className='p4'>The Cocktail Application was a team collaboration. It allows the user to browse through a selection of mixed drinks as well as their recipes.</p>
          <p className='p4tech'>It is a full-stack MERN application that utilizes its own API.  The cocktail app was created using React, MongoDB database with Mongoose ODM and Express.js on the back end.  This app also uses JSON Web Tokens to authenticate users.</p>
        </div>
        <img className='pics' src="./CocktailApp1.png" alt="Application Screenshot"/><br />
        <div className='projectlinksection'>
          <a className='projectlink' 
            href="https://github.com/ngolodets/project4"
            target='_blank' 
            rel="noopener noreferrer">Github
          </a>
          <a className='projectlink' 
            href="https://desolate-coast-19668.herokuapp.com/"
            target='_blank' 
            rel="noopener noreferrer">Live Demo
          </a>
        </div>
      </div>
      <div className='projectinfo'>
        <h5 className='flip' onMouseOver={() => displayDescription('description3')}>National Park Trip Planner</h5>
        <div id='description3'>
          <p className='p4'>The National Parks Application allows the user to search through the National Parks database to plan their next vacation.</p>
          <p className='p4tech'>This app utilizes a third party API that provides information on national parks.  The application serves content with Express.js and uses a local session authentication strategy.  It is rendered on the front end with EJS templates.</p>
        </div>
        <img className='pics' src="./NationalParks.png" alt="Application Screenshot"/><br />
        <div className='projectlinksection'>
          <a className='projectlink' 
            href="https://github.com/ngolodets/project2"
            target='_blank' 
            rel="noopener noreferrer">Github
          </a>
          <a className='projectlink' 
            href="https://afternoon-wave-90536.herokuapp.com/"
            target='_blank' 
            rel="noopener noreferrer">Live Demo
          </a>
        </div>
      </div>
      <div className='projectinfo'>
        <h5 className='flip' onMouseOver={() => displayDescription('description4')}>Memory Game</h5>
        <div id='description4'>
          <p className='p4'>The Memory Game allows the user to challenge themselves to see if they can remember where the matching cards are.</p>
          <p className='p4tech'>It was created using JavaScript, HTML and CSS.</p>
        </div>
        <img className='pics' src="./MemoryGame.png" alt="Application Screenshot"/><br />
        <div className='projectlinksection'>
          <a className='projectlink' 
            href="https://github.com/ngolodets/project1"
            target='_blank' 
            rel="noopener noreferrer">Github
          </a>
          <a className='projectlink' 
            href="https://ngolodets.github.io/project1/"
            target='_blank' 
            rel="noopener noreferrer">Live Demo
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Projects;