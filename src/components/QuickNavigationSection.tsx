import React from 'react';
import { BookOpen, FileText, Search, Code, Palette, Presentation, Users, Calculator } from 'lucide-react';

interface QuickNavItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  targetSection: string;
  color: string;
}

const quickNavItems: QuickNavItem[] = [
  {
    id: 'research',
    title: '写论文',
    description: '文献调研、论文写作、数据分析',
    icon: <BookOpen className="w-6 h-6" />,
    targetSection: 'scenarios',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'presentation',
    title: '做PPT',
    description: '演示文稿、图表制作、内容设计',
    icon: <Presentation className="w-6 h-6" />,
    targetSection: 'scenarios',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'search',
    title: '查资料',
    description: '信息检索、资料整理、知识总结',
    icon: <Search className="w-6 h-6" />,
    targetSection: 'ai-tools',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'coding',
    title: '编程辅助',
    description: '代码编写、调试、学习编程',
    icon: <Code className="w-6 h-6" />,
    targetSection: 'ai-tools',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'design',
    title: '设计创作',
    description: '图片生成、Logo设计、视觉创意',
    icon: <Palette className="w-6 h-6" />,
    targetSection: 'ai-tools',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'writing',
    title: '文案写作',
    description: '文章创作、内容润色、翻译',
    icon: <FileText className="w-6 h-6" />,
    targetSection: 'collaboration',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'teamwork',
    title: '团队协作',
    description: '项目管理、会议记录、任务分配',
    icon: <Users className="w-6 h-6" />,
    targetSection: 'scenarios',
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 'analysis',
    title: '数据分析',
    description: '统计分析、图表制作、报告生成',
    icon: <Calculator className="w-6 h-6" />,
    targetSection: 'ai-tools',
    color: 'from-red-500 to-red-600'
  }
];

const QuickNavigationSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="quick-nav" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            我要做什么？
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            快速找到适合你任务的AI工具，让学习和工作更高效
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickNavItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.targetSection)}
              className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-sm text-blue-600 font-medium group-hover:text-blue-700">
                  立即查看
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            点击任意卡片，快速跳转到相关工具和教程
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickNavigationSection;