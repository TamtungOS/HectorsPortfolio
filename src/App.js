import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
      </Router>
  );
}

export default App;
