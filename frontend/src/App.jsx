import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AIPredictions from './components/AIPredictions';
import './App.css';

function App() {
  const { scrollY } = useScroll();
  
  // Fade out hero background from 0px to 600px scroll
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Fade in How It Works background from 300px to 800px scroll, fade out from 1200px to 1800px
  const howItWorksOpacity = useTransform(scrollY, [300, 800, 1200, 1800], [0, 1, 1, 0]);

  // Fade in AI Predictions background from 1400px to 2000px scroll
  const aiPredOpacity = useTransform(scrollY, [1400, 2000], [0, 1]);

  return (
    <div className="app-container">
      {/* Fixed Background Layers for Crossfade Effect */}
      <motion.div 
        className="fixed-bg space-background" 
        style={{ opacity: heroOpacity }}
      ></motion.div>
      <motion.div 
        className="fixed-bg how-it-works-bg" 
        style={{ opacity: howItWorksOpacity }}
      ></motion.div>
      <motion.div 
        className="fixed-bg ai-pred-bg" 
        style={{ opacity: aiPredOpacity }}
      ></motion.div>

      {/* Content Layer */}
      <div className="content-layer">
        <Navbar />
        <Hero />
        <HowItWorks />
        <AIPredictions />
      </div>
    </div>
  );
}

export default App;
