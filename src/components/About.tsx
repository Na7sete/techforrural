import React from 'react';
import { Heart, Users, MapPin, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-nature-dark to-forest-medium relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="pixel-grid-pattern w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-nature-bright/20 pixel-border mb-4">
            <span className="text-nature-bright pixel-font text-sm font-bold">SELF-CHECK</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-nature-light pixel-font mb-6">
            IS THIS <span className="text-accent-orange">YOU?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange pixel-border flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div>
                    <p className="text-lg text-nature-light pixel-font">
                      You live in a <strong>rural area</strong> and want to start or support a community or cultural project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature-bright pixel-border flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div>
                    <p className="text-lg text-nature-light pixel-font">
                      Or maybe you don't — but you feel deeply curious about <strong>rural life</strong> and want to reconnect with people, places, and purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature-medium pixel-border flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div>
                    <p className="text-lg text-nature-light pixel-font">
                      You're <strong>not a tech expert</strong>. You don't need to be.
                    </p>
                  </div>
                </div>
              </div>

              <div className="feature-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange pixel-border flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div>
                    <p className="text-lg text-nature-light pixel-font">
                      You care about <strong>people</strong>. About doing things differently. About learning by doing, not just reading theory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call-out Quote */}
          <div className="game-panel bg-forest-dark/50 p-8 text-center">
            <blockquote className="text-2xl md:text-3xl text-nature-light pixel-font mb-6 italic leading-relaxed">
              If you're 23–30, eager to explore how <span className="text-accent-orange font-bold">technology, creativity and collaboration</span> can spark change...
            </blockquote>
            <div className="text-3xl font-black text-nature-bright pixel-font">
              You belong here.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;