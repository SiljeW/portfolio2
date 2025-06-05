import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Import page components
import Home from './components/pages/Home';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;