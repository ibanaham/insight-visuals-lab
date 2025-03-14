
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

interface NavbarProps {
  onOpenCV?: () => void;
}

const Navbar = ({ onOpenCV }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-heading font-bold">
            The Statistics Lab
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`md:flex items-center space-x-8 ${
            isMenuOpen ? 'absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md p-4 shadow-lg' : 'hidden md:flex'
          }`}>
            <a href="/#" className="nav-link">Home</a>
            <a href="/#services" className="nav-link">Services</a>
            <a href="/#portfolio" className="nav-link">Portfolio</a>
            <Link to="/cv" className="nav-link">CV</Link>
            <a href="/#contact" className="nav-link">Contact</a>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
