import React, { useState } from 'react';
import   './HeaderStyle.css';
import logo from '../assets/work-photos/design_name_Abdelrahman_Emad.jpg';
import "../assets/fontawesome-free-6.5.1-web/fontawesome-free-6.5.1-web/css/all.css"

function Header() {


  const [mainColor, setMainColor] = useState("#d6d5d2")

  const colorChanger = () => {
   let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
   setMainColor(color);
    }
  return (
    
    <header>
      
      <div className="container" style={{'backgroundColor' : mainColor}}>
      <div className='package'>

        <div className="info">

          <img src={logo} alt="logo" />
          <p>
            Abdelrahman Emad <i className="gg-code-slash"></i>
          </p>
        </div>
        <button className= 'btn small' onClick={colorChanger}> change color</button>
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
