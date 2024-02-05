import React from 'react';
import './LandingStyle.css';
// import photo from '../imgs/jez-timms-HauxSOFvh6k-unsplash.jpg'
// import photo from '../imgs/mae-mu-vbAEHCrvXZ0-unsplash.jpg';

function Landing() {
  return (
    <div className="landing box-section" id='Landing'>
      
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
        <button className='my-Work-btn btn'>My Work</button>
      </div>
      <div className="photo-handler">
        <img src='../imgs/design_name_Abdelrahman_Emad.jpg' alt='personal-pic' />
      </div>
    </div>
  );
}

export default Landing;
