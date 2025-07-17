import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects'
import Formation from './pages/Formation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/about" element={<AboutMe />} />
        <Route path="/pages/project" element={<Projects />} />
        <Route path="/pages/formation" element={<Formation />} />
      </Routes>
    </Router>
  </StrictMode>,
)
