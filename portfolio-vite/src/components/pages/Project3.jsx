import React from 'react';
import ProjectPage from './ProjectPage';

const Project3 = () => {
  return (
    <ProjectPage 
      projectNumber="03"
      projectTitle="Weather Dashboard"
      projectSubtitle="API Integration"
      projectDescription="A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities. Features include geolocation, search functionality, and beautiful data visualizations using Chart.js."
      technologies={["React", "Chart.js", "Weather API", "Geolocation API"]}
      projectImage="/images/project3.jpg" // Update with your actual image path
      liveLink="https://swholidaze.netlify.app/"
      githubLink="https://github.com/your-username/project3"
    />
  );
};

export default Project3;