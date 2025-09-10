// Google Analytics 4 & Google Tag Manager 配置和事件跟踪工具

// 配置常量
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID';
const GTM_ID = 'GTM-MRB8DSJF';

// 声明全局gtag函数类型
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// 初始化Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// 页面浏览跟踪
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

// 事件跟踪 - 同时支持GA4和GTM
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // GA4 事件跟踪
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label,
      value: parameters?.value,
      ...parameters,
    });
  }
  
  // GTM dataLayer 推送
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      event_category: parameters?.event_category || 'engagement',
      event_label: parameters?.label,
      value: parameters?.value,
      ...parameters,
    });
  }
};

// 预定义的事件跟踪函数
export const analytics = {
  // 按钮点击事件
  trackButtonClick: (buttonName: string, section?: string) => {
    trackEvent('button_click', {
      event_category: 'ui_interaction',
      button_name: buttonName,
      section: section,
    });
  },

  // 链接点击事件
  trackLinkClick: (linkUrl: string, linkText?: string) => {
    trackEvent('link_click', {
      event_category: 'navigation',
      link_url: linkUrl,
      link_text: linkText,
    });
  },

  // 工具卡片点击事件
  trackToolClick: (toolName: string, toolCategory?: string) => {
    trackEvent('tool_click', {
      event_category: 'tool_interaction',
      tool_name: toolName,
      tool_category: toolCategory,
    });
  },

  // 搜索事件
  trackSearch: (searchTerm: string) => {
    trackEvent('search', {
      event_category: 'search',
      search_term: searchTerm,
    });
  },

  // 滚动到锚点事件
  trackScrollToSection: (sectionName: string) => {
    trackEvent('scroll_to_section', {
      event_category: 'navigation',
      section_name: sectionName,
    });
  },

  // 模板复制事件
  trackTemplateCopy: (templateName: string) => {
    trackEvent('template_copy', {
      event_category: 'content_interaction',
      template_name: templateName,
    });
  },

  // 快速导航点击事件
  trackQuickNavClick: (navItem: string) => {
    trackEvent('quick_nav_click', {
      event_category: 'navigation',
      nav_item: navItem,
    });
  },
};

// GTM 自定义事件推送
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  }
};

// 用户同意跟踪后启用分析
export const enableAnalytics = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  }
  
  // GTM 同意事件
  pushToDataLayer({
    event: 'consent_granted',
    consent_type: 'analytics'
  });
};

// 用户拒绝跟踪后禁用分析
export const disableAnalytics = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    });
  }
  
  // GTM 拒绝事件
  pushToDataLayer({
    event: 'consent_denied',
    consent_type: 'analytics'
  });
};

export default analytics;