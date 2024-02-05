import React from 'react';
import './work.css';

function Work() {
  const work = [
    {
      name: 'To-Do list',
      date: 'March 2023',
      link: 'https://3omeed.github.io/To-Do-List',
      photo: './work-photos/web.jpeg',
    },
    {
      name: 'TicTacToe',
      date: 'july 2023',
      link: 'https://vocal-blini-c2539a.netlify.app/',
      photo: './work-photos/kasper-Template.jpeg',
    },
    {
      name: 'Kasper Template',
      date: 'December 2022',
      link: 'https://3omeed.github.io/template-two/',
      photo: './work-photos/kasper-Template.jpeg',
    },
    {
      name: 'Leon',
      date: 'June 2022',
      link: 'https://3omeed.github.io/template-1/',
      photo: './work-photos/Leon-Template.jpeg',
    },
  ];
  return (
    <div className="work box-section" id="Work">
      <h2 className="Heading">My Work</h2>
      <div className="work-container">
        <button className="back btn">{'<'}</button>

        <div className="work-pallete">
          {work.map((project, index) => {
            return (
              <a
                className="project"
                rel="stylesheet"
                href={project.link}
                alt={'project-link'}
              >
                <img src={project.photo} alt="project" />
                <div className="overlay-project">
                  <p>{project.name}</p>
                  <p>{project.date}</p>
                </div>
              </a>
            );
          })}
        </div>

        <button className="forward btn">{'>'}</button>
      </div>
    </div>
  );
}

export default Work;
