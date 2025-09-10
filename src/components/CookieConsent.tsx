import React, { useState, useEffect } from 'react';
import { X, Shield, Info } from 'lucide-react';
import { enableAnalytics, disableAnalytics } from '../utils/analytics';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // 检查用户是否已经做出选择
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // 延迟显示，避免影响首屏体验
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // 如果用户之前同意了，启用分析
      enableAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    enableAnalytics();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    disableAnalytics();
    setIsVisible(false);
  };

  const handleClose = () => {
    // 如果用户直接关闭，默认拒绝
    handleDecline();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      {/* Cookie同意横幅 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-t-2xl shadow-2xl border border-gray-200">
          {/* 头部 */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <Shield className="text-blue-600 mr-3" size={24} />
              <h3 className="text-lg font-semibold text-gray-900">
                我们重视您的隐私
              </h3>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* 内容 */}
          <div className="p-6">
            <p className="text-gray-600 mb-4 leading-relaxed">
              我们使用Cookie和类似技术来改善您的浏览体验，分析网站流量，并了解访问者来源。
              这些数据帮助我们优化网站内容，为您提供更好的服务。
            </p>

            {/* 详细信息 */}
            {showDetails && (
              <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Info className="mr-2" size={16} />
                  我们收集的信息类型
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span><strong>页面访问数据：</strong>您访问的页面、停留时间、跳转路径</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span><strong>交互行为：</strong>点击的按钮、使用的功能、搜索的内容</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span><strong>设备信息：</strong>浏览器类型、屏幕分辨率、操作系统</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span><strong>来源信息：</strong>您是如何找到我们网站的</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>隐私承诺：</strong>我们不会收集任何个人身份信息，所有数据都是匿名的，
                    仅用于改善网站体验。您可以随时通过浏览器设置清除这些数据。
                  </p>
                </div>
              </div>
            )}

            {/* 按钮区域 */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                接受所有Cookie
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-300"
              >
                拒绝非必要Cookie
              </button>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="px-6 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 border border-blue-200 rounded-lg hover:bg-blue-50"
              >
                {showDetails ? '隐藏详情' : '了解详情'}
              </button>
            </div>

            {/* 法律声明 */}
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              继续使用本网站即表示您同意我们的Cookie政策。
              您可以随时在浏览器设置中管理Cookie偏好。
              更多信息请查看我们的
              <a href="#" className="text-blue-600 hover:text-blue-700 underline ml-1">
                隐私政策
              </a>
              。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;