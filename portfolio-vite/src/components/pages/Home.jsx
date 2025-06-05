import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.backgroundContainer} id="main-background">
        {/* Your background image should be set in the CSS */}
        <div className={styles.backgroundOverlay}></div>
      </div>
    </main>
  );
};

export default Home;