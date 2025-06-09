import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectPage.module.css';

const ProjectPage = ({ 
  projectNumber = "01", 
  projectTitle = "Project Title",
  projectSubtitle = "Web Development",
  projectDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  technologies = ["React", "CSS", "JavaScript"],
  projectImage = "/path/to/image.jpg",
  liveLink = "#",
  githubLink = "#",
  improvements
}) => {
  
  // Debug function to test clicks
  const handleLinkClick = (linkType, url) => {
    console.log(`${linkType} clicked:`, url);
    if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={styles.projectPage}>
      {/* Project Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.projectNumber}>{projectNumber}</div>
          <h1 className={styles.projectTitle}>{projectTitle}</h1>
          <p className={styles.projectSubtitle}>{projectSubtitle}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className={styles.projectDetails}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            
            {/* Project Image */}
            <div className={styles.imageSection}>
              <div className={styles.projectImage}>
                <img src={projectImage} alt={projectTitle} />
              </div>
            </div>

            {/* Project Info */}
            <div className={styles.infoSection}>
              <div className={styles.description}>
                <h2>About This Project</h2>
                <p>{projectDescription}</p>
              </div>

              <div className={styles.technologies}>
                <h3>Technologies Used</h3>
                <div className={styles.techList}>
                  {technologies.map((tech, index) => (
                    <span key={index} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>

              {improvements && (
                <div className={styles.improvements}>
                  <h3>Future Improvements</h3>
                  <p>{improvements}</p>
                </div>
              )}

              {/* Updated project links with better click handling */}
              <div className={styles.projectLinks}>
                <a 
                  href={liveLink} 
                  className={`${styles.projectLink} ${styles.liveLink}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    console.log('Live link clicked:', liveLink);
                    // Don't prevent default, let the link work normally
                  }}
                  style={{
                    // Debug styles to ensure visibility and clickability
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                  }}
                >
                  View Live
                </a>
                <a 
                  href={githubLink} 
                  className={`${styles.projectLink} ${styles.codeLink}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    console.log('Code link clicked:', githubLink);
                  }}
                  style={{
                    // Debug styles to ensure visibility and clickability
                    position: 'relative',
                    zIndex: 10,
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                  }}
                >
                  View Code
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className={styles.projectNav}>
        <div className={styles.container}>
          <div className={styles.navGrid}>
            <Link 
              to="/project1" 
              className={styles.otherProject}
              onClick={(e) => {
                console.log('Project 1 navigation clicked');
              }}
              style={{
                // Debug styles
                position: 'relative',
                zIndex: 10,
                pointerEvents: 'auto',
                cursor: 'pointer'
              }}
            >
              <span className={styles.otherNumber}>01</span>
              <span className={styles.otherTitle}>Petsome</span>
            </Link>
            <Link 
              to="/project2" 
              className={styles.otherProject}
              onClick={(e) => {
                console.log('Project 2 navigation clicked');
              }}
              style={{
                // Debug styles
                position: 'relative',
                zIndex: 10,
                pointerEvents: 'auto',
                cursor: 'pointer'
              }}
            >
              <span className={styles.otherNumber}>02</span>
              <span className={styles.otherTitle}>Bunchies</span>
            </Link>
            <Link 
              to="/project3" 
              className={styles.otherProject}
              onClick={(e) => {
                console.log('Project 3 navigation clicked');
              }}
              style={{
                // Debug styles
                position: 'relative',
                zIndex: 10,
                pointerEvents: 'auto',
                cursor: 'pointer'
              }}
            >
              <span className={styles.otherNumber}>03</span>
              <span className={styles.otherTitle}>Holidaze</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;