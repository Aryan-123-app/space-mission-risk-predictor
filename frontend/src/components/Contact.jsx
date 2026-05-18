import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, HeadphonesIcon, MapPin, Calendar, Send, ShieldCheck, User, Tag, Edit3, RadioTower, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: 'idle', // idle, loading, success, error
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending transmission...' });

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Transmission received successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send transmission.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <motion.div 
          className="badge badge-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={14} /> CONTACT US
        </motion.div>
        
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>

        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have questions or need help? Our team is here to assist you.<br />
          Reach out to us and we'll get back to you shortly.
        </motion.p>
      </div>

      <div className="contact-grid">
        {/* Left Form */}
        <motion.div 
          className="contact-form-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="card-title">Send us a message</h3>
          <div className="divider"></div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <User className="input-icon" size={18} />
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="contact-input" />
              </div>
              <div className="input-group">
                <Mail className="input-icon" size={18} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="contact-input" />
              </div>
            </div>

            <div className="input-group">
              <Tag className="input-icon" size={18} />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="contact-input" />
            </div>

            <div className="input-group textarea-group">
              <Edit3 className="input-icon" size={18} />
              <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Your Message" rows="5" className="contact-input contact-textarea"></textarea>
            </div>

            {status.type !== 'idle' && (
              <div className={`form-status ${status.type}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: status.type === 'success' ? '#22c55e' : status.type === 'error' ? '#ef4444' : '#a855f7', marginTop: '0.5rem' }}>
                {status.type === 'success' && <CheckCircle2 size={16} />}
                {status.type === 'error' && <AlertCircle size={16} />}
                {status.type === 'loading' && <Sparkles size={16} className="animate-spin" />}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-footer">
              <button type="submit" className="btn-send" disabled={status.type === 'loading'} style={{ opacity: status.type === 'loading' ? 0.7 : 1 }}>
                <Send size={14} /> {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              <div className="privacy-note">
                <ShieldCheck size={16} className="privacy-icon" />
                <span>We respect your privacy and protect your data.</span>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Right Info Panels */}
        <motion.div 
          className="contact-info-wrapper"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="card-title">Other ways to reach us</h3>
          <div className="divider"></div>

          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon-wrapper icon-email">
                <Mail size={20} />
              </div>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>aryanpatade8@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper icon-support">
                <HeadphonesIcon size={20} />
              </div>
              <div className="info-text">
                <h4>Live Support</h4>
                <p>Available 24/7</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper icon-location">
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <h4>Our Location</h4>
                <p>DSK Vishwa, Pune</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrapper icon-demo">
                <Calendar size={20} />
              </div>
              <div className="info-text">
                <h4>Contact Me</h4>
                <p>For project inquiries and collaborations</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.div 
        className="custom-req-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="req-banner-content">
          <div className="req-image-wrapper">
            <RadioTower className="req-placeholder-icon" size={60} />
          </div>
          <div className="req-text">
            <h3>Have a custom requirement?</h3>
            <p>We build tailored AI solutions for complex<br/>missions and unique challenges.</p>
          </div>
        </div>
        <button className="btn-outline-demo">
          <Sparkles size={16} /> Discuss your Mission
        </button>
      </motion.div>
    </section>
  );
};

export default Contact;
