import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            <span>© {currentYear} Portfolio. All rights reserved.</span>
          </div>
          
          <div className={styles.tagline}>
            <span>Creative Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;