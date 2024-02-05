import React from 'react';
import './HeaderStyle.css';
import logo from '../imgs/design_name_Abdelrahman_Emad.jpg';
import 'https://kit.fontawesome.com/889580adc0.js';



function Header() {
  

  return (
    <header>
      <div className="container">
        <div className="info">
          <img src={logo} alt="logo" />
          <p>
            Abdelrahman Emad <i className="gg-code-slash"></i>
          </p>
        </div>

        <div className="icons">
          <a
            href="https://www.facebook.com/abdo.emad.1023611"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook" />
          </a>
          <a
            href="https://www.instagram.com/abdeelrahman_/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrahman-emad-57bb10237/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/3omeed" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="mailto:abdelrahmanemad2712@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <ul className="nav">
          <a className="Landing" href="#Landing">
            Landing
          </a>
          <a className="Landing" href="#About">
            About
          </a>
          <a className="work" href="#Work">
            Work
          </a>
          <a className="contact" href="#Contact">
            Contact
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
