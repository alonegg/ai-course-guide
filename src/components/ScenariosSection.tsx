import React, { useState } from 'react';
import { BookOpen, Presentation, Users, TrendingUp, ChevronRight, ExternalLink, AlertCircle, Copy, Check } from 'lucide-react';
import { scenarios } from '../data/scenarios';
import { aiTools } from '../data/aiTools';
import { getToolById } from '../utils';
import { analytics } from '../utils/analytics';

const ScenariosSection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

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

  // 提示词模板
  const promptTemplates = {
    academic: [
      {
        title: '论文写作助手',
        prompt: '我正在写一篇关于【主题】的学术论文，请帮我：\n1. 分析这个主题的研究现状\n2. 提出3-5个可能的研究角度\n3. 为每个角度提供2-3个支撑论据\n4. 建议相关的研究方法\n\n请用学术化但易懂的语言回答。',
        description: '帮助构建论文框架和研究思路'
      },
      {
        title: '文献综述生成器',
        prompt: '请帮我对【研究主题】进行文献综述分析：\n1. 总结该领域的主要研究方向\n2. 识别研究空白和争议点\n3. 分析研究方法的演进\n4. 提出未来研究建议\n\n请以学术论文的文献综述格式输出。',
        description: '快速梳理研究领域现状'
      }
    ],
    classroom: [
      {
        title: 'PPT内容规划师',
        prompt: '我需要制作一个关于【主题】的演示文稿，时长【X分钟】，面向【目标听众】。请帮我：\n1. 设计PPT的整体结构（包括页数建议）\n2. 为每个部分提供核心要点\n3. 建议合适的视觉元素类型\n4. 提供开场和结尾的建议\n\n请确保内容逻辑清晰，适合演讲。',
        description: '快速构建演示文稿框架'
      },
      {
        title: '课堂讨论引导',
        prompt: '我要在课堂上引导关于【话题】的讨论，请帮我：\n1. 设计3-5个层次递进的讨论问题\n2. 预测可能的观点分歧\n3. 准备引导性的补充问题\n4. 提供总结讨论的框架\n\n目标是让同学们深入思考并积极参与。',
        description: '设计有效的课堂互动'
      }
    ],
    club: [
      {
        title: '活动策划方案',
        prompt: '我们社团要举办【活动类型】，预算【金额】，参与人数约【人数】。请帮我制定详细方案：\n1. 活动流程和时间安排\n2. 所需物资和预算分配\n3. 人员分工建议\n4. 风险预案\n5. 宣传推广策略\n\n请确保方案可执行且有趣。',
        description: '全面的活动组织指南'
      },
      {
        title: '团队协作优化',
        prompt: '我们团队在【具体项目】上遇到了【具体问题】。请分析并提供解决方案：\n1. 问题的根本原因分析\n2. 改进团队协作的具体建议\n3. 任务分配和时间管理优化\n4. 沟通机制的改进方案\n\n请提供可操作的具体步骤。',
        description: '提升团队效率和协作'
      }
    ],
    skill: [
      {
        title: '学习计划制定',
        prompt: '我想在【时间期限】内掌握【技能名称】，目前水平是【当前水平】，目标是【期望水平】。请为我制定学习计划：\n1. 分阶段的学习目标\n2. 每个阶段的具体学习内容\n3. 推荐的学习资源\n4. 练习项目建议\n5. 进度检查节点\n\n请确保计划现实可行。',
        description: '个性化技能提升路径'
      },
      {
        title: '能力评估分析',
        prompt: '请帮我分析【技能领域】的能力模型：\n1. 该领域的核心能力要素\n2. 不同水平的能力表现\n3. 我目前的优势和不足（基于我的描述：【自我描述】）\n4. 针对性的提升建议\n5. 相关的实践机会\n\n请提供具体可衡量的标准。',
        description: '科学评估个人能力水平'
      }
    ]
  };

  const copyToClipboard = async (text: string, promptId: string, templateTitle: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // 跟踪模板复制事件
      analytics.trackTemplateCopy(templateTitle);
      setCopiedPrompt(promptId);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

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
                onClick={() => {
                  analytics.trackButtonClick(`场景切换-${scenario.title}`, 'scenarios');
                  setActiveScenario(scenario.id);
                }}
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
                      onClick={() => {
                        analytics.trackToolClick(tool.name, tool.category);
                        analytics.trackLinkClick(tool.link, tool.name);
                        window.open(tool.link, '_blank');
                      }}
                      className="flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300"
                    >
                      <span className="mr-1">立即使用</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 提示词模板 */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">🎯</span>
                专用提示词模板
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {promptTemplates[currentScenario.id as keyof typeof promptTemplates]?.map((template, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold text-gray-900">{template.title}</h5>
                      <button
                        onClick={() => copyToClipboard(template.prompt, `${currentScenario.id}-${index}`, template.title)}
                        className="flex items-center px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors duration-300"
                      >
                        {copiedPrompt === `${currentScenario.id}-${index}` ? (
                          <><Check size={14} className="mr-1" /> 已复制</>
                        ) : (
                          <><Copy size={14} className="mr-1" /> 复制</>
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-xs text-gray-700 font-mono leading-relaxed whitespace-pre-line">
                        {template.prompt.length > 150 ? `${template.prompt.substring(0, 150)}...` : template.prompt}
                      </p>
                    </div>
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