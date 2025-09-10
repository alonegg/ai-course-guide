import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickNavigationSection from './components/QuickNavigationSection';
import ScenariosSection from './components/ScenariosSection';
import CollaborationSection from './components/CollaborationSection';
import AIBasicsSection from './components/AIBasicsSection';
import AIToolsSection from './components/AIToolsSection';
import GrowthSection from './components/GrowthSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { initGA, trackPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    // 初始化Google Analytics
    initGA();
    // 跟踪首页浏览
    trackPageView('/', 'AI学习指南 - 首页');
  }, []);

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
      <CookieConsent />
    </div>
  );
}

export default App;