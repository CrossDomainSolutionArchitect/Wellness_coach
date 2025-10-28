import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo-wrapper" onClick={() => setCurrentPage('home')}>
            <div className="logo-icon">
              <Logo size="default" />
            </div>
            <div className="logo-text-wrapper">
              <div className="logo-text">Indabentle Consulting</div>
              <div className="logo-tagline">People. Growth. Excellence.</div>
            </div>
          </div>
          
          <div className="desktop-nav">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item.toLowerCase())}
                className={`nav-link ${currentPage === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="cta-button"
            >
              Get Started
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => { setCurrentPage(item.toLowerCase()); setMobileMenuOpen(false); }}
                className="mobile-menu-item"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;