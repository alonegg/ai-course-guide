import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleVisit = () => {
    window.open(tool.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="tool-card bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 工具图标和标题 */}
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{tool.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {tool.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {tool.category === 'language' && '语言模型'}
            {tool.category === 'vision' && '视觉模型'}
            {tool.category === 'audio' && '音频模型'}
            {tool.category === 'agent' && '智能体'}
          </p>
        </div>
      </div>

      {/* 基础描述 */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {tool.description}
      </p>

      {/* 详细描述 - 悬浮时显示 */}
      <div className="tool-description mb-4">
        {tool.detailedDescription && (
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary">
            <div className="flex items-start">
              <Info className="text-primary mr-2 mt-0.5 flex-shrink-0" size={16} />
              <p className="text-sm text-gray-700 leading-relaxed">
                {tool.detailedDescription}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 特性标签 */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {tool.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm rounded-full border border-primary/20"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* 访问按钮 */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleVisit}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
        >
          <span className="mr-2 text-white">立即体验</span>
          <ExternalLink size={16} className="text-white" />
        </button>
        
        {/* 悬浮状态指示器 */}
        <div className={`transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <span className="text-xs text-gray-600">悬浮查看详情</span>
        </div>
      </div>

      {/* 悬浮效果装饰 */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default ToolCard;