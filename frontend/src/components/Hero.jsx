import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Navigation } from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="hero-section" id="home">
      
      {/* Background Image scoped to Hero */}
      <div className="space-background"></div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="badge">
          <Sparkles size={14} className="mr-2" /> AI POWERED PREDICTION
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="hero-title">
          Predict the Future of <br />
          <span className="text-gradient">Space Missions</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="hero-subtitle">
          Leverage machine learning to analyze mission parameters <br/> and predict the success of space missions.
        </motion.p>
        
        <motion.div variants={itemVariants} className="hero-actions">
          <button className="btn-primary">
            Get Started <Navigation size={18} className="ml-2 icon-arrow" />
          </button>
          <button className="btn-secondary">
            <div className="play-icon-wrapper">
              <Play size={14} fill="currentColor" />
            </div>
            Watch Demo
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
