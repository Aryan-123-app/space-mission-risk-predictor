import React, { useEffect, useRef } from 'react';
import rocketImg from '../assets/rocket_launch.png';

const Hero = () => {
  const visualRef = useRef(null);

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!visualRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      visualRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="badge">
          AI POWERED PREDICTION
        </div>
        
        <h1 className="hero-title">
          Predict the Future of <br />
          <span className="text-gradient">Space Missions</span>
        </h1>
        
        <p className="hero-subtitle">
          Leverage machine learning to analyze mission parameters and predict the success of space missions. Experience the next generation of aerospace analytics.
        </p>
        
        <button className="btn-primary">
          Get Started 🚀
        </button>
      </div>

      <div className="hero-visual" ref={visualRef}>
        <div className="rocket-container">
          <img src={rocketImg} alt="MissionAI Rocket Launch" className="rocket-img" />
          <div className="glow-effect"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
