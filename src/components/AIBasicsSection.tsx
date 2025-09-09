import React, { useState } from 'react';
import { Brain, Eye, Volume2, Bot, Filter } from 'lucide-react';
import ToolCard from './ToolCard';
import { aiTools } from '../data/aiTools';
import { getToolsByCategory, getCategoryName, getCategoryDescription } from '../utils';

const AIBasicsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: '全部工具', icon: Filter, color: 'from-gray-500 to-gray-600' },
    { id: 'language', name: '语言模型', icon: Brain, color: 'from-blue-500 to-blue-600' },
    { id: 'vision', name: '视觉模型', icon: Eye, color: 'from-purple-500 to-purple-600' },
    { id: 'audio', name: '音频模型', icon: Volume2, color: 'from-green-500 to-green-600' },
    { id: 'agent', name: '智能体', icon: Bot, color: 'from-orange-500 to-orange-600' }
  ];

  const filteredTools = selectedCategory === 'all' 
    ? aiTools 
    : getToolsByCategory(aiTools, selectedCategory);

  return (
    <section id="ai-basics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI基础与能力
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            了解四大AI类型，掌握它们的核心能力和应用场景
          </p>
          
          {/* AI能力概述 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.slice(1).map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {getCategoryDescription(category.id)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 分类筛选器 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <IconComponent className="mr-2" size={20} />
                <span>{category.name}</span>
                {category.id !== 'all' && (
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    isActive ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {getToolsByCategory(aiTools, category.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 当前分类描述 */}
        {selectedCategory !== 'all' && (
          <div className="text-center mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {getCategoryName(selectedCategory)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {getCategoryDescription(selectedCategory)}
              </p>
            </div>
          </div>
        )}

        {/* 工具卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* 底部提示 */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 使用提示
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              每个AI工具都有其独特的优势和适用场景。建议你先从一个工具开始深入了解，
              然后根据具体需求选择最合适的工具。记住：<span className="font-semibold text-primary">好问题，才能得到好答案</span>！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBasicsSection;