import React from 'react';
import ProjectPage from './ProjectPage';

const Project3 = () => {
  return (
    <ProjectPage 
      projectNumber="03"
      projectTitle="Holidaze"
      projectSubtitle="React application"
      projectDescription="A responsive web application for hosting venues that are viewable for all and bookable for registered users. 
      Contains admin and user authentication, whereas admin access allows creating, editing and deleting venues."
      technologies={["React", "REST API", "HTML&CSS", "Figma"]}
      projectImage="/holidaze2.png" // Update with your actual image path
      liveLink="https://swholidaze.netlify.app/"
      githubLink="https://github.com/SiljeW/silje-pe2/blob/main/pe-app/README.md"
      improvements="Looking back at this project, there are several key areas I would focus on for improvement. A major priority would be bringing all component styles into alignment with the established style guide. Currently, there are inconsistencies in color usage, button styles, and layout patterns throughout the application that detract from the overall user experience. Standardizing these elements would create a more polished and cohesive brand presence."
    />
  );
};

export default Project3;