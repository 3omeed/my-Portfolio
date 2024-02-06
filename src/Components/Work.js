import React from 'react';
import './work.css';
import kasper from './work-photos/kasper-Template.jpeg';
import Leon from './work-photos/Leon-Template.jpeg';
import TicTacToe from './work-photos/technical-doc.jpeg';
import Todo from './work-photos/portfolio.jpeg';
import TodoList from './work-photos/mobile-screenshot.jpeg';
import web from './work-photos/web.jpeg';

function Work() {
  const work = [
    {
      name: 'portfolio',
      date: 'March 2023',
      link: 'https://3omeed.github.io/FCC-portfolio/',
      photo: Todo,
    },
    {
      name: 'Documentary',
      date: 'july 2023',
      link: 'https://3omeed.github.io/technical-documentaion/',
      photo: TicTacToe,
    },
    {
      name: 'Kasper Template',
      date: 'December 2022',
      link: 'https://3omeed.github.io/template-two/',
      photo: kasper,
    },
    {
      name: 'Leon',
      date: 'June 2022',
      link: 'https://3omeed.github.io/template-1/',
      photo: Leon,
    },
    // {
    //   name: 'To-Do-list',
    //   date: 'June 2022',
    //   link: 'https://3omeed.github.io/template-1/',
    //   photo: TodoList,
    // },
    // {
    //   name: 'Leon',
    //   date: 'June 2022',
    //   link: 'https://3omeed.github.io/template-1/',
    //   photo: web,
    // },
  ];
  return (
    <div className="work box-section" id="Work">
      <h2 className="Heading">My Work</h2>
      <div className="work-container">
        <button className="back">{'<'}</button>

        <div className="work-pallete">
          {work.map((project, index) => {
            return (
              // <div className='project-handler' key={index}>
                <a
                target='blank'
                  className="project"
                  rel="stylesheet"
                  href={project.link}
                  alt={'project-link'}
                >
                  <img src={project.photo} alt="project" />
                  <div className="overlay-project">
                    <p className="date">{project.date}</p>
                    <p className="p-name">{project.name}</p>
                  </div>
                </a>
              // </div> 
            );
          })}
        </div>

        <button className="forward">{'>'}</button>
      </div>
    </div>
  );
}

export default Work;
