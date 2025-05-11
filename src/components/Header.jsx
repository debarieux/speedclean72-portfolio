import { Link } from 'react-scroll';
import { FaPhoneAlt } from 'react-icons/fa';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-700 flex items-center">
          <span className="bg-primary-600 text-white p-2 rounded-lg mr-2">SC72</span>
          SpeedClean72
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="services" smooth={true} duration={500} className="text-primary-800 hover:text-primary-600 font-medium transition-colors">Services</Link>
          <Link to="about" smooth={true} duration={500} className="text-primary-800 hover:text-primary-600 font-medium transition-colors">À propos</Link>
          <Link to="testimonials" smooth={true} duration={500} className="text-primary-800 hover:text-primary-600 font-medium transition-colors">Avis clients</Link>
          <Link to="gallery" smooth={true} duration={500} className="text-primary-800 hover:text-primary-600 font-medium transition-colors">Galerie</Link>
          
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors"
          >
            <FaPhoneAlt className="mr-2" />
            Devis gratuit
          </Link>
        </nav>

        <button
          className="md:hidden text-primary-700 focus:outline-none text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-3 border-t">
          <Link to="services" smooth={true} duration={500} className="block text-primary-800 font-medium py-2">Services</Link>
          <Link to="about" smooth={true} duration={500} className="block text-primary-800 font-medium py-2">À propos</Link>
          <Link to="testimonials" smooth={true} duration={500} className="block text-primary-800 font-medium py-2">Avis clients</Link>
          <Link to="gallery" smooth={true} duration={500} className="block text-primary-800 font-medium py-2">Galerie</Link>
          
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="block bg-primary-600 text-white text-center py-3 rounded-lg font-medium mt-2 flex items-center justify-center"
          >
            <FaPhoneAlt className="mr-2" />
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  )
}
