import React from 'react';
import './footer.css';
import linkedIn from '../assets/work-photos/linkedin.png';
import github from '../assets/work-photos/github.png';
import mail from '../assets/work-photos/mail.png';

function Footer(isNightMode) {
  return (
    <div className="footer">
      <div className="personal-data">
        {/* <div>
          <p>
            <span className="bold">Address : </span> Cairo - Egypt
          </p>
        </div> */}
        {/* <div>
          <p>
            <span className="bold">Email : </span>
            <a className="my-mail" href="mailto:abdelrahmanemad2712@gmail.com">
              abdelrahmanemad2712@gmail.com
            </a>
          </p>
        </div> */}
        {/* <div className="phone">
          <p>
            <span className="bold">phone : </span> 01097781054
          </p>
        </div> */}
      </div>
      <h4 className="bold">its a pleasure !</h4>

      <div className="icons">
        <a
          href="https://www.linkedin.com/in/abdelrahman-emad-57bb10237/"
          target="_blank"
          rel="noreferrer"
          className={`${isNightMode ? 'night-mode' : ''}`}
        >
          <i className="gg-linkedin">
            {' '}
            <img className="icon" src={linkedIn} alt="" />{' '}
          </i>
        </a>
        <a href="https://github.com/3omeed" target="_blank" rel="noreferrer">
          <i className="gg-github">
            <img className="icon" src={github} alt="" />
          </i>
        </a>
        <a
          href="mailto:abdelrahmanemad2712@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="gg-mail">
            <img className="icon" src={mail} alt="" />
          </i>
        </a>
      </div>
      <h6 className="copyright">all copyrights reserved to Abdelrahman Emad</h6>
    </div>
  );
}

export default Footer;
