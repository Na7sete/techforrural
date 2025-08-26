import React from 'react';
import { Mail, Instagram, HelpCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="apply" className="py-20 bg-gradient-to-t from-forest-dark to-nature-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-accent-orange/20 pixel-border mb-4">
            <span className="text-accent-orange pixel-font text-sm font-bold">QUESTIONS?</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-nature-light pixel-font mb-6">
            STILL HAVE <span className="text-nature-bright">DOUBTS?</span>
          </h2>
          <p className="text-xl text-nature-light/80 pixel-font max-w-2xl mx-auto">
            We're here. Talk to us like you would to a friend.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="game-panel bg-forest-medium/40 p-6">
                <h3 className="text-xl font-bold text-nature-light pixel-font mb-4">
                  We welcome applications from across Europe, from all backgrounds.
                </h3>
                <p className="text-lg text-accent-orange pixel-font font-bold">
                  You don't need to be a tech expert. You just need to care.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="contact-item">
                  <div className="w-12 h-12 bg-accent-orange pixel-border flex items-center justify-center">
                    <Mail className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-nature-light pixel-font mb-1">Email us</h4>
                    <a href="mailto:hello@ruralhackers.org" className="text-nature-light hover:text-accent-orange transition-colors pixel-font">
                      hello@ruralhackers.org
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="w-12 h-12 bg-nature-bright pixel-border flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-nature-light pixel-font mb-1">Follow us</h4>
                    <a href="https://instagram.com/ruralhackers" target="_blank" rel="noopener noreferrer" className="text-nature-light hover:text-accent-orange transition-colors pixel-font">
                      @ruralhackers
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Placeholder for balance */}
            <div className="game-panel bg-forest-medium/40 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-accent-orange pixel-border mx-auto flex items-center justify-center">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-nature-light pixel-font">Ready to connect?</h3>
                <p className="text-nature-light/70 pixel-font">
                  We're excited to hear from you and answer any questions about the program.
                </p>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center mt-16">
            <div className="game-panel bg-accent-orange/10 p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-nature-light pixel-font mb-4">
                We welcome applications from all backgrounds.
              </h3>
              <p className="text-lg text-nature-light/80 pixel-font mb-8">
                You don't need to be a tech expert. Just bring your curiosity!
              </p>
              <a 
                href="https://forms.gle/PXbnVr9nLvE1LFVC7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="game-button bg-accent-orange text-forest-dark px-12 py-6 pixel-font font-bold text-xl hover:bg-accent-orange/90 transform hover:scale-105 transition-all duration-300 inline-block"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;