import React from 'react';
import { Trees as Tree, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-dark border-t-2 border-accent-orange py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent-orange pixel-border flex items-center justify-center">
                <Tree className="w-6 h-6 text-forest-dark" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-nature-light pixel-font">Rural Hackers</h3>
            </div>
            <p className="text-nature-light/70 pixel-font mb-6 max-w-md text-sm md:text-base leading-relaxed">
              A European experience for young people eager to explore new ways of living, 
              collaborating and transforming communities using technology as a tool for social change.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/ruralhackers" target="_blank" rel="noopener noreferrer" className="social-link group">
                <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/company/ruralhackers" target="_blank" rel="noopener noreferrer" className="social-link group">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com/ruralhackers" target="_blank" rel="noopener noreferrer" className="social-link group">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-nature-light pixel-font font-bold mb-4 text-sm md:text-base">Navigate</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="footer-link text-sm md:text-base">Is this you?</a></li>
              <li><a href="#experience" className="footer-link text-sm md:text-base">Experience</a></li>
              <li><a href="#voices" className="footer-link text-sm md:text-base">Partners</a></li>
              <li><a href="#venue" className="footer-link text-sm md:text-base">Venue</a></li>
              <li><a href="#participant-info" className="footer-link text-sm md:text-base">Participant Info</a></li>
              <li><a href="#apply" className="footer-link text-sm md:text-base">Contact</a></li>
            </ul>
          </div>

          {/* Program Info */}
          <div>
            <h4 className="text-nature-light pixel-font font-bold mb-4 text-sm md:text-base">Program</h4>
            <ul className="space-y-2">
              <li><span className="text-nature-light/60 pixel-font text-sm md:text-base">Age: 23-30</span></li>
              <li><span className="text-nature-light/60 pixel-font text-sm md:text-base">European participants</span></li>
              <li><span className="text-nature-light/60 pixel-font text-sm md:text-base">No tech experience required</span></li>
              <li><span className="text-nature-light/60 pixel-font text-sm md:text-base">Erasmus+ funded</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nature-dark pt-8 mt-8">
          <div className="text-center space-y-4">
            <p className="text-nature-light/90 pixel-font text-sm md:text-lg">
              <em>This program is co-funded by the Erasmus+ programme (KA152-YOU).</em>
            </p>
            <p className="text-nature-light/70 pixel-font text-xs md:text-base leading-relaxed max-w-2xl mx-auto">
              No previous Erasmus+ experience or technical knowledge is required to join.  
              We believe in learning by doing, and growing together.
            </p>
            <p className="text-nature-light/60 pixel-font text-xs mt-6">
              © 2025 Rural Hackers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;