import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaCheck, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Contact.css';

const serviceTypes = [
  "Nettoyage de bureaux",
  "Nettoyage de vitres", 
  "Nettoyage après travaux",
  "Autre demande"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceTypes[0],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on ferait normalement une requête API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      service: serviceTypes[0],
      message: ''
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Contactez-moi</h2>
          <p className="contact-intro">
            Prêt à redonner de l'éclat à vos espaces ? N'hésitez pas à me contacter pour un devis personnalisé ou pour toute question concernant mes services.
          </p>
        </div>
        
        <div className="contact-grid">
          {/* Formulaire de contact */}
          <div>
            {submitted ? (
              <div className="contact-form success-message">
                <div className="success-icon">
                  <FaCheck />
                </div>
                <h3>Merci pour votre message !</h3>
                <p>Je vous recontacterai dans les plus brefs délais pour discuter de votre projet.</p>
              </div>
            ) : (
              <div className="contact-form">
                <h3 className="form-title">Envoyez-moi un message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Votre adresse email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-control"
                    >
                      {serviceTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="form-control"
                      placeholder="Décrivez votre besoin..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="submit-button"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              </div>
            )}
          </div>
          
          {/* Informations de contact */}
          <div className="contact-info">
            <div className="contact-card">
              <h3>Mes coordonnées</h3>
              
              <ul className="contact-items">
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <strong>Adresse</strong>
                    72 Rue du Progrès, 72000 Le Mans
                  </div>
                </li>
                
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <strong>Téléphone</strong>
                    06 12 34 56 78
                  </div>
                </li>
                
                <li className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <strong>Email</strong>
                    contact@speedclean72.fr
                  </div>
                </li>
              </ul>
              
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
