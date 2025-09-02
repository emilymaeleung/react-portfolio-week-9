import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import Projects from './Pages/ProjectsPage';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* This is the route for your homepage */}
          <Route path="/" element={<Homepage />} />
          
          {/* This is the route for your projects page */}
          <Route path="/projects" element={<Projects />} />
          
          {/* This is the route for your about page */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;