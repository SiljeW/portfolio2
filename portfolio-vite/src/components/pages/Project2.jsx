import React from 'react';
import ProjectPage from './ProjectPage';

const Project2 = () => {
  return (
    <ProjectPage 
      projectNumber="02"
      projectTitle="Bunchies"
      projectSubtitle="React Application"
      projectDescription="A webshop containing all sorts of things, with a functional shopping cart and checkout page"
      technologies={["React", "Styled Components", "HTML"]}
      projectImage="/images/project2.jpg" // Update with your actual image path
      liveLink="https://bunchiesjsfw.netlify.app/"
      githubLink="https://github.com/your-username/project2"
    />
  );
};

export default Project2;