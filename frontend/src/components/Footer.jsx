import React from 'react';
import { Rocket, Mail } from 'lucide-react';
import '../App.css'; 

const Footer = () => {
  return (
    <footer className="footer-standard">
      <div className="footer-container">
        
        <div className="footer-grid">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col">
            <div className="footer-logo">
              <Rocket size={24} className="logo-icon-small" />
              <span>GravitX</span>
            </div>
            <p className="footer-desc">
              Advanced AI-driven mission intelligence for smarter aerospace decisions. Elevating exploration to new heights.
            </p>
            <div className="social-links">
              <a href="mailto:aryanpatade8@gmail.com" className="social-icon" title="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/Aryan-123-app" className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aryan-patade-a277451a9" className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Access</a></li>
              <li><a href="#">Research Papers</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Support Center</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Newsletter</h4>
            <p className="newsletter-desc">Stay updated with the latest in aerospace AI.</p>
            <div className="newsletter-input-group">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="btn-subscribe">Subscribe</button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-divider"></div>
          <div className="bottom-content">
            <p className="copyright">© 2026 MissionAI. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
