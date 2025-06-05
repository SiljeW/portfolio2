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

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${hoveredProject ? styles[`project${hoveredProject}Hover`] : ''}`}>
        {/* Left side - Social links */}
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
            <Link 
              to="/project1" 
              className={styles.projectNumber}
              onMouseEnter={() => handleProjectHover(1)}
              onMouseLeave={handleProjectLeave}
            >
              <span className={styles.number}>01</span>
              <span className={styles.projectLabel}>Petsome</span>
            </Link>
            <Link 
              to="/project2" 
              className={styles.projectNumber}
              onMouseEnter={() => handleProjectHover(2)}
              onMouseLeave={handleProjectLeave}
            >
              <span className={styles.number}>02</span>
              <span className={styles.projectLabel}>Bunchies</span>
            </Link>
            <Link 
              to="/project3" 
              className={styles.projectNumber}
              onMouseEnter={() => handleProjectHover(3)}
              onMouseLeave={handleProjectLeave}
            >
              <span className={styles.number}>03</span>
              <span className={styles.projectLabel}>Holidaze</span>
            </Link>
          </div>
        )}

        {/* Project Preview Cards - Smaller and Centered */}
        {isHomePage && (
          <>
            <div className={`${styles.projectCard} ${styles.project1Card} ${hoveredProject === 1 ? styles.active : ''}`}>
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>01</span>
                <h3 className={styles.cardTitle}>Petsome</h3>
                <p className={styles.cardDescription}>Pet adoption platform</p>
              </div>
            </div>
            <div className={`${styles.projectCard} ${styles.project2Card} ${hoveredProject === 2 ? styles.active : ''}`}>
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>02</span>
                <h3 className={styles.cardTitle}>Bunchies</h3>
                <p className={styles.cardDescription}>Webshop for all sorts of things</p>
              </div>
            </div>
            <div className={`${styles.projectCard} ${styles.project3Card} ${hoveredProject === 3 ? styles.active : ''}`}>
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>03</span>
                <h3 className={styles.cardTitle}>Holidaze</h3>
                <p className={styles.cardDescription}>Holiday venues for booking</p>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;