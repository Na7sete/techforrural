import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Impact from './components/Impact';
import Venue from './components/Venue';
import TravelInfo from './components/TravelInfo';
import ParticipantInfo from './components/ParticipantInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-forest-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Impact />
        <Venue />
        <TravelInfo />
        <ParticipantInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;