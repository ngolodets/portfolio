import React from 'react';

function AboutMe() {
  return (
    <div style={{textAlign: 'left', }}
      id='about'>
      <h3 style={{fontFamily: "'Anton', sans-serif", 
                  letterSpacing: '1.4px'}}>About Me:
      </h3>
      <p>I am a <span>full stack developer</span> based in the greater <span>Seattle, WA</span> area who enjoys turning problems into opportunities by finding creative and effective solutions. 
        My previous experience as a full-time process engineer demonstrates the range of my capabilities: 
        from being able to adapt and adjust to finding efficient, concise solutions for challenging situations.
      </p>
      <p>
        Hard working, resourceful, analytical and detail-driven, I have experience working with cross-functional teams and understand the importance of sticking to deadlines to produce deliverables while working under pressure.
        With a background in chemical engineering, I know how to manage multiple projects with competing deadlines to produce timely and effective deliverables that meet and exceed expectations.
      </p>
      <p>Please feel free to email me at <a id='email' href="mailto:nina.golodets@gmail.com">nina.golodets@gmail.com</a></p>
    </div>
  )
}

export default AboutMe;