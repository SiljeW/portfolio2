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
      improvements="I have a tendency to spend a lot of time working on the design file, as this is where my detail oriented mind is exaggerating.
      I’m still not comfortable with tailwindcss after working with css stylesheets for a long time. It requires more effort for the tailwind styles to be remembered in html, and to feel like I have control over the code structure.
      Vite is not my favorite, and it’s creating a lot of confusion with the folder structure. It can work perfectly in my localhost, and when deploying to netlify, it builds quite differently.
      Looking back at this project, I would improve the responsive design for mobile devices, add more comprehensive error handling for API calls, and implement a more robust search and filtering system."
    />
  );
};

export default Project1;