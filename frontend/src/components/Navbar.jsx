import React from 'react';
import { Sparkles, Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <Rocket size={24} color="#0f172a" fill="#0f172a" style={{transform: "rotate(45deg)"}} /> GravitX
      </a>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#how-it-works">How it Works</a></li>
        <li><a href="#ai-predictions">AI Predictions</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <a href="#ai-predictions" className="btn-nav-action" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Sparkles size={16} /> Launch Predictor
      </a>
    </nav>
  );
};

export default Navbar;
