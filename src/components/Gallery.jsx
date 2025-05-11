import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExchangeAlt } from 'react-icons/fa';
import './Gallery.css';

const images = [
  {
    before: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    after: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Nettoyage après travaux',
    description: 'Remise en état complète après rénovation de l\'appartement.'
  },
  {
    before: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    after: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'Nettoyage de bureaux',
    description: 'Des bureaux toujours propres pour une meilleure image et un meilleur bien-être.'
  },
  {
    before: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    after: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Nettoyage de vitres',
    description: 'Transparence et brillance : un nettoyage professionnel de vos vitres et vitrines.'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2>Galerie de Réalisations</h2>
          <p>
            Découvrez quelques exemples de mes réalisations avant/après qui témoignent 
            de la qualité de mon travail et de mon engagement pour votre satisfaction.
          </p>
        </div>
        
        <div className="gallery-container">
          <div className="gallery-card">
            <div className="gallery-image-container">
              <img
                src={showBefore ? images[currentIndex].before : images[currentIndex].after}
                alt={images[currentIndex].title}
                className={`gallery-image ${showBefore ? 'fade-in' : 'fade-out'}`}
              />
              
              <div className="image-badge">
                {showBefore ? 'AVANT' : 'APRÈS'}
              </div>
              
              <button
                onClick={() => setShowBefore(!showBefore)}
                className="toggle-button"
                aria-label="Basculer avant/après"
              >
                <FaExchangeAlt />
              </button>
            </div>
            
            <div className="gallery-content">
              <h3>{images[currentIndex].title}</h3>
              <p>{images[currentIndex].description}</p>
              
              <div className="gallery-controls">
                <button
                  onClick={prevImage}
                  className="nav-button prev-button"
                >
                  <FaChevronLeft /> <span>Précédent</span>
                </button>
                
                <button
                  onClick={() => setShowBefore(!showBefore)}
                  className="toggle-view-button"
                >
                  Voir {showBefore ? 'après' : 'avant'}
                </button>
                
                <button
                  onClick={nextImage}
                  className="nav-button next-button"
                >
                  <span>Suivant</span> <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
          
          <div className="gallery-dots">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`gallery-dot ${currentIndex === index ? 'active' : ''}`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
