import React from 'react';
import './Privacy.css';

export default function Privacy() {
  return (
    <section id="privacy" className="privacy-section">
      <div className="privacy-container">
        <h2>Politique de Confidentialité</h2>
        <div className="privacy-content">
          <h3>1. Introduction</h3>
          <p>
            Chez SpeedClean72, nous nous engageons à protéger la vie privée de nos clients et des visiteurs de notre site web. 
            Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
          </p>

          <h3>2. Collecte des données</h3>
          <p>
            Nous collectons les informations personnelles suivantes lorsque vous utilisez notre site web ou nos services :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale</li>
            <li>Informations sur votre demande de service</li>
          </ul>

          <h3>3. Utilisation des données</h3>
          <p>
            Nous utilisons vos informations personnelles pour :
          </p>
          <ul>
            <li>Vous fournir nos services de nettoyage</li>
            <li>Communiquer avec vous concernant votre demande</li>
            <li>Améliorer nos services et votre expérience sur notre site</li>
            <li>Vous envoyer des informations sur nos offres et promotions (avec votre consentement)</li>
          </ul>

          <h3>4. Protection des données</h3>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, 
            utilisation ou divulgation non autorisés. Vos données sont stockées sur des serveurs sécurisés et ne sont accessibles 
            qu'aux personnes autorisées.
          </p>

          <h3>5. Partage des données</h3>
          <p>
            Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, 
            sauf si cela est nécessaire pour fournir nos services ou si la loi l'exige.
          </p>

          <h3>6. Cookies et technologies similaires</h3>
          <p>
            Notre site web utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre 
            navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités de notre site.
          </p>

          <h3>7. Vos droits</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>

          <h3>8. Contact</h3>
          <p>
            Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
            veuillez nous contacter à l'adresse suivante : contact@speedclean72.fr
          </p>

          <h3>9. Modifications de la politique</h3>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
            Les modifications seront publiées sur cette page avec une date de mise à jour.
          </p>

          <p className="privacy-date">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  );
}
