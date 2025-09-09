import React, { useState } from 'react';
import { Rocket, Target, Share2, TrendingUp, CheckCircle, ArrowRight, ExternalLink, Star } from 'lucide-react';
import { growthStrategies } from '../data/templates';

const GrowthSection: React.FC = () => {
  const [activeStrategy, setActiveStrategy] = useState(0);

  const strategyIcons = [Share2, Target, Rocket];
  const strategyColors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600', 
    'from-purple-500 to-purple-600'
  ];

  const currentStrategy = growthStrategies[activeStrategy];
  const IconComponent = strategyIcons[activeStrategy];

  return (
    <section id="growth" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI驱动的个人成长战略
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            将AI技能转化为实实在在的作品、影响力，甚至是收入
          </p>
        </div>

        {/* 核心理念 */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-16 text-white shadow-xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              公开学习，建立影响力
            </h3>
            <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
              把自己学习、探索、甚至犯错的过程，变成有价值的分享
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📝</span>
                </div>
                <h4 className="font-semibold mb-2 text-white">记录过程</h4>
                <p className="text-sm text-white/90">分享真实的学习路径和成长过程</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold mb-2 text-white">建立连接</h4>
                <p className="text-sm text-white/90">吸引同样在探索AI的同学和牛人</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2 text-white">获得机会</h4>
                <p className="text-sm text-white/90">成为"机会来找你"的人</p>
              </div>
            </div>
          </div>
        </div>

        {/* 策略选择器 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {growthStrategies.map((strategy, index) => {
            const StrategyIcon = strategyIcons[index];
            const isActive = activeStrategy === index;
            const colorClass = strategyColors[index];
            
            return (
              <button
                key={strategy.id}
                onClick={() => setActiveStrategy(index)}
                className={`flex items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${colorClass} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-md'
                }`}
              >
                <StrategyIcon className="mr-3" size={24} />
                <div className="text-left">
                  <div className="font-semibold">{strategy.title}</div>
                  <div className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                    {strategy.steps.length} 个实施步骤
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 当前策略详情 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-12">
          {/* 策略头部 */}
          <div className={`bg-gradient-to-r ${strategyColors[activeStrategy]} p-8`}>
            <div className="flex items-center mb-4">
              <IconComponent className="text-white mr-4" size={40} />
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentStrategy.title}
                </h3>
                <p className="text-white/90 text-lg">
                  {currentStrategy.description}
                </p>
              </div>
            </div>
          </div>

          {/* 策略内容 */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 实施步骤 */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={24} />
                  实施步骤
                </h4>
                <div className="space-y-4">
                  {currentStrategy.steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center mr-4 mt-0.5">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 预期收益 */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="text-yellow-500 mr-2" size={24} />
                  预期收益
                </h4>
                <div className="space-y-4">
                  {currentStrategy.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <ArrowRight className="text-yellow-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 行动指南 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎯 立即行动指南
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">选择平台</h4>
              <p className="text-sm text-gray-600">小红书、朋友圈、抖音、公众号等</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✍️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">开始记录</h4>
              <p className="text-sm text-gray-600">一张截图 + 几句心得就够了</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">持续输出</h4>
              <p className="text-sm text-gray-600">培养输出习惯，不追求完美</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">复利增长</h4>
              <p className="text-sm text-gray-600">享受复利式的回报增长</p>
            </div>
          </div>
        </div>

        {/* 推荐资源 */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📚 推荐学习资源
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">🌐</span>
                通往AGI之路
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                当前互联网中最大的AI知识开源社区，完全公益、免费，包含你想了解的所有AI内容。
              </p>
              <button
                onClick={() => window.open('https://waytoagi.com', '_blank')}
                className="flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300"
              >
                <span className="mr-1">访问网站</span>
                <ExternalLink size={14} />
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                提示词进阶学习
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                李继刚老师的提示词分享，深入理解提示词的"道"和"术"，提升AI使用效果。
              </p>
              <button
                className="flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300"
              >
                <span className="mr-1">查看文章</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;