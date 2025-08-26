import React from 'react';
import { MapPin, Users, Lightbulb, Heart } from 'lucide-react';

const Impact: React.FC = () => {
  const partners = [
    {
      name: "Associazione Culturale Giovani Iddocca",
      country: "Italy",
      flag: "🇮🇹",
      color: "bg-green-600"
    },
    {
      name: "MITTETULUNDUSUHING SHOKKIN GROUP",
      country: "Estonia", 
      flag: "🇪🇪",
      color: "bg-blue-600"
    },
    {
      name: "Girls Gearing Up International Leadership Academy",
      country: "Germany",
      flag: "🇩🇪",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="voices" className="py-20 bg-gradient-to-b from-forest-dark to-nature-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="pixel-particles" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-nature-medium/20 pixel-border mb-4">
            <span className="text-nature-medium pixel-font text-sm font-bold">PARTNERS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-nature-light pixel-font mb-6">
            PARTNER <span className="text-accent-orange glitch-effect">ORGANIZATIONS</span>
          </h2>
          <h3 className="text-2xl font-bold text-nature-bright pixel-font mb-4">Join from these countries</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div key={index} className="achievement-card group cursor-pointer">
              <div className="text-center space-y-6">
                {/* Pixel Art Flag */}
                <div className="w-20 h-20 bg-white pixel-border mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-6xl">{partner.flag}</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-nature-light pixel-font mb-2">
                    {partner.country}
                  </h3>
                  <p className="text-sm text-nature-light/70 pixel-font leading-relaxed">
                    {partner.name}
                  </p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-nature-bright pixel-border flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-forest-dark" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Methodology */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-accent-orange/20 pixel-border mb-4">
              <span className="text-accent-orange pixel-font text-sm font-bold">THE METHOD</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-nature-light pixel-font mb-6">
              HOW IT <span className="text-nature-bright">WORKS</span>
            </h2>
          </div>

          {/* Modern Gamified Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Level 1: Connect */}
            <div className="game-panel bg-forest-medium/40 p-6 text-center group hover:bg-forest-medium/60 transition-all duration-300">
              <div className="w-16 h-16 bg-nature-bright pixel-border mx-auto mb-4 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-forest-dark" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-orange pixel-border flex items-center justify-center text-xs font-bold text-forest-dark">1</div>
              </div>
              <h3 className="text-xl font-bold text-nature-bright pixel-font mb-3">CONNECT</h3>
              <p className="text-nature-light pixel-font mb-4">Get to know the place and people</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-nature-bright pixel-border" />
                  <span className="text-nature-light pixel-font">Meet locals & learn traditions</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-nature-bright pixel-border" />
                  <span className="text-nature-light pixel-font">Walk the land & feel culture</span>
                </div>
              </div>
            </div>

            {/* Level 2: Learn */}
            <div className="game-panel bg-forest-medium/40 p-6 text-center group hover:bg-forest-medium/60 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-orange pixel-border mx-auto mb-4 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-forest-dark" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-nature-bright pixel-border flex items-center justify-center text-xs font-bold text-forest-dark">2</div>
              </div>
              <h3 className="text-xl font-bold text-accent-orange pixel-font mb-3">LEARN</h3>
              <p className="text-nature-light pixel-font mb-4">Explore digital tools in nature</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-accent-orange pixel-border" />
                  <span className="text-nature-light pixel-font">Nature hikes & calm immersion</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-accent-orange pixel-border" />
                  <span className="text-nature-light pixel-font">Digital tools & share stories</span>
                </div>
              </div>
            </div>

            {/* Level 3: Create */}
            <div className="game-panel bg-forest-medium/40 p-6 text-center group hover:bg-forest-medium/60 transition-all duration-300">
              <div className="w-16 h-16 bg-nature-medium pixel-border mx-auto mb-4 flex items-center justify-center relative group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-forest-dark" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-orange pixel-border flex items-center justify-center text-xs font-bold text-forest-dark">3</div>
              </div>
              <h3 className="text-xl font-bold text-nature-medium pixel-font mb-3">CREATE</h3>
              <p className="text-nature-light pixel-font mb-4">Use technology for social impact</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-nature-medium pixel-border" />
                  <span className="text-nature-light pixel-font">Build real solutions</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-nature-medium pixel-border" />
                  <span className="text-nature-light pixel-font">Community collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flow Map */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-forest-dark/50 p-6 pixel-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-nature-bright pixel-border flex items-center justify-center">
                  <span className="text-xs font-bold text-forest-dark pixel-font">1</span>
                </div>
                <span className="text-nature-bright pixel-font font-bold">CONNECT</span>
              </div>
              <div className="w-8 h-1 bg-accent-orange"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent-orange pixel-border flex items-center justify-center">
                  <span className="text-xs font-bold text-forest-dark pixel-font">2</span>
                </div>
                <span className="text-accent-orange pixel-font font-bold">LEARN</span>
              </div>
              <div className="w-8 h-1 bg-nature-medium"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-nature-medium pixel-border flex items-center justify-center">
                  <span className="text-xs font-bold text-forest-dark pixel-font">3</span>
                </div>
                <span className="text-nature-medium pixel-font font-bold">CREATE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;