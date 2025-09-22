import React, { useState, useEffect } from 'react';
import { Trees as Tree, Zap, Mountain } from 'lucide-react';

const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-forest-dark/95 backdrop-blur-sm border-b-2 border-accent-orange">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent-orange pixel-border flex items-center justify-center">
              <Tree className="w-6 h-6 text-forest-dark" />
            </div>
            <h1 className="text-xl font-bold text-nature-light pixel-font">Rural Hackers</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="nav-link">Is this you?</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#voices" className="nav-link">Voices</a>
            <a href="#participant-info" className="nav-link">Info</a>
            <a href="#apply" className="nav-link">Apply</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-8 h-8 bg-nature-medium pixel-border flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-4 h-4 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-accent-orange"></div>
              <div className="w-full h-0.5 bg-accent-orange"></div>
              <div className="w-full h-0.5 bg-accent-orange"></div>
            </div>
          </button>

          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-nature-medium pixel-border flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent-orange" />
            </div>
            <span className="text-sm text-nature-light pixel-font">
              {Math.round(scrollProgress)}% Complete
            </span>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-forest-dark/95 border-t border-accent-orange">
            <nav className="py-4 space-y-2">
              <a href="#about" className="block px-4 py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Is this you?</a>
              <a href="#experience" className="block px-4 py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#voices" className="block px-4 py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Partners</a>
              <a href="#venue" className="block px-4 py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Venue</a>
              <a href="#participant-info" className="block px-4 py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Participant Info</a>
              <a href="#apply" className="block px-4 py-2 nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-forest-medium">
        <div 
          className="h-full bg-gradient-to-r from-accent-orange to-nature-bright transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;