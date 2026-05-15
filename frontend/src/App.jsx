import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Layers */}
      <div className="space-background"></div>
      <div className="overlay-gradient"></div>
      <ParticleBackground />

      {/* Content */}
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
