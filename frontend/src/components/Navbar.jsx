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
      
      <button className="btn-nav-action">
        <Sparkles size={16} /> Launch Predictor
      </button>
    </nav>
  );
};

export default Navbar;
