import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { navigationItems } from '../data/navigation';
import { scrollToSection } from '../utils';
import { analytics } from '../utils/analytics';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    // 跟踪导航点击事件
    analytics.trackScrollToSection(sectionId);
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // 跟踪搜索事件
      analytics.trackSearch(searchQuery.trim());
      
      // 简单的搜索逻辑：根据关键词跳转到相关区域
      const query = searchQuery.toLowerCase();
      let targetSection = 'quick-nav';
      
      if (query.includes('工具') || query.includes('ai') || query.includes('模型')) {
        targetSection = 'ai-tools';
      } else if (query.includes('场景') || query.includes('案例') || query.includes('实践')) {
        targetSection = 'scenarios';
      } else if (query.includes('协作') || query.includes('提示') || query.includes('prompt')) {
        targetSection = 'collaboration';
      } else if (query.includes('成长') || query.includes('学习')) {
        targetSection = 'growth';
      }
      
      scrollToSection(targetSection);
      analytics.trackScrollToSection(targetSection);
      setSearchQuery('');
    }
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
              onClick={() => {
                analytics.trackScrollToSection('hero');
                scrollToSection('hero');
              }}
            >
              大学生AI使用指南
            </h1>
          </div>

          {/* Search Box */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索AI工具、场景或教程..."
                  className={`w-full px-4 py-2 pl-10 rounded-full text-sm transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500'
                      : 'bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:ring-2 focus:ring-white/50'
                  } focus:outline-none`}
                />
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                  isScrolled ? 'text-gray-400' : 'text-white/70'
                }`} />
              </div>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-baseline space-x-4">
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
          {/* Mobile Search */}
          <div className="px-4 pt-4 pb-2">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索AI工具、场景或教程..."
                  className="w-full px-4 py-2 pl-10 rounded-full text-sm bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </form>
          </div>
          
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