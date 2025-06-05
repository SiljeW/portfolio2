import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>Creative Developer & Designer</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            
            {/* About Text */}
            <div className={styles.aboutText}>
              <h2>Hello, I'm Silje</h2>
              <p>
                I'm a passionate Front-End developer with a keen eye for design and user experience. 
                My journey in web development began with a fascination for creating beautiful, 
                functional digital experiences that make a difference.
              </p>
              <p>
                With expertise in modern web technologies like React, Node.js, and various design tools, 
                I enjoy bringing ideas to life through clean code and thoughtful design. I believe in 
                the power of simplicity and the importance of user-centered design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, learning emerging 
                technologies, creating music or enjoying the beautiful landscapes of the world.
              </p>
            </div>

            {/* Skills */}
            <div className={styles.skills}>
              <h3>Skills & Expertise</h3>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4>Frontend</h4>
                  <ul>
                    <li>React</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>CSS Modules</li>
                    <li>Tailwindcss</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h4>UX/UI Design</h4>
                  <ul>
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Vite</li>
                    <li>Adobe Creative Suite</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Tools & Platforms</h4>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>WooCommerce</li>
                    <li>Netlify</li>
                    <li>Microsoft CRM</li>
                    <li>ArchiCAD</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Experience */}
          <div className={styles.experience}>
            <h3>Experience</h3>
            <div className={styles.experienceGrid}>
              <div className={styles.experienceItem}>
                <div className={styles.year}>2024 - Present</div>
                <div className={styles.role}>
                  <h4>Front-End Developer</h4>
                  <p>Self-Employed</p>
                  <p>Creating custom web solutions for clients, focusing on modern design experiences and performance optimization.</p>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.year}>2019 - 2023</div>
                <div className={styles.role}>
                  <h4>Manager</h4>
                  <p>Interior Company</p>
                  <p>Managed showrooms and employees in Norway, Sweden, Germany, UK and the Netherlands.
                    Designed and enhanced user experience and important features on the company website</p>
                </div>
              </div>
              <div className={styles.experienceItem}>
                <div className={styles.year}>2015 - 2018</div>
                <div className={styles.role}>
                  <h4>Alarm Operator</h4>
                  <p>Security company</p>
                  <p>Handled incoming alarm signals and collaborated with emergency units</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={styles.cta}>
            <h3>Let's Work Together</h3>
            <p>I'm always interested in new opportunities and exciting projects.</p>
            <a href="/contact" className={styles.ctaButton}>Get In Touch</a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;