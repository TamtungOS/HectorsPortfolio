import React from 'react'; // imports React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // imports React Router for routing through multiple pages
import Home from './components/Home/Home'; // home component
import Contact from './components/Contact/Contact'; // contact component
import AboutMe from './components/AboutMe/AboutMe'; // aboutme component
import Navbar from './components/Navbar/Navbar'; // navbar component

const App = () => {
  return (
      <Router> {/* wraps app in Router that allows routing between pages */}
          <Navbar /> {/* renders navbar to be static on all pages */}
          <Routes> {/* defines the routes used */}
              <Route path="/" element={<Home />} /> {/* Home page is the default path */}
              <Route path="/contact" element={<Contact />} /> {/* links /contact path to contact component */}
              <Route path="/aboutme" element={<AboutMe />} /> {/* links /aboutme path to AboutMe component */}
          </Routes>
      </Router>
  );
}

export default App;
