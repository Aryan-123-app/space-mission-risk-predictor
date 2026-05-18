import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AIPredictions from './components/AIPredictions';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { scrollY } = useScroll();
  
  // Fade out hero background from 0px to 600px scroll
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Fade in How It Works background from 300px to 800px scroll, fade out from 1200px to 1800px
  const howItWorksOpacity = useTransform(scrollY, [300, 800, 1200, 1800], [0, 1, 1, 0]);

  // Fade in AI Predictions background from 1400px to 2000px scroll, fade out from 2300px to 2800px
  const aiPredOpacity = useTransform(scrollY, [1400, 2000, 2300, 2800], [0, 1, 1, 0]);

  // Fade in Features background from 2600px to 3200px scroll, fade out from 3400px to 4000px
  const featuresOpacity = useTransform(scrollY, [2600, 3200, 3400, 4000], [0, 1, 1, 0]);

  // Fade in Contact background from 3600px to 4200px scroll
  const contactOpacity = useTransform(scrollY, [3600, 4200], [0, 1]);

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
      <motion.div 
        className="fixed-bg features-bg" 
        style={{ opacity: featuresOpacity }}
      ></motion.div>
      <motion.div 
        className="fixed-bg contact-bg" 
        style={{ opacity: contactOpacity }}
      ></motion.div>

      {/* Content Layer */}
      <div className="content-layer">
        <Navbar />
        <Hero />
        <HowItWorks />
        <AIPredictions />
        <Features />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
