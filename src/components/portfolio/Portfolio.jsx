import React from 'react';
import IMG1 from '../../assets/projectnour.jpg';
import IMG2 from '../../assets/codingame.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/travel_me.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'beonepi',
      img: IMG1,
      description:
        'Website for a communication and audiovisual production company.',
      technologies: 'HTML | CSS | JavaScript | Bootstrat',
      link: 'http://beonepi.cluster030.hosting.ovh.net/index.html',
      github: 'https://github.com/nour-derwich/audiovisuelle.git',
    },
    {
      id: 2,
      title: 'Quiz Game Dojo',
      img: IMG2,
      description:
        'Enabling apprentice developers to test their knowledge.',
      technologies: 'CSS | Bootstratp | ReactJs | MySQL | JAVA8 | SpringBoot | SQL | REST API.',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/nour-derwich/',
    },
    {
      id: 3,
      title: 'Travel Me',
      img: IMG4,
      description: 'User friendly Platform to review places visited',
      technologies: 'NodeJS | Express | MangoDB | ReactJs | REST API.',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/nour-derwich/',
    },
    {
      id: 4,
      title: 'Shelter',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/nour-derwich/',
    },
    {
      id: 5,
      title: 'Poffer',
      img: IMG5,
      description:
        'A web application that offers its users the ability to post offers and products with specific deadlines and conditions.',
      technologies: 'CSS | Bootstratp | ReactJs | MySQL | JAVA8 | SpringBoot | SQL | REST API.',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/nour-derwich/',
    },
    {
      id: 6,
      title: 'Actia Green',
      img: IMG6,
      description:
        'A GreenTech Donations Website',
      technologies: 'Python | Bootstrap | HTML | CSS |Flask | MySQL',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/nour-derwich/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
