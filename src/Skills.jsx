import React from 'react';

function Skills() {
  return (
    <div className='skills' style={{textAlign: 'left'}}>
      <h4 style={{fontFamily: "'Anton', sans-serif", 
                  letterSpacing: '1.4px'}}>Languages
      </h4>
      <p>JavaScript | HTML/CSS | Python | TypeScript</p>
      <h4 style={{fontFamily: "'Anton', sans-serif", 
                  letterSpacing: '1.4px'}}>Libraries
      </h4>
      <p>Axios | EJS | Bcrypt | Passport</p>
      <h4 style={{fontFamily: "'Anton', sans-serif", 
                  letterSpacing: '1.4px'}}>Frameworks
      </h4>
      <p>React | Express | Node</p>
      <h4 style={{fontFamily: "'Anton', sans-serif", 
                  letterSpacing: '1.4px'}}>Databases
      </h4>
      <p>PostgreSQL | Sequelize | MongoDB | Mongoose</p>
      <h4 style={{fontFamily: "'Anton', sans-serif", 
                  letterSpacing: '1.4px'}}>Other
      </h4>
      <p>RESTful Routing | JSON</p>
    </div>
  )
}

export default Skills;