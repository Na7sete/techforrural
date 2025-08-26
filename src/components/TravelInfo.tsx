import React from 'react';
import { Plane, Shield, Users, FileText } from 'lucide-react';

const TravelInfo: React.FC = () => {
  return (
    <section id="travel" className="py-20 bg-gradient-to-b from-forest-medium to-nature-dark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="pixel-grid-pattern w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-accent-orange/20 pixel-border mb-4">
            <span className="text-accent-orange pixel-font text-sm font-bold">PRACTICAL INFO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-nature-light pixel-font mb-6">
            TRAVEL & <span className="text-nature-bright">REQUIREMENTS</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Travel Reimbursement */}
            <div className="game-panel bg-forest-dark/60 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent-orange pixel-border flex items-center justify-center">
                  <Plane className="w-8 h-8 text-forest-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nature-light pixel-font">Travel Reimbursement</h3>
                  <p className="text-nature-bright pixel-font">Fixed maximum amounts</p>
                </div>
              </div>

              <p className="text-lg text-nature-light/90 pixel-font mb-6 leading-relaxed">
                There is a fixed maximum amount reimbursable for your individual trip costs. 
                Selected participants need to plan their trip to the town of <strong>Pontevedra (Spain)</strong>.
              </p>

              {/* Distance Bands */}
              <div className="space-y-4 mb-6">
                <div className="stat-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">🇮🇹🇩🇪</span>
                        <span className="text-nature-light pixel-font font-bold">Italy, Germany</span>
                      </div>
                      <p className="text-nature-light/70 pixel-font text-sm">500 - 1999 km</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent-orange pixel-font">289€</div>
                    </div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">🇪🇪</span>
                        <span className="text-nature-light pixel-font font-bold">Estonia</span>
                      </div>
                      <p className="text-nature-light/70 pixel-font text-sm">2000 - 2999 km</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-accent-orange pixel-font">375€</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-nature-light/70 pixel-font">
                Reimbursements will be made by bank transfer to the sending organization after all necessary 
                travel documentation and proof of dissemination activities are sent to the hosts.
              </p>
            </div>

            {/* Insurance Requirements */}
            <div className="space-y-8">
              <div className="game-panel bg-forest-dark/60 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-nature-bright pixel-border flex items-center justify-center">
                    <Shield className="w-6 h-6 text-forest-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-nature-light pixel-font">Mandatory Insurance</h3>
                </div>

                <div className="space-y-3">
                  <div className="achievement-item">
                    <div className="w-3 h-3 bg-accent-orange pixel-border flex-shrink-0" />
                    <span className="text-nature-light pixel-font">Valid medical insurance (European Health Insurance Card)</span>
                  </div>
                  <div className="achievement-item">
                    <div className="w-3 h-3 bg-nature-bright pixel-border flex-shrink-0" />
                    <span className="text-nature-light pixel-font">Separate travel insurance covering:</span>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="achievement-item">
                      <div className="w-2 h-2 bg-nature-medium pixel-border flex-shrink-0" />
                      <span className="text-nature-light/80 pixel-font text-sm">Damage or loss of luggage</span>
                    </div>
                    <div className="achievement-item">
                      <div className="w-2 h-2 bg-nature-medium pixel-border flex-shrink-0" />
                      <span className="text-nature-light/80 pixel-font text-sm">Accidents and serious illness</span>
                    </div>
                    <div className="achievement-item">
                      <div className="w-2 h-2 bg-nature-medium pixel-border flex-shrink-0" />
                      <span className="text-nature-light/80 pixel-font text-sm">Death coverage</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-nature-light/70 pixel-font mt-4">
                  It is the responsibility of each participant to cover the costs and provide proof of medical and travel insurance.
                </p>
              </div>

              {/* Dissemination Requirements */}
              <div className="game-panel bg-forest-dark/60 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-nature-medium pixel-border flex items-center justify-center">
                    <Users className="w-6 h-6 text-forest-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-nature-light pixel-font">Dissemination Requirements</h3>
                </div>

                <p className="text-nature-light/90 pixel-font mb-4">
                  We want that the knowledge you gain here gets to your area, so you will organize a small event after coming back. Thus, it is a formal condition to:
                </p>

                <div className="space-y-4">
                  <div className="stat-mini">
                    <div className="w-8 h-8 bg-accent-orange pixel-border mx-auto mb-2 flex items-center justify-center">
                      <span className="text-forest-dark font-bold pixel-font">1</span>
                    </div>
                    <h4 className="font-bold text-nature-bright pixel-font mb-1">Knowledge Dissemination</h4>
                    <p className="text-xs text-nature-light/70 pixel-font">Organize a small event in your area to share the knowledge you gained</p>
                  </div>

                  <div className="stat-mini">
                    <div className="w-8 h-8 bg-nature-bright pixel-border mx-auto mb-2 flex items-center justify-center">
                      <span className="text-forest-dark font-bold pixel-font">2</span>
                    </div>
                    <h4 className="font-bold text-accent-orange pixel-font mb-1">Article Publication</h4>
                    <p className="text-xs text-nature-light/70 pixel-font">Write and publish an article about the youth exchange experience on your organization's online channel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="game-panel bg-accent-orange/10 p-6 max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-accent-orange pixel-border mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-6 h-6 text-forest-dark" />
              </div>
              <p className="text-lg text-nature-light pixel-font">
                More information about travel recommendations and arrival times will be sent to selected participants prior to the youth exchange.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;