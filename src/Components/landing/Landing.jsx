import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import photo from "../../assets/work-photos/Profile_Photo_NEW.jpg";
// import photo from "../../assets/images/5776080373275544281.jpg";


import "./LandingStyle.css";

function Landing(isNightMode) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="landing" id="Landing">
      <div className="container-landing">
        <div className="Text" data-aos="fade-right">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Abdelrahman Emad</h1>
          <h2 className="job">Front-end Developer</h2>
          <p className="desc">
            Passionate front-end developer with a relentless pursuit of
            knowledge. Eager to create seamless user experiences, I embrace
            challenges to continually refine and expand my skills.
          </p>
          <div className="cta-buttons">
            <a href="#Work" className="btn-primary">
              View My Work
            </a>
            <a href="#Contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="photo-handler" data-aos="fade-left">
          <div className="photo-wrapper">
            <div className="photo-inner">
              <img src={photo} alt="Abdelrahman Emad - Front-end Developer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
