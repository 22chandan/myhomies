import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Home className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-xl font-bold text-gray-900">My Homies</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-indigo-600 transition-colors">FAQ</a>
          <a 
            href="#download" 
            className="bg-indigo-600 text-white px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-indigo-700 transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#download" 
              className="bg-indigo-600 text-white px-5 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;