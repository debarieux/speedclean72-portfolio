import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Un service impeccable ! SpeedClean72 a transformé mon appartement en un espace étincelant de propreté. Dorian est très professionnel, ponctuel et minutieux.",
      author: "Claire Bertrand",
      role: "Propriétaire",
      rating: 5,
      initials: "CB",
      date: "Mars 2023"
    },
    {
      quote: "Service rapide et efficace pour notre bureau. L'équipe a su s'adapter à nos contraintes horaires et le résultat est à la hauteur de nos attentes.",
      author: "Julien Renard",
      role: "Directeur commercial",
      rating: 5,
      initials: "JR",
      date: "Janvier 2023"
    },
    {
      quote: "Je fais appel à SpeedClean72 régulièrement pour l'entretien de ma maison. Un service fiable et des produits respectueux de l'environnement.",
      author: "Sophie Martin",
      role: "Cliente fidèle",
      rating: 5,
      initials: "SM",
      date: "Février 2023"
    }
  ];

  // Fonction pour générer les étoiles de notation
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={i < rating ? 'star-filled' : 'star-empty'} 
        />
      );
    }
    return stars;
  };

  return (
    <section id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Ce que disent mes clients</h2>
          <p className="testimonials-intro">
            Découvrez les témoignages de clients satisfaits qui ont fait confiance à SpeedClean72 pour leurs besoins de nettoyage.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="testimonial-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{testimonial.quote}</p>
                </div>
                
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.initials}
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.author}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                    <div className="testimonial-date">{testimonial.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
