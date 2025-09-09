import React from 'react';
import { Heart, Github, Mail, ArrowUp } from 'lucide-react';
import { scrollToSection } from '../utils';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 网站信息 */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              开学第一节AI课
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              这是一份献给2025年开学季大学生的AI使用指南。
              <span className="font-semibold text-yellow-300">无论你的AI知识基础如何，在学习完这份指南后，让你能无缝上手，并且能建立起自己的AI知识地图。</span>
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              在下次遇到学习、作业的一些任务时，你可以找到那个最让你得心应手的工具。
              让AI成为你学习和生活的得力助手。
            </p>
            <div className="flex items-center text-gray-400">
              <span className="mr-2">Made with</span>
              <Heart className="text-red-400 mx-1" size={16} />
              <span className="ml-2">for students</span>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速导航</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('ai-basics')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  AI基础与能力
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('collaboration')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  协作方法
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('scenarios')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  实践场景
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('growth')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  个人成长
                </button>
              </li>
            </ul>
          </div>

          {/* 推荐资源 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">推荐资源</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://waytoagi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  通往AGI之路
                </a>
              </li>
              <li>
                <a
                  href="https://deepseek.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  DeepSeek
                </a>
              </li>
              <li>
                <a
                  href="https://kimi.moonshot.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Kimi
                </a>
              </li>
              <li>
                <a
                  href="https://jimeng.jianying.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  即梦
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* 版权信息 */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="mb-2">
                © {currentYear} 大学生AI使用指南
              </p>
              <p className="text-xs">
                基于张梦飞的公众号内容 
                <a 
                  href="https://mp.weixin.qq.com/s/EDrr6jw7SBpfn80Td9k3BA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline ml-1"
                >
                  原文链接
                </a>
                <br />
                由 KIMI2 + CLAUDE CODE 制作
              </p>
            </div>

            {/* 社交链接和回到顶部 */}
            <div className="flex items-center space-x-4">
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                title="联系我们"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-400 hover:text-white transition-colors duration-300 ml-4"
                title="回到顶部"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 免责声明 */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="bg-gray-800 rounded-lg p-6">
            <h5 className="text-sm font-semibold text-gray-300 mb-2">免责声明</h5>
            <p className="text-xs text-gray-400 leading-relaxed">
              本网站内容仅供学习参考，所推荐的AI工具和服务均为第三方产品。
              使用前请仔细阅读相关服务条款，并注意保护个人隐私和数据安全。
              我们不对第三方服务的可用性、准确性或安全性承担责任。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;