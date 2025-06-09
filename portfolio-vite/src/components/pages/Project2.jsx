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
      improvements="Future improvements for this project would focus on redesigning the user interface with a more contemporary aesthetic, improved accessibility features, and better mobile responsiveness. The checkout system requires a complete overhaul to include secure payment processing, order confirmation emails, inventory management integration, and comprehensive error handling. Implementation should follow test-driven development practices with automated testing for all critical user paths."
    />
  );
};

export default Project2;