import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const mainBackground = document.getElementById('main-background');
    if (mainBackground) {
      if (hoveredProject) {
        mainBackground.style.opacity = '0.2';
        mainBackground.style.filter = 'blur(2px)';
      } else {
        mainBackground.style.opacity = '1';
        mainBackground.style.filter = 'blur(0px)';
      }
    }
  }, [hoveredProject]);

  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  // Project data with live website URLs
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Petsome',
      description: 'Pet adoption platform',
      liveUrl: 'https://siljewpetsome.netlify.app/',
      route: '/project1'
    },
    {
      id: 2,
      number: '02',
      title: 'Bunchies',
      description: 'Webshop for all sorts of things',
      liveUrl: 'https://your-bunchies-url.com', // Replace with actual URL
      route: '/project2'
    },
    {
      id: 3,
      number: '03',
      title: 'Holidaze',
      description: 'Holiday venues for booking',
      liveUrl: 'https://your-holidaze-url.com', // Replace with actual URL
      route: '/project3'
    }
  ];

  return (
    <header className={styles.header}>
      {/* IMPORTANT: Add 'homepage' class when on home page */}
      <div className={`${styles.container} ${isHomePage ? styles.homepage : ''} ${hoveredProject ? styles[`project${hoveredProject}Hover`] : ''}`}>
        {/* Left side - Social links (only show on homepage) */}
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <span>IG</span>
          </a>
          <a href="#" className={styles.socialLink}>
            <span>FB</span>
          </a>
          <a href="#" className={styles.socialLink}>
            <span>BE</span>
          </a>
          <a href="#" className={styles.socialLink}>
            <span>LI</span>
          </a>
        </div>

        {/* Right side - Navigation */}
        <nav className={styles.nav}>
          {!isHomePage && (
            <Link to="/" className={styles.homeLink}>Home</Link>
          )}
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </nav>

        {/* Main Title - Center (only show on homepage) */}
        {isHomePage && (
          <div className={styles.mainTitle}>
            <h1 className={styles.title}>
              <span className={styles.firstName}>SILJE</span>
              <span className={styles.lastName}>WALMANN</span>
              <span className={styles.subtitle}>PORTFOLIO</span>
            </h1>
          </div>
        )}

        {/* Project numbers - positioned on the right (only show on homepage) */}
        {isHomePage && (
          <div className={styles.projectNumbers}>
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={project.route} 
                className={styles.projectNumber}
                onMouseEnter={() => handleProjectHover(project.id)}
                onMouseLeave={handleProjectLeave}
              >
                <span className={styles.number}>{project.number}</span>
                <span className={styles.projectLabel}>{project.title}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Project Preview Cards with Live Website Previews (only show on homepage) */}
        {isHomePage && (
          <>
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={project.route}
                className={`${styles.projectCard} ${styles[`project${project.id}Card`]} ${hoveredProject === project.id ? styles.active : ''}`}
              >
                <div className={styles.cardPreview}>
                  <iframe
                    src={project.liveUrl}
                    className={styles.websitePreview}
                    title={`${project.title} preview`}
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts"
                  />
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardNumber}>{project.number}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;