import React from 'react';
import { Users, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-forest-dark via-forest-medium to-nature-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-accent-orange pixel-border opacity-60" style={{ animationDelay: '0s' }} />
        <div className="floating-element absolute top-40 right-20 w-3 h-3 bg-nature-bright pixel-border opacity-40" style={{ animationDelay: '1s' }} />
        <div className="floating-element absolute bottom-40 left-1/4 w-2 h-2 bg-accent-orange pixel-border opacity-50" style={{ animationDelay: '2s' }} />
        <div className="floating-element absolute bottom-60 right-1/3 w-5 h-5 bg-nature-medium pixel-border opacity-30" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="text-center space-y-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-block p-2 bg-accent-orange/20 pixel-border">
              <span className="text-accent-orange pixel-font text-sm font-bold">RURAL HACKERS</span>
            </div>
            
            <div className="inline-block p-3 bg-nature-bright/20 pixel-border">
              <span className="text-nature-bright pixel-font text-lg font-bold">17-25 NOVEMBER 2025</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-nature-light pixel-font leading-none">
              <span className="block text-accent-orange glitch-effect">TECH</span>
              <span className="block text-nature-bright">FOR RURAL</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-nature-bright pixel-font font-bold">
            Collective action. Creative tech. Rural futures.
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl text-nature-light/80 max-w-4xl mx-auto pixel-font leading-relaxed">
            A European experience for young people (23–30) eager to explore new ways of living, 
            collaborating and transforming communities using technology as a tool for social change.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="stat-card group cursor-pointer">
              <div className="w-12 h-12 bg-accent-orange pixel-border mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-forest-dark" />
              </div>
              <h3 className="text-2xl font-bold text-nature-bright pixel-font">European</h3>
              <p className="text-nature-light/70 pixel-font">Cross-border Experience</p>
            </div>

            <div className="stat-card group cursor-pointer">
              <div className="w-12 h-12 bg-nature-bright pixel-border mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-forest-dark" />
              </div>
              <h3 className="text-2xl font-bold text-accent-orange pixel-font">23-30</h3>
              <p className="text-nature-light/70 pixel-font">Age Range</p>
            </div>

            <div className="stat-card group cursor-pointer">
              <div className="w-12 h-12 bg-nature-medium pixel-border mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-forest-dark" />
              </div>
              <h3 className="text-2xl font-bold text-nature-bright pixel-font">Tech</h3>
              <p className="text-nature-light/70 pixel-font">For Social Change</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <a 
              href="https://forms.gle/PXbnVr9nLvE1LFVC7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="game-button bg-accent-orange text-forest-dark px-12 py-6 pixel-font font-bold text-xl hover:bg-accent-orange/90 transform hover:scale-105 transition-all duration-300 inline-block"
            >
              I WANT TO JOIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;