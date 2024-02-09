import React from 'react';
import './AboutStyle.css';
import cv from '../assets/abdelrahman emad cv.pdf';
import flag from "../assets/work-photos/egypt-flag.svg"

function About() {
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
    <div id="About">
      <div className="box">
        <div className="container">
          <div className="Heading">About Me</div>
          <div className="About-me-content">
            <div className="section">
              <p>
                <span className="boldy">
                  Hello! My name is Abdelrahman From Egypt <img className='flag'  src={flag} alt='Egypt'/>
                  
                  {/* <img src="../assets/work-photos/egypt-flag.jpg" alt="Egypt" /> */}
                </span>
                At 23, I'm a dedicated React developer with a fervor for
                crafting creative and beautiful web pages. Eager to learn and
                evolve, I thrive on turning ideas into captivating digital
                experiences. I have learned HTML, CSS, JavaScript and react.js
                and build alot of projects with them, hope yours is next
              </p>
              <div className="stack">
                Tech Stack |{' '}
                <span className="tech-icons">
                  {' '}
                  <i class="fa-brands fa-html5"></i>
                  <i class="fa-brands fa-css3-alt"></i>
                  <i class="fa-brands fa-js"></i>
                  <i class="fa-brands fa-react"></i>
                </span>
              </div>
            </div>
            {/* <div className="my-photo section"></div> */}
          </div>
          <div className="cv-btn btn" onClick={() => saveFileHandler(cv)}>
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
