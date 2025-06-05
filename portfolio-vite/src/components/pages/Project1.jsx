import React from 'react';
import ProjectPage from './ProjectPage';

const Project1 = () => {
  return (
    <ProjectPage 
      projectNumber="01"
      projectTitle="Petsome"
      projectSubtitle="Front-End Development"
      projectDescription="A modern e-commerce platform built with React and Node.js. Features include pet listings, user authentication and an admin dashboard for inventory management."
      technologies={["React", "Node.js", "CSS Modules"]}
      projectImage="../../assets/project1.png"
      liveLink="https://siljewpetsome.netlify.app/"
      githubLink="https://github.com/your-username/project1"
    />
  );
};

export default Project1;