import React from 'react';
import ProfilePhoto from '../imgs/photo-of-a-21-years-old-white-egyptian-guy-with-a-pair-of-black-glasses-and-brown-hair.jpg';
import './AboutStyle.css';
import { saveAs } from 'file-saver';

function About() {
  const saveFile = () => {
    saveAs(process.env.PUBLIC_URL + '../abdelrahman emad cv.pdf', 'MyCV.pdf');
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
          <div className="cv-btn btn" onClick={saveFile}>
            Download my CV
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
