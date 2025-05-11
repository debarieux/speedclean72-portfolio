import { FaCheck, FaLeaf, FaBolt, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './About.css';

export default function About() {
  const trustReasons = [
    {
      icon: <FaCheck />,
      title: "Qualité et Soin",
      description: "Chaque prestation est réalisée avec minutie pour un résultat impeccable.",
      color: "primary"
    },
    {
      icon: <FaLeaf />,
      title: "Éco-responsable",
      description: "J'utilise des produits respectueux de l'environnement pour un nettoyage efficace et sûr.",
      color: "green"
    },
    {
      icon: <FaBolt />,
      title: "Réactivité",
      description: "Intervention rapide et adaptée à vos besoins, avec une flexibilité maximale.",
      color: "yellow"
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantie Satisfaction",
      description: "Travail soigné et assurance professionnelle pour une tranquillité totale.",
      color: "blue"
    }
  ];

  return (
    <section id="about">
      <div className="about-container">
        <div className="about-header">
          <h2>Pourquoi me faire confiance ?</h2>
          <p className="about-intro">
            Je suis Dorian, fondateur de SpeedClean72. Passionné par la propreté, je m'engage à fournir un service rapide, rigoureux et fiable dans toute la Sarthe (72).
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="Professionnel du nettoyage" />
            <div className="about-image-badge">5+ ans d'expérience</div>
            <div className="about-image-caption">
              <h3>Dorian</h3>
              <p>Fondateur de SpeedClean72</p>
            </div>
          </div>
          
          <div className="about-content">
            <h3 className="about-title">Une expertise à votre service</h3>
            <p className="about-description">
              Passionné par mon métier, j'ai fondé SpeedClean72 avec une mission claire : offrir des services de nettoyage 
              d'exception qui dépassent vos attentes. Formé aux techniques les plus efficaces et équipé de matériel professionnel, 
              je m'engage à redonner éclat et propreté à tous vos espaces.
            </p>
            
            <div className="trust-reasons">
              {trustReasons.map((reason, index) => (
                <div key={index} className="trust-reason">
                  <div className="trust-icon">
                    {reason.icon}
                  </div>
                  <div className="trust-content">
                    <h4 className="trust-title">{reason.title}</h4>
                    <p className="trust-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="about-cta">
              <Link
                to="contact"
                smooth
                duration={500}
                className="about-button"
              >
                Contactez-moi <FaArrowRight className="about-button-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
