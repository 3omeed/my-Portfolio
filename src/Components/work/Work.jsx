import { useEffect } from "react";
import "./work.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

import kasper from "../../assets/work-photos/kasper-Template.webp";
import Leon from "../../assets/work-photos/Leon-Template.webp";
import web from "../../assets/work-photos/technical-doc.webp";
import FCCPortfolio from "../../assets/work-photos/portfolio.webp";
import Meterika from "../../assets/work-photos/meterika-photo.webp";
import eCommerce from "../../assets/work-photos/e-commerce.png";

import Arrow from "./Arrow";

function Work() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const work = [
    {
      name: "Meterika | MEP Services and heating",
      date: "Jun 24",
      link: "https://www.meterika.com/",
      photo: Meterika,
      tech: "React, CSS",
      description:
        "Portfolio for MEP services and heating company with modern design",
      featured: true,
    },
    {
      name: "E-commerce Website",
      date: "Oct 24",
      link: "https://e-commerce-omnifender.vercel.app/",
      photo: eCommerce,
      tech: "Nextjs, TypeScript , Modular scss, Sanity",
      description:
        "Building a full-featured e-commerce website with product listings, shopping cart, and secure checkout.",
      featured: true,
      inProgress: true,
    },
    {
      name: "Portfolio Website",
      date: "Mar 23",
      link: "https://3omeed.github.io/FCC-portfolio/",
      photo: FCCPortfolio,
      tech: "HTML, CSS, JS",
      description:
        "Clean and responsive portfolio one page website as a template",
    },
    {
      name: "Technical Documentation",
      date: "Jul 23",
      link: "https://3omeed.github.io/technical-documentaion/",
      photo: web,
      tech: "HTML, CSS, JS",
      description:
        "Interactive technical documentation page built for practicing",
    },
    {
      name: "Kasper Template",
      date: "Dec 22",
      link: "https://3omeed.github.io/template-two/",
      photo: kasper,
      tech: "HTML, CSS, JS",
      description: "Modern business template design",
    },
    {
      name: "Leon Template",
      date: "Jun 22",
      link: "https://3omeed.github.io/template-1/",
      photo: Leon,
      tech: "HTML, CSS, JS",
      description: "Creative agency landing page template",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    centerMode: true,
    adaptiveHeight: true,
    nextArrow: <Arrow direction="next" className="custom-next-arrow" />,
    prevArrow: <Arrow direction="prev" className="custom-prev-arrow" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="work gradient-bg" id="Work">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <h2 className="title gradient-text">My Work</h2>
          <p className="subtitle">
            A showcase of projects I've built with passion.
          </p>
        </div>

        <div className="work-slider" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {work.map((project, index) => (
              <div className="project-slide" key={index}>
                <div className="project-card card">
                  <div className="project-image">
                    <img
                      src={project.photo}
                      alt={project.name}
                      loading="lazy"
                    />
                    <div className="project-overlay">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        aria-label={`View ${project.name} project`}
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-name">{project.name}</h3>
                      <div className="project-meta">
                        <span className="project-date">{project.date}</span>
                        <span className="project-status">
                          {project.inProgress ? "In Progress" : "Completed"}
                        </span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.tech.split(", ").map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Work;
