import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart2, ShieldCheck, Globe, Target, Zap, Rocket } from 'lucide-react';

import imgAI from '../assets/AI.png';
import imgAnalytics from '../assets/real_time_analytics.png';
import imgRisk from '../assets/tick.png';
import imgEarth from '../assets/earth 1.png';
import imgTarget from '../assets/target.png';
import imgSmartRec from '../assets/smart recommendation.png';

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <motion.div 
          className="badge badge-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SparklesIcon size={14} /> FEATURES
        </motion.div>
        
        <motion.h2 
          className="features-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Powerful <span className="text-gradient">AI Features</span>
        </motion.h2>

        <motion.p 
          className="features-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          GravitX combines advanced machine learning with real-world data<br/> to deliver accurate predictions and smarter mission planning.
        </motion.p>
      </div>

      <div className="features-grid">
        {/* Row 1 */}
        <motion.div className="feature-card card-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="fc-image-placeholder left">
            <img 
              src={imgAI} 
              alt="AI-Powered Predictions" 
              className="fc-img" 
              style={{ width: '100%', height: 'auto', maxHeight: '280px', objectFit: 'contain', transform: 'translate(0px, 10px) scale(1)' }} /* <-- Adjust scale(1.2) to make bigger on desktop */
            />
          </div>
          <div className="fc-content right">
            <div className="fc-icon"><Cpu size={24} /></div>
            <h3 className="fc-title">AI-Powered Predictions</h3>
            <p className="fc-text">
              Advanced machine learning models analyze complex mission parameters to predict success with high accuracy.
            </p>
          </div>
        </motion.div>

        <motion.div className="feature-card card-standard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="fc-content top">
            <div className="fc-icon"><BarChart2 size={24} /></div>
            <h3 className="fc-title">Real-Time Data Analysis</h3>
            <p className="fc-text">
              Process live and historical data instantly to understand mission dynamics and risks in real-time.
            </p>
          </div>
          <div className="fc-image-placeholder bottom">
             <img 
               src={imgAnalytics} 
               alt="Real-Time Data Analysis" 
               className="fc-img" 
               style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain', transform: 'translate(0px, 0px) scale(1)' }} /* <-- Adjust scale(1.2) to make bigger on desktop */
             />
          </div>
        </motion.div>

        <motion.div className="feature-card card-standard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="fc-content top">
            <div className="fc-icon"><ShieldCheck size={24} /></div>
            <h3 className="fc-title">Risk Assessment Engine</h3>
            <p className="fc-text">
              Identify potential risks and get actionable insights to minimize uncertainties and improve outcomes.
            </p>
          </div>
          <div className="fc-image-placeholder bottom">
             <img 
               src={imgRisk} 
               alt="Risk Assessment Engine" 
               className="fc-img" 
               style={{ width: '100%', height: 'auto', maxHeight: '180px', objectFit: 'contain', transform: 'translate(0px, 0px) scale(1)' }} /* <-- Adjust scale(1.2) to make bigger on desktop */
             />
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div className="feature-card card-wide reversed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="fc-content left">
            <div className="fc-icon"><Globe size={24} /></div>
            <h3 className="fc-title">Multi-Scenario Simulation</h3>
            <p className="fc-text">
              Run thousands of simulations across different scenarios to find the best path to mission success.
            </p>
          </div>
          <div className="fc-image-placeholder right">
            <img 
              src={imgEarth} 
              alt="Multi-Scenario Simulation" 
              className="fc-img" 
              style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain', transform: 'translate(0px, 0px) scale(1)' }} /* <-- Adjust scale(1.2) to make bigger on desktop */
            />
          </div>
        </motion.div>

        <motion.div className="feature-card card-standard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="fc-content top">
            <div className="fc-icon"><Target size={24} /></div>
            <h3 className="fc-title">Precision Analytics</h3>
            <p className="fc-text">
              Leverage deep analytics to uncover hidden patterns and correlations that drive mission success.
            </p>
          </div>
          <div className="fc-image-placeholder bottom">
             <img 
               src={imgTarget} 
               alt="Precision Analytics" 
               className="fc-img" 
               style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain', transform: 'translate(0px, 0px) scale(1)' }} /* <-- Adjust scale(1.2) to make bigger on desktop */
             />
          </div>
        </motion.div>

        <motion.div className="feature-card card-standard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="fc-content top">
            <div className="fc-icon"><Zap size={24} /></div>
            <h3 className="fc-title">Smart Recommendations</h3>
            <p className="fc-text">
              Get AI-driven recommendations tailored to your mission goals for optimal results.
            </p>
          </div>
          <div className="fc-image-placeholder bottom">
             <img 
               src={imgSmartRec} 
               alt="Smart Recommendations" 
               className="fc-img" 
               style={{ width: '100%', height: 'auto', maxHeight: '210px', objectFit: 'contain', transform: 'translate(0px, 0px) scale(1)' }} /* <-- Adjust scale(1.2) to make bigger on desktop */
             />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="features-stats-bar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <div className="stat-item">
          <div className="stat-icon-wrapper"><Target size={20} /></div>
          <div className="stat-info">
            <h4>98.7%</h4>
            <p>Prediction Accuracy</p>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-icon-wrapper"><ShieldCheck size={20} /></div>
          <div className="stat-info">
            <h4>10K+</h4>
            <p>Simulations Run</p>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-icon-wrapper"><Globe size={20} /></div>
          <div className="stat-info">
            <h4>50+</h4>
            <p>Data Sources</p>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-icon-wrapper"><Rocket size={20} /></div>
          <div className="stat-info">
            <h4>24/7</h4>
            <p>AI Monitoring</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SparklesIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
  </svg>
);

export default Features;
