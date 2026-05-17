import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

import rocketIcon from '../assets/rocket icon.png';
import brainIcon from '../assets/brain icon.png';
import planetIcon from '../assets/planet icon.png';
import shieldIcon from '../assets/shield icon.png';
import satelliteIcon from '../assets/satellite icon.png';
import badgeIcon from '../assets/badge icon.png';

const steps = [
  {
    num: "01",
    title: "Define Mission Parameters",
    desc: "Input mission details like payload mass, launch date, rocket success rate, and launch site risk.",
    img: rocketIcon,
    // INSTRUCTION: Adjust this value (e.g., "80%", "100%", "120px") to change this specific image's size
    size: "80%" 
  },
  {
    num: "02",
    title: "Data Preprocessing",
    desc: "We clean, encode, and normalize the data to ensure accuracy and consistency.",
    img: satelliteIcon,
    size: "130%"
  },
  {
    num: "03",
    title: "AI Model Analysis",
    desc: "Our machine learning model analyzes patterns from historical mission data.",
    img: brainIcon,
    size: "100%"
  },
  {
    num: "04",
    title: "Simulate Mission Outcomes",
    desc: "The system runs thousands of simulations to evaluate various scenarios.",
    img: planetIcon,
    size: "100%"
  },
  {
    num: "05",
    title: "Predict Success Rate",
    desc: "We calculate the probability of mission success based on insights from the model.",
    img: badgeIcon,
    size: "160%"
  },
  {
    num: "06",
    title: "Make Smarter Decisions",
    desc: "Use accurate predictions to plan better, reduce risk, and ensure mission success.",
    img: shieldIcon,
    size: "160%"
  }
];

const HowItWorks = () => {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="hiw-header">
        <motion.div 
          className="badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={14} className="mr-2" /> HOW IT WORKS
        </motion.div>
        
        <motion.h2 
          className="hiw-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          From Data to <span className="text-gradient">Mission Success</span>
        </motion.h2>
        
        <motion.p 
          className="hiw-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our AI system analyzes mission parameters and predicts<br/> the probability of success with advanced machine learning.
        </motion.p>
      </div>

      <div className="timeline-container">
        {/* Connecting Line */}
        <div className="timeline-line"></div>
        
        <div className="timeline-steps">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="timeline-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {/* Circular Placeholder for Image */}
              <div className="step-image-placeholder">
                {step.img ? (
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    style={{ 
                      width: step.size, 
                      height: step.size, 
                      objectFit: "contain", 
                      borderRadius: "50%" 
                    }} 
                  />
                ) : (
                  <ImageIcon size={32} opacity={0.3} />
                )}
                {/* Arrow pointing to next step */}
                {index < steps.length - 1 && (
                  <div className="step-arrow-right"></div>
                )}
              </div>
              
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
