import React, { useEffect } from 'react';
import './AboutStyle.css';
import cv from '../assets/Abdelrahman Emad_CV 2024.pdf';
import flag from '../assets/work-photos/egypt-flag.svg';
import HTML from '../assets/work-photos/html-5 (1).png';
import Css from '../assets/work-photos/css-3.png';
import JAVASCRIPT from '../assets/work-photos/js.png';
import REACT from '../assets/work-photos/react.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const saveFileHandler = () => {
    const aTag = document.createElement('a');
    const url = process.env.PUBLIC_URL + cv;
    aTag.href = url;
    aTag.download = cv;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  return (
    <div id="About" >
      <div className="box" >
        <div className="container">
          <div className="Heading">About Me</div>
          <div className="About-me-content">
            <div className="section" data-aos="fade-left">
              <p>
                <span className="boldy" >
                  Hello! My name is Abdelrahman From Egypt
                  <img className="flag" src={flag} alt="Egypt" />
                </span>
                At 23, I'm a dedicated React developer with a fervor for
                crafting creative and beautiful web pages. Eager to learn and
                evolve, I thrive on turning ideas into captivating digital
                experiences. I have learned HTML, CSS, JavaScript and react.js
                and build alot of projects with them, hope yours is next
              </p>
              <div className="stack" >
                Tech Stack |{' '}
                <span className="tech-icons">
                  {' '}
                  <i className="fa-brands fa-html5">
                    <img src={HTML} alt="" className="icon" />
                  </i>
                  <i className="fa-brands fa-css3-alt">
                    <img src={Css} alt="" className="icon" />
                  </i>
                  <i className="fa-brands fa-js">
                    <img src={JAVASCRIPT} alt="" className="icon" />
                  </i>
                  <i className="fa-brands fa-react">
                    <img src={REACT} alt="" className="icon" />
                  </i>
                </span>
              </div>
            </div>
          </div>
          <div className="cv-btn btn" onClick={() => saveFileHandler(cv)} data-aos="fade-up">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
