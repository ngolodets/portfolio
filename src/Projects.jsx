import React from 'react';

function Projects() {
  return (
    <>
    <h3>Recent Projects</h3>
    <div className='projects'>
      <div className='projectinfo'>
        <h5>The Book App</h5>
        <img className='pics' src="./BookApp.png" alt=""/><br />
        <a className='projectlink' href="https://github.com/ngolodets/project4">Github</a>
        <a className='projectlink' href="https://lit-reef-15866.herokuapp.com/">Live Demo</a>
      </div>
      <div className='projectinfo'>
        <h5>The Cocktail App</h5>
        <img className='pics' src="./CocktailApp1.png" alt=""/><br />
        <a className='projectlink' href="https://github.com/ngolodets/project4">Github</a>
        <a className='projectlink' href="https://desolate-coast-19668.herokuapp.com/">Live Demo</a>
      </div>
      <div className='projectinfo'>
        <h5>National Park Trip Planner</h5>
        <img className='pics' src="./NationalParks.png" alt=""/><br />
        <a className='projectlink' href="https://github.com/ngolodets/project2">Github</a>
        <a className='projectlink' href="https://afternoon-wave-90536.herokuapp.com/">Live Demo</a>
      </div>
      <div className='projectinfo'>
        <h5>Memory Game</h5>
        <img className='pics' src="./MemoryGame.png" alt=""/><br />
        <a className='projectlink' href="https://github.com/ngolodets/project1">Github</a>
        <a className='projectlink' href="https://ngolodets.github.io/project1/">Live Demo</a>
      </div>
    </div>
    </>
  )
}

export default Projects;