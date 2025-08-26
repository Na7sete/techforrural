import React, { useState } from 'react';
import { Brain, Users, Sprout, Rocket } from 'lucide-react';

interface Experience {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  unlocked: boolean;
}

const Features: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number>(1);

  const experiences: Experience[] = [
    {
      id: 1,
      icon: Brain,
      title: "Learn by doing",
      description: "You'll develop hands-on skills to support and transform communities",
      details: [
        "Support micro-communities",
        "Facilitate collective processes", 
        "Prototype ideas that matter",
        "Use digital tools with purpose"
      ],
      unlocked: true
    },
    {
      id: 2,
      icon: Users,
      title: "Connect with changemakers",
      description: "Meet other young people across Europe who share your values",
      details: [
        "Care about rural futures",
        "Create through culture, tech or community",
        "Share your values and curiosity",
        "Build lasting friendships"
      ],
      unlocked: true
    },
    {
      id: 3,
      icon: Sprout,
      title: "Experience rural life — for real",
      description: "You won't just talk about rural change. You'll live it.",
      details: [
        "Walk the fields",
        "Join real conversations",
        "Eat together, feel the rhythm",
        "Imagine a life there"
      ],
      unlocked: true
    },
    {
      id: 4,
      icon: Rocket,
      title: "Make something together",
      description: "Through a collective hackathon, create meaningful change",
      details: [
        "Build tools for real rural people",
        "Design digital spaces that amplify stories",
        "Collaborate on meaningful interventions",
        "Launch your first project"
      ],
      unlocked: true
    }
  ];

  const selectedExperienceData = experiences.find(e => e.id === selectedExperience) || experiences[0];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-forest-medium to-forest-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-accent-orange/20 pixel-border mb-4">
            <span className="text-accent-orange pixel-font text-sm font-bold">THE JOURNEY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-nature-light pixel-font mb-6">
            WHAT YOU'LL <span className="text-nature-bright">EXPERIENCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience List */}
          <div className="lg:col-span-1 space-y-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className={`feature-item cursor-pointer transition-all duration-300 ${
                  selectedExperience === experience.id ? 'selected' : ''
                }`}
                onClick={() => setSelectedExperience(experience.id)}
              >
                <div className="flex items-center space-x-4 p-4">
                  <div className="w-12 h-12 bg-accent-orange pixel-border flex items-center justify-center">
                    <experience.icon className="w-6 h-6 text-forest-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-nature-light pixel-font mb-1">
                      {experience.title}
                    </h3>
                    <div className="progress-bar-small">
                      <div className="progress-fill-small" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Detail */}
          <div className="lg:col-span-2">
            <div className="game-panel bg-forest-dark/60 p-8 h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent-orange pixel-border flex items-center justify-center">
                  <selectedExperienceData.icon className="w-8 h-8 text-forest-dark" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-nature-light pixel-font">
                    {selectedExperienceData.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-sm bg-nature-bright text-forest-dark px-3 py-1 pixel-border pixel-font">
                      UNLOCKED
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xl text-nature-light/90 pixel-font mb-8 leading-relaxed">
                {selectedExperienceData.description}
              </p>

              {/* Experience Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-accent-orange pixel-font mb-4">You'll:</h4>
                {selectedExperienceData.details.map((detail, index) => (
                  <div key={index} className="achievement-item">
                    <div className="w-3 h-3 bg-nature-bright pixel-border flex-shrink-0" />
                    <span className="text-nature-light pixel-font">{detail}</span>
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

export default Features;