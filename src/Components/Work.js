import React from 'react';
import './work.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import kasper from '../assets/work-photos/kasper-Template.jpeg';
import Leon from '../assets/work-photos/Leon-Template.jpeg';
import web from '../assets/work-photos/technical-doc.jpeg';
import FCCPortfolio from '../assets/work-photos/portfolio.jpeg';
import TodoList from '../assets/work-photos/todo-list.jpeg';
import BlueShell from '../assets/work-photos/blueshell.png';

function Work() {
  const work = [
    {
      name: 'portfolio',
      date: 'March 2023',
      link: 'https://3omeed.github.io/FCC-portfolio/',
      photo: FCCPortfolio,
      position: 0,
    },
    {
      name: 'Documentary',
      date: 'july 2023',
      link: 'https://3omeed.github.io/technical-documentaion/',
      photo: web,
      position: 1,
    },
    {
      name: 'BlueShell | Premuim Gym Equipment',
      date: 'October 2024',
      link: 'https://gym-equipment-client.vercel.app/',
      photo: BlueShell,
      position: 3,
    },
    {
      name: 'Kasper Template',
      date: 'December 2022',
      link: 'https://3omeed.github.io/template-two/',
      photo: kasper,
      position: 2,
    },
    {
      name: 'Leon',
      date: 'June 2022',
      link: 'https://3omeed.github.io/template-1/',
      photo: Leon,
      position: 5,
    },
    {
      name: 'To-Do-list',
      date: 'June 2022',
      link: 'https://gorgeous-croquembouche-952600.netlify.app/',
      photo: TodoList,
      position: 4,
    },
  ];

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    // autoplaySpeed: 1,
    speed: 500,
    cssEase: 'linear',
    // pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="work " id="Work">
      <h1 className="Heading">My Work</h1>
      <div className="work-container">
        <div className="work-pallete">
          <Slider {...settings}>
            {work.map((project, index) => {
              return (
                <div className="project-handler" key={index}>
                  <a
                    draggable={false}
                    target="blank"
                    className="project"
                    rel="stylesheet"
                    href={project.link}
                    alt={'project-link'}
                  >
                    <img src={project.photo} alt="project" draggable={false} />
                    <div className="overlay-project">
                      <p className="date">{project.date}</p>
                      <p className="p-name">{project.name}</p>
                    </div>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Work;
