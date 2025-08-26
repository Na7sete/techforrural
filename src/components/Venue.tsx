import React from 'react';
import { Home, Wifi, Coffee, Trees, Waves, MapPin } from 'lucide-react';

const Venue: React.FC = () => {
  const amenities = [
    {
      icon: Home,
      title: "Shared rooms",
      description: "Same gender, mixed nationalities. Private bathrooms",
      color: "bg-accent-orange"
    },
    {
      icon: Coffee,
      title: "Fully equipped kitchen",
      description: "Cook together, eat together",
      color: "bg-nature-bright"
    },
    {
      icon: Wifi,
      title: "Co-working spaces",
      description: "High-speed internet",
      color: "bg-nature-medium"
    },
    {
      icon: Trees,
      title: "Outdoor areas",
      description: "Garden, terraces, firepit",
      color: "bg-forest-medium"
    },
    {
      icon: Waves,
      title: "Nature access",
      description: "Forest trails & swimming spots",
      color: "bg-accent-orange"
    }
  ];

  return (
    <section id="venue" className="py-20 bg-gradient-to-b from-nature-dark to-forest-medium relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="pixel-grid-pattern w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-nature-bright/20 pixel-border mb-4">
            <span className="text-nature-bright pixel-font text-sm font-bold">THE PLACE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-nature-light pixel-font mb-6">
            THE <span className="text-accent-orange">VENUE</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Pixel Art House */}
            <div className="text-center lg:text-left">
              <div className="inline-block relative">
                {/* House Structure */}
                <div className="pixel-house relative">
                  {/* Roof */}
                  <div className="w-80 h-20 bg-gradient-to-b from-red-700 to-red-800 pixel-border mx-auto relative">
                    <div className="absolute top-2 left-4 w-4 h-4 bg-red-900 pixel-border"></div>
                    <div className="absolute top-2 right-4 w-4 h-4 bg-red-900 pixel-border"></div>
                  </div>
                  
                  {/* Main House */}
                  <div className="w-72 h-48 bg-gradient-to-b from-yellow-100 to-yellow-200 pixel-border mx-auto relative">
                    {/* Door */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-amber-800 to-amber-900 pixel-border">
                      <div className="absolute top-8 right-2 w-2 h-2 bg-yellow-400 pixel-border"></div>
                    </div>
                    
                    {/* Windows */}
                    <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-b from-sky-300 to-sky-400 pixel-border">
                      <div className="absolute inset-1 border border-sky-600"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-sky-600"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-sky-600"></div>
                    </div>
                    
                    <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-b from-sky-300 to-sky-400 pixel-border">
                      <div className="absolute inset-1 border border-sky-600"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-sky-600"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-sky-600"></div>
                    </div>
                  </div>
                  
                  {/* Ground */}
                  <div className="w-96 h-8 bg-gradient-to-b from-green-600 to-green-700 pixel-border mx-auto"></div>
                  
                  {/* Trees */}
                  <div className="absolute -left-8 bottom-8 w-6 h-16 bg-gradient-to-b from-green-800 to-green-900 pixel-border">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 pixel-border rounded-full"></div>
                  </div>
                  
                  <div className="absolute -right-8 bottom-8 w-6 h-16 bg-gradient-to-b from-green-800 to-green-900 pixel-border">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 pixel-border rounded-full"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="floating-element absolute -top-4 -left-4 w-3 h-3 bg-accent-orange pixel-border opacity-60" style={{ animationDelay: '0s' }} />
                  <div className="floating-element absolute -top-2 -right-6 w-2 h-2 bg-nature-bright pixel-border opacity-80" style={{ animationDelay: '1.5s' }} />
                </div>
              </div>
            </div>

            {/* Venue Info */}
            <div className="space-y-6">
              <div className="game-panel bg-forest-dark/60 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent-orange pixel-border flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div>
                    <a href="https://www.anceu.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-nature-light pixel-font hover:text-accent-orange transition-colors">Anceu Coliving</a>
                    <p className="text-nature-bright pixel-font">Galicia, Spain</p>
                  </div>
                </div>
                
                <p className="text-lg text-nature-light/90 pixel-font leading-relaxed mb-6">
                  A rural coliving in northwest Spain that hosts people from across Europe to live, 
                  collaborate, and create in a peaceful natural environment.
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="feature-card group cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${amenity.color} pixel-border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <amenity.icon className="w-5 h-5 text-forest-dark" />
                      </div>
                      <div>
                        <h4 className="font-bold text-nature-light pixel-font text-sm">
                          {amenity.title}
                        </h4>
                        <p className="text-xs text-nature-light/70 pixel-font">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;