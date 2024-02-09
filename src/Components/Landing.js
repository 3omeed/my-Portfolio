import React from 'react';
import './LandingStyle.css';
import photo from '../assets/work-photos/WhatsApp Image 2023-03-24 at 13.10.24.jpg';

function Landing() {
  return (
    <div className="landing box-section" id="Landing">
      <div className="container-landing">
        <div className="Text">
          <p className="name">I'm Abdelrahman Emad</p>
          <p className="job">Front-end developer</p>
          <p className="title">
            Passionate front-end developer with a relentless pursuit of
            knowledge. Eager to create seamless user experiences, I embrace
            challenges to continually refine and expand my skills.
          </p>
        </div>
        <a href="#Work" className="my-Work-btn btn">
          My Work
        </a>
      </div>
      <div className="photo-handler">
        <img src={photo} alt="personal-pic" />
      </div>
    </div>
  );
}

export default Landing;
