import React, { useState } from 'react';
import { BookOpen, Presentation, Users, TrendingUp, ChevronRight, ExternalLink, AlertCircle } from 'lucide-react';
import { scenarios } from '../data/scenarios';
import { aiTools } from '../data/aiTools';
import { getToolById } from '../utils';

const ScenariosSection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);

  const scenarioIcons = {
    academic: BookOpen,
    classroom: Presentation,
    club: Users,
    skill: TrendingUp
  };

  const scenarioColors = {
    academic: 'from-blue-500 to-blue-600',
    classroom: 'from-green-500 to-green-600',
    club: 'from-purple-500 to-purple-600',
    skill: 'from-orange-500 to-orange-600'
  };

  const currentScenario = scenarios.find(s => s.id === activeScenario) || scenarios[0];
  const recommendedTools = currentScenario.tools.map(toolId => getToolById(aiTools, toolId)).filter(Boolean);

  return (
    <section id="scenarios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI在大学生活场景的实践
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            从学术研究到社团活动，AI都能成为你的得力助手
          </p>
        </div>

        {/* 场景选择器 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {scenarios.map((scenario) => {
            const IconComponent = scenarioIcons[scenario.id as keyof typeof scenarioIcons];
            const isActive = activeScenario === scenario.id;
            const colorClass = scenarioColors[scenario.id as keyof typeof scenarioColors];
            
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(scenario.id)}
                className={`flex items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${colorClass} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-md'
                }`}
              >
                <IconComponent className="mr-3" size={24} />
                <div className="text-left">
                  <div className="font-semibold">{scenario.title}</div>
                  <div className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                    {scenario.tools.length} 个推荐工具
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 当前场景详情 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-12">
          {/* 场景头部 */}
          <div className={`bg-gradient-to-r ${scenarioColors[currentScenario.id as keyof typeof scenarioColors]} p-8`}>
            <div className="flex items-center mb-4">
              {React.createElement(scenarioIcons[currentScenario.id as keyof typeof scenarioIcons], {
                className: "text-white mr-4",
                size: 40
              })}
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentScenario.title}
                </h3>
                <p className="text-white/90 text-lg">
                  {currentScenario.description}
                </p>
              </div>
            </div>
          </div>

          {/* 场景内容 */}
          <div className="p-8">
            {/* 痛点分析 */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="text-red-500 mr-2" size={24} />
                <h4 className="text-xl font-bold text-gray-900">常见痛点</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentScenario.painPoints.map((point, index) => (
                  <div key={index} className="flex items-start p-4 bg-red-50 rounded-lg border border-red-200">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 推荐工具 */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">🛠️</span>
                推荐AI工具
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedTools.map((tool) => (
                  <div key={tool.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{tool.icon}</span>
                      <div>
                        <h5 className="font-semibold text-gray-900">{tool.name}</h5>
                        <p className="text-sm text-gray-500">
                          {tool.category === 'language' && '语言模型'}
                          {tool.category === 'vision' && '视觉模型'}
                          {tool.category === 'audio' && '音频模型'}
                          {tool.category === 'agent' && '智能体'}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    <button
                      onClick={() => window.open(tool.link, '_blank')}
                      className="flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300"
                    >
                      <span className="mr-1">立即使用</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 应用示例 */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">💡</span>
                实际应用示例
              </h4>
              <div className="space-y-4">
                {currentScenario.examples.map((example, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{example}</p>
                    </div>
                    <ChevronRight className="text-green-500 ml-2 flex-shrink-0" size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 使用建议 */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎯 使用建议
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-2">1</span>
                先明确需求
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                不要直接让AI帮你完成整个任务，而是先和AI讨论，明确你的具体需求和目标。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-2">2</span>
                组合使用工具
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                不同工具有不同优势，学会组合使用。比如用Kimi讨论思路，用天工生成报告。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm mr-2">3</span>
                保持学习主动性
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                让AI成为你的辅助，而不是替代。用AI来提效和扩宽知识面，不要让渡"成长"的权利。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm mr-2">4</span>
                记录和分享
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                把你的使用心得和技巧记录下来，分享给同学，这样能加深理解并帮助他人。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;