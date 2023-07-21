import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/IMG-20221107-WA0006.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>As a Full-Stack Developer, I have gained strong expertise in developing websites and applications,
            and I am proficient in using multiple programming languages including Java8,Python, PHP, and NodeJs. 
            I also have in-depth knowledge of relational databases such as MySQL and NoSQL..
            When it comes to frameworks, I have solid experience using frameworks such as Spring Boot,ReactJs and Flask to develop robust and scalable web applications. Additionally,
            I have worked on a variety of projects ranging from creating corporate websites to implementing complex web solutions. I am also skilled in user interface design, web service development,
             implementation of authentication and authorization systems, as well as maintenance and enhancement of existing websites.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro