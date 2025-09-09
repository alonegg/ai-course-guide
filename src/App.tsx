import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AIBasicsSection from './components/AIBasicsSection';
import CollaborationSection from './components/CollaborationSection';
import ScenariosSection from './components/ScenariosSection';
import GrowthSection from './components/GrowthSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AIBasicsSection />
        <CollaborationSection />
        <ScenariosSection />
        <GrowthSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;