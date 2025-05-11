import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import './Navbar.css';
import logoNav from '../assets/images/Logo 3.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'À propos' },
    { id: 'testimonials', label: 'Avis clients' },
    { id: 'gallery', label: 'Galerie' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="home" className="navbar-logo" smooth duration={500} onClick={closeMenu}>
          <img src={logoNav} alt="SpeedClean72 Logo" className="logo-image" />
          <div className="logo-text">SpeedClean72</div>
        </Link>
        
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Menu de navigation">
          <FaBars />
        </button>
        
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {/* Bouton de fermeture visible uniquement en version mobile via CSS */}
          <button className="close-menu" onClick={closeMenu} aria-label="Fermer le menu">
            <FaTimes />
          </button>
          
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              className="navbar-link"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          
          <Link
            to="contact"
            className="navbar-cta"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Devis gratuit <FaArrowRight style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
