// 平滑滚动到指定元素
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// 根据类别获取AI工具
export const getToolsByCategory = (tools: any[], category: string) => {
  return tools.filter(tool => tool.category === category);
};

// 根据ID获取AI工具
export const getToolById = (tools: any[], id: string) => {
  return tools.find(tool => tool.id === id);
};

// 获取工具的中文类别名称
export const getCategoryName = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'language': '语言模型',
    'vision': '视觉模型', 
    'audio': '音频模型',
    'agent': '智能体'
  };
  return categoryMap[category] || category;
};

// 获取类别的描述
export const getCategoryDescription = (category: string): string => {
  const descriptionMap: Record<string, string> = {
    'language': '精通语言、逻辑、推理和代码的"超级学霸"',
    'vision': '能够生成图片和视频的"才华横溢"艺术家',
    'audio': '拥有"能说会唱"本领的音频专家',
    'agent': '能够自动化完成复杂任务的智能助手'
  };
  return descriptionMap[category] || '';
};