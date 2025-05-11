import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wave"></div>
      <div className="footer-container">
        <div className="footer-grid">
          

          {/* "Qui je suis " */}
          <div className="footer-col">
          <h3>Qui je suis</h3>
          <p>
              Je suis Dorian, fondateur de SpeedClean72 et spécialiste du nettoyage professionnel basé au Mans.
            </p>
            <p>
              J'interviens dans tout le département de la Sarthe, en adaptant mes services à vos besoins.
            </p>
          </div>
          
          {/* À propos */}
          <div className="footer-col">
            <h3>SpeedClean72</h3>
            
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaPhone />
              </div>
              <span>06 12 34 56 78</span>
            </div>
            
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaEnvelope />
              </div>
              <span>contact@speedclean72.fr</span>
            </div>
            
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <span>72 Rue du Progrès, 72000 Le Mans</span>
            </div>
          </div>

          {/* Horaires */}
          <div className="footer-col">
            <h3>Horaires d'ouverture</h3>
            <ul className="footer-links">
              <li>Lundi - Vendredi: 8h - 19h</li>
              <li>Samedi: 9h - 12h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
          
          {/* Services - Section séparée */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>Nettoyage résidentiel</li>
              <li>Nettoyage de bureaux</li>
              <li>Nettoyage après travaux</li>
              <li>Nettoyage de vitres</li>
            </ul>
          </div>
        </div>
        
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SpeedClean72 – Tous droits réservés | SIRET : 123 456 789 00000</p>
          
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          
          <p style={{ marginTop: '1rem', fontSize: '0.75rem' }}>
            Site développé par Debarieux David
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
            <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', textDecoration: 'underline' }}>
              J'accepte les politiques de confidentialité et la prise des données
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
