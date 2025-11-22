import { useState, useEffect } from 'react';

// Navigation Component with scroll background
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-menu">
        <div className="nav-dropdown">
          <a href="#solutions" className="dropdown-trigger">
            SOLUTIONS
            <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="dropdown-menu">
            <a href="#clubs">For Clubs</a>
            <a href="#athletes">For Athletes</a>
            <a href="#coaches">For Coaches</a>
            <a href="#parents">For Parents</a>
            <a href="#experts">For Experts</a>
          </div>
        </div>
        <a href="#how-it-works">HOW IT WORKS</a>
        <a href="#platform">PLATFORM</a>
        <a href="#pricing">PRICING</a>
        <a href="#resources">RESOURCES</a>
        <a href="#about">ABOUT</a>
      </div>
      <button className="btn-login">
        <span>Log In</span>
        <svg className="user-icon" width="19" height="19" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 21C6 17.6863 8.68629 15 12 15C15.3137 15 18 17.6863 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </nav>
  );
};

export default Navigation;
