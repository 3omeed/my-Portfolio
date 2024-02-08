import React from 'react';
import './HeaderStyle.css';
// import logo from '../../public/assets/imgs/design_name_Abdelrahman_Emad.jpg';
import logo from '../design_name_Abdelrahman_Emad.jpg';
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
          <li>
            <a className="Landing" href="#Landing">
              Landing
            </a>
          </li>
          <li>
            <a className="Landing" href="#About">
              About
            </a>
          </li>
          <li>
            <a className="work" href="#Work">
              Work
            </a>
          </li>
          <li>
            <a className="contact" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
