import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickNavigationSection from './components/QuickNavigationSection';
import ScenariosSection from './components/ScenariosSection';
import CollaborationSection from './components/CollaborationSection';
import AIBasicsSection from './components/AIBasicsSection';
import AIToolsSection from './components/AIToolsSection';
import GrowthSection from './components/GrowthSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <QuickNavigationSection />
        <ScenariosSection />
        <CollaborationSection />
        <AIBasicsSection />
        <AIToolsSection />
        <GrowthSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;