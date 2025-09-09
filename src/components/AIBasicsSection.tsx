import { useState } from 'react';
import { Brain, Eye, Mic, Bot, ChevronDown, ChevronUp } from 'lucide-react';

const AIBasicsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const aiTypes = [
    {
      icon: Brain,
      title: '语言模型',
      abilities: '对话、写作、总结、翻译、写代码',
      examples: ['ChatGPT', 'DeepSeek', '豆包']
    },
    {
      icon: Eye,
      title: '视觉模型',
      abilities: '文生图、图生图、Logo设计、视频生成',
      examples: ['即梦', '可灵', 'Midjourney']
    },
    {
      icon: Mic,
      title: '音频模型',
      abilities: '文字转语音、声音克隆、AI作曲',
      examples: ['Suno', 'MiniMax', '豆包']
    },
    {
      icon: Bot,
      title: '智能体',
      abilities: '自动化完成任务、多工具协作',
      examples: ['Manus', '天工智能体', 'Coze']
    }
  ];

  const scrollToAITools = () => {
    const element = document.getElementById('ai-tools');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="ai-basics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI能力分类
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            了解四大AI类型，掌握不同场景下的最佳工具选择
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                收起详细信息
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                查看详细信息
              </>
            )}
          </button>
        </div>

        {/* 简化视图 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {aiTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onClick={scrollToAITools}
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {type.title}
                </h3>
                <p className="text-xs text-gray-500">
                  点击了解更多
                </p>
              </div>
            );
          })}
        </div>

        {/* 详细信息展开区域 */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
            {aiTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {type.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">主要能力：</h4>
                    <p className="text-gray-600 text-sm">
                      {type.abilities}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">代表工具：</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs border border-gray-200"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBasicsSection;