import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 渐变背景 */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* 动画背景元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* 标题区域 */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-yellow-300 mr-2" size={32} />
            <span className="text-white/80 text-lg font-medium">2025年开学季</span>
            <Sparkles className="text-yellow-300 ml-2" size={32} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              开学第一节AI课
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-6 leading-relaxed">
            你的AI学习最佳起点
          </p>
        </div>

        {/* 核心理念 */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 border border-white/20">
          <div className="mb-6">
            <p className="text-xl text-white font-medium mb-4">
              建立起自己的AI知识地图。
            </p>
            <p className="text-white/90">
              在下次遇到学习、作业的一些任务时，你可以找到那个最让你得心应手的工具。
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-lg text-white/95 mb-2">
              <span className="font-semibold text-yellow-300">核心理念：</span>
            </p>
            <p className="text-white/90 mb-4">
              <span className="font-semibold">AI是一个强大但普通的工具，而非许愿瓶</span>
            </p>
            <p className="text-white/80 text-sm">
              是工具就有他的适用场景，正确的使用可以让你事半功倍。
              <br />但是如果用了错误的工具或者错误的场景，可能结果是"事倍功半"。
            </p>
          </div>
        </div>

        {/* 行动按钮 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('ai-basics')}
            className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            开始探索 AI 工具
          </button>
          
          <button
            onClick={() => scrollToSection('collaboration')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
          >
            学习使用方法
          </button>
        </div>

        {/* 滚动提示 */}
        <div className="flex flex-col items-center">
          <p className="text-white/60 text-sm mb-2">向下滚动探索更多</p>
          <ArrowDown 
            className="text-white/60 animate-bounce cursor-pointer hover:text-white transition-colors duration-300" 
            size={24}
            onClick={() => scrollToSection('ai-basics')}
          />
        </div>
      </div>

      {/* 装饰性元素 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;