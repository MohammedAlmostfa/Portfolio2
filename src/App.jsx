import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;