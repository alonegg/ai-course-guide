import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { scrollToSection } from '../utils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-primary via-secondary to-accent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className={`text-xl font-bold cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              onClick={() => scrollToSection('hero')}
            >
              大学生AI使用指南
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white/20 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-gray-900' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;