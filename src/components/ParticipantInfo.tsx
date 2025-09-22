import React from 'react';
import { 
  Plane, 
  Clock, 
  Camera, 
  Laptop, 
  ShoppingBag, 
  Droplets,
  MapPin,
  Calendar,
  AlertTriangle,
  Users,
  Coffee,
  Backpack
} from 'lucide-react';

const ParticipantInfo: React.FC = () => {
  const whatToBring = [
    {
      icon: Laptop,
      title: "Your laptop",
      description: "Essential for the hackathon activities",
      color: "bg-accent-orange"
    },
    {
      icon: Droplets,
      title: "Rain jacket & boots",
      description: "Galician weather, rural area clothes",
      color: "bg-nature-bright"
    },
    {
      icon: Coffee,
      title: "Personal medication",
      description: "Any medication you need during the week",
      color: "bg-nature-medium"
    },
    {
      icon: Droplets,
      title: "Water bottle",
      description: "Personal reusable water bottle",
      color: "bg-forest-medium"
    },
    {
      icon: Coffee,
      title: "Regional snacks",
      description: "Country/regional snacks to share with others",
      color: "bg-accent-orange"
    }
  ];

  return (
    <section id="participant-info" className="py-20 bg-gradient-to-b from-forest-dark to-nature-dark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="pixel-grid-pattern w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-nature-bright/20 pixel-border mb-4">
            <span className="text-nature-bright pixel-font text-sm font-bold">ESSENTIAL INFO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-nature-light pixel-font mb-6">
            PARTICIPANT <span className="text-accent-orange">INFORMATION</span>
          </h2>
          <p className="text-xl text-nature-light/80 pixel-font max-w-3xl mx-auto">
            Everything you need to know for a successful experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Funding Logos Section */}
          <div className="game-panel bg-forest-medium/40 p-8 text-center">
            <h3 className="text-2xl font-bold text-nature-light pixel-font mb-6">Co-funded by</h3>
            <div className="flex items-center justify-center space-x-8">
              <div className="w-24 h-24 bg-white pixel-border flex items-center justify-center">
                <span className="text-blue-600 font-bold pixel-font text-xs">ERASMUS+</span>
              </div>
              <div className="w-24 h-24 bg-white pixel-border flex items-center justify-center">
                <span className="text-red-600 font-bold pixel-font text-xs">INJUVE</span>
              </div>
            </div>
          </div>

          {/* Travel Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="game-panel bg-forest-dark/60 p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent-orange pixel-border flex items-center justify-center">
                  <Plane className="w-8 h-8 text-forest-dark" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-nature-light pixel-font">Travel Guidelines</h3>
                  <p className="text-nature-bright pixel-font">Route to Pontevedra</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="achievement-item">
                  <div className="w-3 h-3 bg-accent-orange pixel-border flex-shrink-0" />
                  <span className="text-nature-light pixel-font">Most direct route from your organization's region</span>
                </div>
                <div className="achievement-item">
                  <div className="w-3 h-3 bg-nature-bright pixel-border flex-shrink-0" />
                  <span className="text-nature-light pixel-font">Contact coordinator for different routes/itineraries</span>
                </div>
                <div className="achievement-item">
                  <div className="w-3 h-3 bg-nature-medium pixel-border flex-shrink-0" />
                  <span className="text-nature-light pixel-font">Travel on arrival/departure days (17th & 25th Nov)</span>
                </div>
                <div className="achievement-item">
                  <div className="w-3 h-3 bg-forest-medium pixel-border flex-shrink-0" />
                  <span className="text-nature-light pixel-font">Alternative: 2 days before/after (15th Nov - 27th Nov)</span>
                </div>
              </div>
            </div>

            {/* Arrival & Departure Times */}
            <div className="space-y-6">
              <div className="game-panel bg-forest-dark/60 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-nature-bright pixel-border flex items-center justify-center">
                    <Clock className="w-6 h-6 text-forest-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-nature-light pixel-font">Arrival</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-nature-light pixel-font"><strong>Date:</strong> 17.11.2025</p>
                  <p className="text-nature-light pixel-font"><strong>Time:</strong> 19:00</p>
                  <p className="text-nature-light pixel-font"><strong>Location:</strong> Pontevedra Train Station</p>
                  <p className="text-sm text-nature-light/70 pixel-font">Arranged transportation to Anceu</p>
                </div>
              </div>

              <div className="game-panel bg-forest-dark/60 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-orange pixel-border flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-forest-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-nature-light pixel-font">Departure</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-nature-light pixel-font"><strong>Date:</strong> 25.11.2025</p>
                  <p className="text-nature-light pixel-font"><strong>Time:</strong> No earlier than 10:00</p>
                  <p className="text-nature-light pixel-font"><strong>Location:</strong> Pontevedra Train Station</p>
                  <p className="text-sm text-nature-light/70 pixel-font">Drop-off at train station</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Policies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="game-panel bg-forest-dark/60 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-nature-medium pixel-border flex items-center justify-center">
                  <Camera className="w-6 h-6 text-forest-dark" />
                </div>
                <h3 className="text-xl font-bold text-nature-light pixel-font">Photos & Videos</h3>
              </div>
              <p className="text-nature-light/90 pixel-font text-sm leading-relaxed">
                Pictures and videos taken during activities might be used to document the training and promote 
                the project in reports, partner websites, social media accounts and promotional materials.
              </p>
            </div>

            <div className="game-panel bg-forest-dark/60 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent-orange pixel-border flex items-center justify-center">
                  <Users className="w-6 h-6 text-forest-dark" />
                </div>
                <h3 className="text-xl font-bold text-nature-light pixel-font">Full Participation</h3>
              </div>
              <p className="text-nature-light/90 pixel-font text-sm leading-relaxed">
                For the benefit of the activity and to guarantee your full involvement, participants are expected 
                not to plan online meetings/appointments during the training time.
              </p>
            </div>

            <div className="game-panel bg-forest-dark/60 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-nature-bright pixel-border flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-forest-dark" />
                </div>
                <h3 className="text-xl font-bold text-nature-light pixel-font">No Alcohol Policy</h3>
              </div>
              <p className="text-nature-light/90 pixel-font text-sm leading-relaxed">
                In order to follow the venue's policy, alcohol consumption is not permitted during the program.
              </p>
            </div>

            <div className="game-panel bg-forest-dark/60 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-forest-medium pixel-border flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-forest-dark" />
                </div>
                <h3 className="text-xl font-bold text-nature-light pixel-font">Shopping</h3>
              </div>
              <p className="text-nature-light/90 pixel-font text-sm leading-relaxed">
                There is no shop in walking distance from the venue. Bring all necessities with you. 
                Buy extra snacks/personal items in Pontevedra before the meeting time.
              </p>
            </div>
          </div>

          {/* What to Bring */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block p-2 bg-accent-orange/20 pixel-border mb-4">
                <span className="text-accent-orange pixel-font text-sm font-bold">PACKING LIST</span>
              </div>
              <h3 className="text-4xl font-bold text-nature-light pixel-font mb-4">
                WHAT TO <span className="text-nature-bright">BRING</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatToBring.map((item, index) => (
                <div key={index} className="achievement-card group cursor-pointer">
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 ${item.color} pixel-border mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-forest-dark" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-nature-light pixel-font mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-nature-light/70 pixel-font leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Packing Tips */}
            <div className="mt-8 game-panel bg-accent-orange/10 p-6 text-center">
              <div className="w-12 h-12 bg-accent-orange pixel-border mx-auto mb-4 flex items-center justify-center">
                <Backpack className="w-6 h-6 text-forest-dark" />
              </div>
              <h4 className="text-xl font-bold text-nature-light pixel-font mb-4">Packing Tips</h4>
              <p className="text-nature-light/90 pixel-font max-w-2xl mx-auto">
                Remember to pack for Galician weather in rural areas. Bring comfortable clothes for outdoor activities, 
                and don't forget your regional snacks to share cultural flavors with fellow participants!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantInfo;