import React, { useState } from 'react';
import { Brain, Eye, Headphones, Zap } from 'lucide-react';
import { aiTools } from '../data/aiTools';
import ToolCard from './ToolCard';
import { analytics } from '../utils/analytics';

const AIToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: '全部', icon: Brain },
    { id: 'language', name: '语言模型', icon: Brain },
    { id: 'vision', name: '视觉模型', icon: Eye },
    { id: 'audio', name: '音频模型', icon: Headphones },
    { id: 'agent', name: '智能体', icon: Zap },
  ];

  const filteredTools = selectedCategory === 'all' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === selectedCategory);

  return (
    <section id="ai-tools" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI工具详解
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入了解各类AI工具的具体功能和使用方法
          </p>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  analytics.trackButtonClick(`分类筛选-${category.name}`, 'ai-tools');
                  setSelectedCategory(category.id);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* 工具网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* 使用提示 */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            💡 使用提示
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">选择合适的工具</h4>
              <p className="text-gray-600">
                根据你的具体需求选择对应类型的AI工具，不同工具有不同的专长领域。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">组合使用效果更佳</h4>
              <p className="text-gray-600">
                很多复杂任务需要多个AI工具配合完成，学会工具间的协作是关键。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;