import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer style={{ backgroundColor: 'var(--secondary-color)', padding: '20px', textAlign: 'center', color: 'var(--text-dark)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p>&copy; {new Date().getFullYear()} Titec Automation. Powered by TiTec Automation.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
