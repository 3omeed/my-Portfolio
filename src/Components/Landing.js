import './LandingStyle.css';
// import photo from '../assets/work-photos/IMG_02.jpg';
import photo from '../assets/work-photos/Profile_Photo_NEW.jpg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Landing(isNightMode) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="landing box-section" id="Landing">
      <div className="container-landing">
        <div
          className="Text" data-aos="fade-right">
          <h1 className="name">I'm Abdelrahman Emad</h1>
          <h2 className="job">Front-end developer</h2>
          <p className="title">
            Passionate front-end developer with a relentless pursuit of
            knowledge. Eager to create seamless user experiences, I embrace
            challenges to continually refine and expand my skills.
          </p>
        </div>
        <a href="#Work" className={`my-Work-btn btn`}>
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
