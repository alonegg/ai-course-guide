import React, { useState } from 'react';
import { Lightbulb, Copy, Check, ArrowRight, X } from 'lucide-react';
import { promptTemplate, examplePrompt } from '../data/templates';

const CollaborationSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'framework' | 'example'>('framework');

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const promptFields = [
    { key: 'role', label: '角色', icon: '👤', color: 'from-blue-500 to-blue-600' },
    { key: 'goal', label: '目标', icon: '🎯', color: 'from-green-500 to-green-600' },
    { key: 'task', label: '任务', icon: '📋', color: 'from-purple-500 to-purple-600' },
    { key: 'example', label: '参考案例', icon: '💡', color: 'from-yellow-500 to-yellow-600' },
    { key: 'output', label: '输出', icon: '📤', color: 'from-red-500 to-red-600' }
  ];

  return (
    <section id="collaboration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            与AI协作的核心方法
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            学习AI工具，是一个性价比极高的事情，这些工具的使用：<span className="font-semibold text-blue-600">一通百通</span>
          </p>
          <div className="bg-blue-50 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold text-blue-600">核心观点：</span>
              学习提示词其实并不是要学习什么神秘的技术，而是要学习如何清晰、高效地表达你的需求
            </p>
            <p className="text-xl font-semibold text-gray-800">
              一句话：<span className="text-blue-600">好问题，才能得到好答案</span>
            </p>
          </div>
        </div>

        {/* 提示词重要性说明 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">提示词一点都不神秘</h3>
            <div className="bg-yellow-50 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-gray-800 font-medium">
                <span className="text-yellow-600 font-bold">提示词就是在对话框中发送给AI的问题</span>
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-700 text-center mb-6">
              如果只是提问题，那我们为什么还要学习呢？谁还不会提问啊。
            </p>
            <p className="text-xl font-semibold text-center text-red-600">
              哎，还真不是。大部分人，还真不会提问。
            </p>
          </div>
        </div>

        {/* 提示词对比示例 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">错误示例</h3>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 font-medium">❌ 模糊的提问：</p>
              <p className="text-gray-600 italic mb-4">"帮我策划一个社团的迎新活动。"</p>
              <div className="border-t border-red-200 pt-4">
                <p className="text-sm text-gray-600 mb-2 font-medium">AI的回答：</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 确定活动主题和目标：迎新、破冰、交流...</li>
                  <li>• 制定预算：根据社团经费...</li>
                  <li>• 选择时间和地点：找一个合适的教室...</li>
                  <li>• 设计活动流程：安排一些游戏和表演...</li>
                </ul>
                <p className="text-xs text-red-600 mt-2 font-medium">基本等于废话的模板</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">正确示例</h3>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4 font-medium">✅ 详细的提问：</p>
              <div className="text-sm text-gray-600 mb-4 space-y-2">
                <p>"你现在是一位经验丰富的大学社团活动策划师。请帮我们【吉他社】策划一场迎新派对：</p>
                <p><strong>背景：</strong>氛围轻松、主打民谣弹唱的社团</p>
                <p><strong>目标：</strong>让30名新老成员快速破冰</p>
                <p><strong>条件：</strong>预算500元，下周五晚上7-9点</p>
                <p><strong>任务：</strong>起名字、设计流程、列物料清单、写宣传文案"</p>
              </div>
              <div className="border-t border-green-200 pt-4">
                <p className="text-sm text-green-600 font-medium">结果：可以直接落地执行的行动方案！</p>
              </div>
            </div>
          </div>
        </div>

        {/* 核心理念 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">核心理念</h3>
            <p className="text-lg text-gray-700 mb-6">
              我们应该把AI，当成一个<span className="font-semibold text-blue-600">聪明但对你一无所知的'新同事'</span>，给他足够的信息。
            </p>
            <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-xl font-bold text-gray-800">
                从'废话模板'到'行动方案'，我们没有换更贵的AI，
                <br />只是改变了提问方式。
              </p>
            </div>
          </div>
        </div>

        {/* 标签页切换 */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('framework')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'framework'
                  ? 'bg-white text-primary shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              提示词框架
            </button>
            <button
              onClick={() => setActiveTab('example')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'example'
                  ? 'bg-white text-primary shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              实际案例
            </button>
          </div>
        </div>

        {/* 提示词框架 */}
        {activeTab === 'framework' && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                万能提示词模板
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                这个模板本质上是在帮你结构化地梳理需求，迫使你的表达更加清晰
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {promptFields.map((field) => (
                <div key={field.key} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className={`bg-gradient-to-r ${field.color} p-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{field.icon}</span>
                        <h4 className="text-xl font-bold text-white">{field.label}</h4>
                      </div>
                      <button
                        onClick={() => copyToClipboard(promptTemplate[field.key as keyof typeof promptTemplate] || '', field.key)}
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                      >
                        {copiedField === field.key ? (
                          <Check className="text-white" size={16} />
                        ) : (
                          <Copy className="text-white" size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">
                      {promptTemplate[field.key as keyof typeof promptTemplate]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 实际案例 */}
        {activeTab === 'example' && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                吉他社活动策划案例
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                看看如何将框架应用到实际场景中
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-white">完整提示词示例</h4>
                  <button
                    onClick={() => copyToClipboard(examplePrompt, 'example')}
                    className="flex items-center px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
                  >
                    {copiedField === 'example' ? (
                      <><Check className="mr-2" size={16} /> 已复制</>
                    ) : (
                      <><Copy className="mr-2" size={16} /> 复制</>
                    )}
                  </button>
                </div>
              </div>
              <div className="p-8">
                <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed font-mono text-sm bg-gray-50 rounded-lg p-6 overflow-x-auto">
                  {examplePrompt}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* 使用技巧 */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            💡 实用技巧
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900">选对工具类型</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                想画图就找视觉模型，想写文章就找语言模型。用错工具类型，再好的提示词也没用。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900">提示词要精准</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                把AI当成聪明但对你一无所知的'新同事'，给他足够的背景信息和明确的要求。
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900">适时换工具</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                如果结果不理想，可能是模型能力不足。不同模型有不同特长，多试几个。
              </p>
            </div>
          </div>
        </div>

        {/* 行动指引 */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <Lightbulb className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">
              现在就开始实践吧！
            </h3>
            <p className="text-lg mb-6 opacity-90">
              选择一个你感兴趣的场景，用刚学到的提示词技巧去尝试
            </p>
            <div className="flex items-center justify-center">
              <span className="mr-2">继续探索实践场景</span>
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;