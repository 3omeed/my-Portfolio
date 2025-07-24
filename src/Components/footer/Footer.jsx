import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer({ isNightMode }) {
  return (
    <div className={`footer ${isNightMode ? "footer--night" : ""}`}>
      <h4 className="bold">its a pleasure !</h4>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/abdelrahman-emad-57bb10237/"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/3omeed"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="GitHub Profile"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="mailto:abdelrahmanemad2712@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-link"
          aria-label="Email Contact"
        >
          <FaEnvelope className="icon" />
        </a>
      </div>
      <h6 className="copyright">all copyrights reserved to Abdelrahman Emad</h6>
    </div>
  );
}

export default Footer;