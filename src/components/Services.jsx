import { FaHome, FaBuilding, FaTools, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Services.css';

export default function Services() {
  const serviceCategories = [
    {
      title: "Nettoyage Résidentiel",
      icon: <FaHome />,
      description: "Solution complète pour particuliers :",
      items: [
        "Maisons & appartements",
        "Nettoyage des vitres et baies vitrées",
        "Nettoyage après déménagement",
        "Shampouinage de moquettes et tapis",
        "Entretien régulier",
        "Entretien des espaces extérieurs"
      ]
    },
    {
      title: "Nettoyage Commercial",
      icon: <FaBuilding />,
      description: "Services professionnels pour entreprises :",
      items: [
        "Bureaux & espaces commerciaux",
        "Désinfection des postes de travail",
        "Entretien des copropriétés",
        "Nettoyage et entretien des ascenseurs",
        "Nettoyage des parkings",
        "Nettoyage post-travaux"
      ]
    },
    {
      title: "Services Spécialisés",
      icon: <FaTools />,
      description: "Solutions techniques avancées :",
      items: [
        "Nettoyage haute pression",
        "Dégraissage industriel",
        "Traitement de surfaces",
        "Décontamination professionnelle",
        "Nettoyage des équipements industriels",
        "Entretien des parkings"
      ]
    }
  ];

  return (
    <section id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Mes Services Complets</h2>
          <p className="services-intro">
            Des prestations professionnelles et personnalisées pour répondre à tous vos besoins de nettoyage, que ce soit pour votre domicile ou vos locaux professionnels.
          </p>
        </div>
        
        <div className="services-grid">
          {serviceCategories.map((category, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <p className="service-description">{category.description}</p>
                
                <ul className="service-list">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="service-footer">
                  <Link
                    to="contact"
                    smooth
                    duration={500}
                    className="service-link"
                  >
                    En savoir plus <FaArrowRight className="service-link-icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
