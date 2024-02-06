import React from 'react';
import ProfilePhoto from './imgs/pf.jpg';
import './AboutStyle.css';
import cv from '../abdelrahman emad cv.pdf';
import fileSaver from 'file-saver'

function About() {
  const saveFileHandler = () => {
    const aTag = document.createElement("a");
    const url = process.env.PUBLIC_URL + cv;
    aTag.href = url;
    aTag.download = cv;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag)
  };
  return (
    <div id="About">
      <div className="box">
        <div className="container">
          <div className="Heading">About Me</div>
          <div className="About-me-content">
            <div className="section">
              <p>
                <span className="boldy">Hello! My name is Abdelrahman</span>
                {/* a front-end developer who is passionate about creating
                beautiful and functional websites. I have experience with HTML,
                CSS, JavaScript, and React.js */}
                At 23, I'm a dedicated React developer with a fervor for
                crafting creative and beautiful web pages. Eager to learn and
                evolve, I thrive on turning ideas into captivating digital
                experiences. I have learned HTML, CSS, JavaScript and react.js
                and build alot of projects with them, hope yours is next
              </p>
            </div>
            <div className="my-photo section">
              <img src={ProfilePhoto} alt="profile"></img>
            </div>
          </div>
          <div className="cv-btn btn" onClick={() => saveFileHandler(cv)}>
            Download my CV
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
