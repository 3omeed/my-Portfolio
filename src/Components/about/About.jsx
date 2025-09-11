import { useEffect } from "react";
import "./AboutStyle.css";
import cv from "../../assets/ABDELRAHMAN_EMAD_2025.pdf";
import HTML from "../../assets/work-photos/html-5 (1).png";
import Css from "../../assets/work-photos/css-3.png";
import JAVASCRIPT from "../../assets/work-photos/js.png";
import REACT from "../../assets/work-photos/react.png";

import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const saveFileHandler = () => {
    const aTag = document.createElement("a");
    const url = process.env.PUBLIC_URL + cv;
    aTag.href = url;
    aTag.download = cv;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  const services = [
    {
      icon: "📱",
      title: "Responsive Web Applications",
      description:
        "Building modern React apps with Tailwind CSS that work perfectly on all devices",
    },
    {
      icon: "🔗",
      title: "Headless CMS Integration",
      description:
        "Seamless integration with Sanity, Contentful, and other modern CMS solutions",
    },
    {
      icon: "⚡",
      title: "Performance & SEO Optimization",
      description:
        "Website speed optimization and SEO best practices for better rankings",
    },
    {
      icon: "✨",
      title: "Modern Animations & Interactions",
      description:
        "Engaging user experiences with smooth animations and micro-interactions",
    },
  ];

  const techStack = [
    { name: "HTML5", icon: HTML },
    { name: "CSS3", icon: Css },
    { name: "JavaScript", icon: JAVASCRIPT },
    { name: "React", icon: REACT },
  ];

  return (
    <div id="Services">
      <div className="services-container">
        <div className="services-header" data-aos="fade-up">
          <h1 className="services-title">My Services</h1>
          <p className="services-subtitle">
            Transforming ideas into exceptional digital experiences with modern
            web technologies
          </p>
        </div>

        <div
          className="tech-stack-section"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="tech-stack-title">Tech Stack</h3>
          <div className="tech-stack-grid">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-item"
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
              >
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 10}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <button
            className="cv-btn btn-primary"
            onClick={() => saveFileHandler(cv)}
          >
            Download CV
          </button>
          <p className="cta-text">
            Clean, maintainable code using Git & industry best practices
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
