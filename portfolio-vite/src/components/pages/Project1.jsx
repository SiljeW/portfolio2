import React from 'react';
import ProjectPage from './ProjectPage';

const Project1 = () => {
  return (
    <ProjectPage 
      projectNumber="01"
      projectTitle="Petsome"
      projectSubtitle="Front-End Development"
      projectDescription="A modern web application listing pets for adoption. Built with React, Styled Modules and Node.js. Features include pet listings, user authentication and an admin dashboard for inventory management.
      Functions and features are fetched with Noroff API."
      technologies={["React", "Node.js", "CSS Modules"]}
      projectImage="/petsome.png"
      liveLink="https://siljewpetsome.netlify.app/"
      githubLink="https://github.com/SiljeW/siljesp2/blob/main/README.md"
    />
  );
};

export default Project1;