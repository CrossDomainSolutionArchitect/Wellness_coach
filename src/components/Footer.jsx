import React from 'react';
import Logo from './Logo';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-icon">
                <Logo size="small" />
              </div>
              <span className="footer-logo-text">Indabentle Consulting</span>
            </div>
            <p className="footer-description">
              Empowering people and transforming organizations through excellence in HR consulting and organizational development.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-section-title">Quick Links</h4>
            <div className="footer-links">
              {['Home', 'About', 'Services', 'Contact'].map(item => (
                <button 
                  key={item} 
                  onClick={() => setCurrentPage(item.toLowerCase())} 
                  className="footer-link"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-section-title">Our Values</h4>
            <div className="footer-values">
              <div className="footer-value">Honesty</div>
              <div className="footer-value">Individuality</div>
              <div className="footer-value">Resilience</div>
              <div className="footer-value">Ubuntu</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2024 Indabentle Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;