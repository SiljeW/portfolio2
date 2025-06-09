import React from 'react';
import ProjectPage from './ProjectPage';

const Project2 = () => {
  return (
    <ProjectPage 
      projectNumber="02"
      projectTitle="Bunchies"
      projectSubtitle="React Application"
      projectDescription="A webshop containing all sorts of things, with a functional shopping cart and checkout page.
      The web application was build with React and Styled modules, and fetched data objects from Noroff API"
      technologies={["React", "Styled Components", "HTML"]}
      projectImage="/bunchies2.png"
      liveLink="https://bunchiesjsfw.netlify.app/"
      githubLink="https://github.com/SiljeW/jsfw/blob/main/my-app/README.md"
    />
  );
};

export default Project2;