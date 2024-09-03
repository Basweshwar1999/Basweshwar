import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Style.css';

function Projects({ isActive }) {
  // Example project data, replace this with your actual project data
  const projectList = [
    {
      name: 'Blood Bank',
      description: 'The collage project on blood bank app using android studio. which has the login access of the admin and the patien to donate or request and fulfill the need of blood.',
      link: 'https://github.com/Basweshwar1999/bloodBank',
    },
    {
      name: 'Iventory',
      description: 'An exepense manangement project in which employee can manage its expenses thorugh this web portal ',
      link: 'https://github.com/Basweshwar1999/inventry',
    },
    {
      name: 'Flight Booking Mobile App ',
      description: 'Mobile App for Booking  Filght in which the no of flight seats available and booked seats status will with the flight timing and number ',
      link: 'https://github.com/Basweshwar1999/BookMyFlight',
    },
    {
      name: 'Project Two',
      description: 'This is a description of project two.',
      link: 'https://github.com/Basweshwar1999/project-two',
    },
    // Add more projects as needed
  ];

  return (
    <div className="home-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link to={project.link} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
