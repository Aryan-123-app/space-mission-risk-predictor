import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar glass-panel">
      <a href="#" className="logo">
        <span>🚀</span> MissionAI
      </a>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#how-it-works">How it Works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      
      <button className="btn-outline-glow">
        About Project
      </button>
    </nav>
  );
};

export default Navbar;
