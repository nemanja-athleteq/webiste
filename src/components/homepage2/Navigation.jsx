import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation Component with scroll background and mobile hamburger menu
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsSolutionsOpen(false);
    }
  };

  const toggleSolutions = (e) => {
    e.preventDefault();
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">AthleteQ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-menu nav-menu-desktop">
          <div className="nav-dropdown">
            <a href="#solutions" className="dropdown-trigger">
              SOLUTIONS
              <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="dropdown-menu">
              <Link to="/for-clubs">For Clubs</Link>
              <Link to="/for-athletes">For Athletes</Link>
              <Link to="/for-coaches">For Coaches</Link>
              <Link to="/for-parents">For Parents</Link>
              <Link to="/for-experts">For Experts</Link>
            </div>
          </div>
          <a href="#how-it-works">HOW IT WORKS</a>
          <a href="#platform">PLATFORM</a>
          <a href="#pricing">PRICING</a>
          <a href="#resources">RESOURCES</a>
          <a href="#about">ABOUT</a>
        </div>

        {/* Desktop Login Button */}
        <button className="btn-login btn-login-desktop">
          <span>Log In</span>
          <svg className="user-icon" width="19" height="19" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M6 21C6 17.6863 8.68629 15 12 15C15.3137 15 18 17.6863 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Hamburger Button - Mobile Only */}
        <button
          className={`hamburger-btn ${isMobileMenuOpen ? 'hamburger-open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line hamburger-line-1"></span>
          <span className="hamburger-line hamburger-line-2"></span>
          <span className="hamburger-line hamburger-line-3"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'overlay-visible' : ''}`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          {/* Mobile Solutions Dropdown */}
          <div className={`mobile-nav-item mobile-dropdown ${isSolutionsOpen ? 'mobile-dropdown-open' : ''}`}>
            <button className="mobile-dropdown-trigger" onClick={toggleSolutions}>
              <span>SOLUTIONS</span>
              <svg className={`mobile-dropdown-arrow ${isSolutionsOpen ? 'arrow-rotated' : ''}`} width="16" height="16" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`mobile-dropdown-menu ${isSolutionsOpen ? 'mobile-dropdown-menu-open' : ''}`}>
              <Link to="/for-clubs" className="mobile-dropdown-link">For Clubs</Link>
              <Link to="/for-athletes" className="mobile-dropdown-link">For Athletes</Link>
              <Link to="/for-coaches" className="mobile-dropdown-link">For Coaches</Link>
              <Link to="/for-parents" className="mobile-dropdown-link">For Parents</Link>
              <Link to="/for-experts" className="mobile-dropdown-link">For Experts</Link>
            </div>
          </div>

          {/* Other Mobile Links */}
          <a href="#how-it-works" className="mobile-nav-item" onClick={toggleMobileMenu}>HOW IT WORKS</a>
          <a href="#platform" className="mobile-nav-item" onClick={toggleMobileMenu}>PLATFORM</a>
          <a href="#pricing" className="mobile-nav-item" onClick={toggleMobileMenu}>PRICING</a>
          <a href="#resources" className="mobile-nav-item" onClick={toggleMobileMenu}>RESOURCES</a>
          <a href="#about" className="mobile-nav-item" onClick={toggleMobileMenu}>ABOUT</a>

          {/* Mobile Login Button */}
          <button className="btn-login btn-login-mobile">
            <span>Log In</span>
            <svg className="user-icon" width="19" height="19" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M6 21C6 17.6863 8.68629 15 12 15C15.3137 15 18 17.6863 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
