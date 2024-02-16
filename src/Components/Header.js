import React, { useState } from 'react';
import './HeaderStyle.css';
import logo from '../assets/work-photos/design_name_Abdelrahman_Emad.jpg';

function Header(isNightMode) {
  return (
    <header>
      <div className="container">
        <div className="package">
          <div className="info">
            <img src={logo} alt="logo" />
            <p>
              Abdelrahman Emad .
               <i className="gg-code-slash"> </i>
            </p>
          </div>
        </div>

        <div className="icons">
          <a
            href="https://www.linkedin.com/in/abdelrahman-emad-57bb10237/"
            target="_blank"
            rel="noreferrer"
            className={`${isNightMode ? 'night-mode' : ''}`}
          >
            <i className="gg-linkedin"></i>
          </a>
          <a href="https://github.com/3omeed" target="_blank" rel="noreferrer">
            <i className="gg-github"></i>
          </a>
          <a
            href="mailto:abdelrahmanemad2712@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="gg-mail"></i>
          </a>
        </div>

        <ul className="nav">
          <li>
            <a className={`Landing `} href="#Landing">
              Landing
            </a>
          </li>
          <li>
            <a
              className={`About ${!isNightMode ? 'night-mode' : ''}`}
              href="#About"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`work ${!isNightMode ? 'night-mode' : ''}`}
              href="#Work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              className={`contact ${!isNightMode ? 'night-mode' : ''}`}
              href="#Contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
