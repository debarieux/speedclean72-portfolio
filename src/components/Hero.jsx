import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import { FaArrowDown, FaStar, FaShieldAlt, FaArrowRight, FaClock, FaCheck } from 'react-icons/fa';
import './Hero.css'; // Fichier CSS spécifique pour les animations

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <section id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-badge slide-in-left">
              <FaShieldAlt style={{ marginRight: '8px' }} /> SpeedClean72 - Expertise & Efficacité
            </div>
            
            <h1 className="slide-in-left" style={{animationDelay: '0.3s'}}>
              <span>TRANSFORMEZ</span>
              <span className="gradient-text" data-text="VOS ESPACES">
                VOS ESPACES
              </span>
            </h1>
            
            <div className="hero-description slide-in-left" style={{animationDelay: '0.5s'}}>
              <p>Des <strong>solutions de nettoyage professionnelles</strong>, Confiez vos espaces à un expert qui transforme chaque défi en résultat impeccable.</p>
            </div>
            
            <div className="hero-buttons slide-in-left" style={{animationDelay: '0.7s'}}>
              <Link
                to="contact"
                smooth
                duration={800}
                className="hero-button primary"
              >
                Demander un devis <FaArrowRight className="hero-button-icon" />
              </Link>
              
              <Link
                to="services"
                smooth
                duration={800}
                className="hero-button secondary"
              >
                Découvrir mes services <FaArrowRight className="hero-button-icon" />
              </Link>
            </div>
            
            {/* Section supprimée selon la demande */}
          </div>
          
          <div className="hero-card slide-in-right" style={{animationDelay: '0.5s'}}>
            <div className="new-badge">
              PREMIUM
            </div>
            <h3>L'EXCELLENCE DU NETTOYAGE</h3>
            <p>Des prestations haut de gamme pour des résultats exceptionnels</p>
            <div className="service-grid">
              <div className="service-item">
                <FaClock style={{ marginRight: '8px' }} />
                <p>Intervention rapide</p>
              </div>
              <div className="service-item">
                <FaCheck style={{ marginRight: '8px' }} />
                <p>Qualité garantie</p>
              </div>
              <div className="service-item">
                <FaShieldAlt style={{ marginRight: '8px' }} />
                <p>Service certifié</p>
              </div>
              <div className="service-item">
                <FaStar style={{ marginRight: '8px' }} />
                <p>Satisfaction client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`scroll-indicator ${scrolled ? 'hidden' : ''}`}>
        <Link to="services" smooth duration={800}>
          <span>Découvrez mes services</span>
          <div className="bounce">
            <FaArrowDown />
          </div>
        </Link>
      </div>
    </section>
  );
}
