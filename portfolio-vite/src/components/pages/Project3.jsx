import React from 'react';
import ProjectPage from './ProjectPage';

const Project3 = () => {
  return (
    <ProjectPage 
      projectNumber="03"
      projectTitle="Holidaze"
      projectSubtitle="React application"
      projectDescription="A responsive web application for hosting venues that are bookable by user. Contains admin and user authentication"
      technologies={["React", "REST API", "HTML&CSS", "Figma"]}
      projectImage="/holidaze2.png" // Update with your actual image path
      liveLink="https://swholidaze.netlify.app/"
      githubLink="https://github.com/SiljeW/silje-pe2"
    />
  );
};

export default Project3;